const nock = require("nock");
const nudge = require("./pr-nudges");

nock.disableNetConnect();

describe("isVulnerable()", () => {
  test("handles zero vulnerabilities", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        nodes: [],
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(false);
  });

  test("handles dismissed vulnerabilities", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        nodes: [
          {
            dismissedAt: "2019-07-02T14:21:21Z",
          },
        ],
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(false);
  });

  test("handles open vulnerabilities", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        nodes: [
          {
            dismissedAt: null,
          },
        ],
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(true);
  });

  test("excludes archived repositories", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: true,
      vulnerabilityAlerts: {
        nodes: [
          {
            dismissedAt: null,
          },
        ],
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(false);
  });
});

describe("getMostFrequentValue()", () => {
  test("returns the most frequently-occuring property", () => {
    const list = [
      { foo: "bar" },
      { foo: "baz" },
      { foo: "blip" },
      { foo: "baz" },
    ];
    expect(nudge.getMostFrequentValue(list, "foo")).toBe("baz");
  });
});

describe("generateMessage()", () => {
  test("handles repos with alerts only", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: true,
      vulnerabilityAlerts: {
        nodes: [
          {
            dismissedAt: null,
          },
        ],
      },
      pullRequests: {
        totalCount: 0,
      },
    };

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("alert");
    expect(msg).not.toContain("pull request");
  });

  test("handles repos with pull requests only", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: true,
      vulnerabilityAlerts: {
        nodes: [],
      },
      pullRequests: {
        totalCount: 1,
      },
    };

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("pull request");
    expect(msg).not.toContain("alert");
  });

  test("handles repos with both", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: true,
      vulnerabilityAlerts: {
        nodes: [
          {
            dismissedAt: null,
          },
        ],
      },
      pullRequests: {
        totalCount: 1,
      },
    };

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("pull request");
    expect(msg).toContain("alert");
  });
});

describe("isViableChannel()", () => {
  test("handles internally-public channels", () => {
    const channel = {
      id: "C025S2DC9",
      is_channel: true,
      is_group: false,
      is_im: false,
      name: "some-internal-public-channel",
      is_shared: false,
      is_org_shared: false,
      is_ext_shared: false,
      is_private: false,
      is_mpim: false,
      pending_shared: [],
      is_pending_ext_shared: false,
    };

    expect(nudge.isViableChannel(channel)).toBe(true);
  });

  test("handles externally-public channels", () => {
    const channel = {
      id: "C025S2DC9",
      is_channel: true,
      is_group: false,
      is_im: false,
      name: "something-public",
      is_shared: false,
      is_org_shared: false,
      is_ext_shared: false,
      is_private: false,
      is_mpim: false,
      pending_shared: [],
      is_pending_ext_shared: false,
    };

    expect(nudge.isViableChannel(channel)).toBe(false);
  });

  test("handles private channels", () => {
    const channel = {
      id: "C025S2DC9",
      is_channel: false,
      is_group: false,
      is_im: false,
      name: "something-private",
      is_shared: false,
      is_org_shared: false,
      is_ext_shared: false,
      is_private: true,
      is_mpim: false,
      pending_shared: [],
      is_pending_ext_shared: false,
    };

    expect(nudge.isViableChannel(channel)).toBe(false);
  });

  test("handles direct messages", () => {
    const channel = {
      id: "C025S2DC9",
      is_channel: false,
      is_group: false,
      is_im: true,
      name: "direct-msg",
      is_shared: false,
      is_org_shared: false,
      is_ext_shared: false,
      is_private: true,
      is_mpim: false,
      pending_shared: [],
      is_pending_ext_shared: false,
    };

    expect(nudge.isViableChannel(channel)).toBe(false);
  });
});
