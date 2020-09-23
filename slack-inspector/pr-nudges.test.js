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
