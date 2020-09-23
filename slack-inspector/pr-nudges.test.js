const nudge = require("./pr-nudges");

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
