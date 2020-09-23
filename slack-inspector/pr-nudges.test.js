const nudge = require("./pr-nudges");

describe("isVulnerable()", () => {
  test("handles zero vulnerabilities", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        totalCount: 0,
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(false);
  });

  test("handles more than zero vulnerabilities", () => {
    const repo = {
      nameWithOwner: "someorg/somerepo",
      isArchived: false,
      vulnerabilityAlerts: {
        totalCount: 1,
      },
      pullRequests: {
        totalCount: 0,
      },
    };
    expect(nudge.isVulnerable(repo)).toBe(true);
  });
});
