const nock = require("nock");
const fake = require("./fakes");
const nudge = require("./pr-nudges");

nock.disableNetConnect();

describe("isVulnerable()", () => {
  test("handles zero vulnerabilities", () => {
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [];

    expect(nudge.isVulnerable(repo)).toBe(false);
  });

  test("handles dismissed vulnerabilities", () => {
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [
      {
        dismissedAt: "2019-07-02T14:21:21Z",
      },
    ];

    expect(nudge.isVulnerable(repo)).toBe(false);
  });

  test("handles open vulnerabilities", () => {
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [
      {
        dismissedAt: null,
      },
    ];

    expect(nudge.isVulnerable(repo)).toBe(true);
  });

  test("excludes archived repositories", () => {
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [
      {
        dismissedAt: null,
      },
    ];
    repo.isArchived = true;

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
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [
      {
        dismissedAt: null,
      },
    ];

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("alert");
    expect(msg).not.toContain("pull request");
  });

  test("handles repos with pull requests only", () => {
    const repo = fake.repo();
    repo.pullRequests.totalCount = 1;

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("pull request");
    expect(msg).not.toContain("alert");
  });

  test("handles repos with both", () => {
    const repo = fake.repo();
    repo.vulnerabilityAlerts.nodes = [
      {
        dismissedAt: null,
      },
    ];
    repo.pullRequests.totalCount = 1;

    const msg = nudge.generateMessage(repo);
    expect(msg).toContain("pull request");
    expect(msg).toContain("alert");
  });
});

describe("isViableChannel()", () => {
  test("handles internally-public channels", () => {
    const channel = fake.channel();
    channel.is_channel = true;

    expect(nudge.isViableChannel(channel)).toBe(true);
  });

  test("handles externally-public channels", () => {
    const channel = fake.channel();
    channel.is_channel = true;
    channel.name = "something-public";

    expect(nudge.isViableChannel(channel)).toBe(false);
  });

  test("handles private channels", () => {
    const channel = fake.channel();
    channel.is_channel = false;
    channel.is_private = true;

    expect(nudge.isViableChannel(channel)).toBe(false);
  });

  test("handles direct messages", () => {
    const channel = fake.channel();
    channel.is_channel = false;
    channel.is_im = true;

    expect(nudge.isViableChannel(channel)).toBe(false);
  });
});
