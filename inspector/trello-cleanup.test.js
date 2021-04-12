const { DateTime } = require("luxon");
const nock = require("nock");
const trello = require("./trello-cleanup");

nock.disableNetConnect();

const toISO = (dateTime) => {
  return dateTime.toUTC().toISO();
};

const now = toISO(DateTime.now());

const boilerplateBoard = () => {
  return {
    name: "work and time planning",
    closed: false,
    dateClosed: null,
    idOrganization: "548679bfad903af11a6d4713",
    idEnterprise: "5f92e1ad02100a484fff1aa2",
    dateLastActivity: now,
    enterpriseOwned: true,
    id: "5661fa2a6350d24dba7bf1dc",
    url: "https://trello.com/b/wIrJEjL7/work-and-time-planning",
    dateLastView: now,
  };
};

describe("shouldClose()", () => {
  test("ignores active boards", () => {
    const board = boilerplateBoard();
    expect(trello.shouldClose(board)).toBe(false);
  });

  test("ignores closed boards", () => {
    const board = boilerplateBoard();
    board.closed = true;
    board.dateClosed = now;

    expect(trello.shouldClose(board)).toBe(false);
  });

  test("returns true for inactive boards", () => {
    const board = boilerplateBoard();
    board.dateLastActivity = "2019-01-01T00:00:00.000Z";

    expect(trello.shouldClose(board)).toBe(true);
  });
});
