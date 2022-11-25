import reducer from "./reducer";

describe("tickers reducer", () => {
  const state = {
    actualTickers: [],
    previousTickers: [],
    loading: false,
    error: false,
  };

  it("should return default value", () => {
    expect(reducer(undefined, {})).toEqual(state);
  });
  describe("for GET_TICKERS_REQUESTED action", () => {
    it("should return state with truthy 'loading' property", () => {
      expect(reducer(state, { type: "GET_TICKERS_REQUESTED" })).toEqual({
        loading: true,
        actualTickers: [],
        previousTickers: [],
        error: false,
      });
    });
  });
  describe("for GET_TICKERS_ACTUAL action", () => {
    it("should add passed data to 'actualTickers' property of state", () => {
      expect(
        reducer(state, {
          type: "GET_TICKERS_ACTUAL",
          payload: [
            {
              ticker: "GOOGL",
              price: 237.08,
            },
            {
              ticker: "MSFT",
              price: 261.46,
            },
          ],
        })
      ).toEqual({
        loading: false,
        error: false,
        actualTickers: [
          {
            ticker: "GOOGL",
            price: 237.08,
          },
          {
            ticker: "MSFT",
            price: 261.46,
          },
        ],
        previousTickers: [],
      });
    });
  });
  describe("for GET_TICKERS_PREVIOUS action", () => {
    it("should add passed data to 'previousTickers' property of state", () => {
      expect(
        reducer(state, {
          type: "GET_TICKERS_PREVIOUS",
          payload: [
            {
              ticker: "AMZN",
              price: 260.34,
            },
          ],
        })
      ).toEqual({
        loading: false,
        error: false,
        actualTickers: [],
        previousTickers: [
          {
            ticker: "AMZN",
            price: 260.34,
          },
        ],
      });
    });
  });
  describe("for GET_TICKERS_ERROR action", () => {
    it("should return state with truthy 'error' property", () => {
      expect(reducer(state, { type: "GET_TICKERS_ERROR" })).toEqual({
        actualTickers: [],
        previousTickers: [],
        loading: false,
        error: true,
      });
    });
  });
});
