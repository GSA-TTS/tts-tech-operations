const nock = require("nock");
const slack = require("./slack");
const { shouldDeactivate } = require("./deactivate");
const fake = require("./fakes");

beforeAll(() => {
  nock.disableNetConnect();
});

beforeEach(() => {
  if (!nock.isActive()) {
    nock.activate();
  }
});

afterEach(() => {
  nock.cleanAll();
  nock.restore();
});

jest.mock("./slack");

describe("shouldDeactivate()", () => {
  test("returns false for users who were updated recently", () => {
    const user = fake.user();
    user.updated = Date.now() / 1000;
    return expect(shouldDeactivate(user)).resolves.toBe(false);
  });

  test("returns false for users with at least one conversation", () => {
    slack.botClient.users.conversations.mockImplementation(async () => {
      return {
        ok: true,
        channels: [fake.channel()],
        response_metadata: {
          next_cursor: "",
        },
      };
    });

    const user = fake.user();
    return expect(shouldDeactivate(user)).resolves.toBe(false);
  });

  test("returns true for users with no conversations", () => {
    slack.botClient.users.conversations.mockImplementation(async () => {
      return {
        ok: true,
        channels: [],
        response_metadata: {
          next_cursor: "",
        },
      };
    });

    const user = fake.user();
    return expect(shouldDeactivate(user)).resolves.toBe(true);
  });
});
