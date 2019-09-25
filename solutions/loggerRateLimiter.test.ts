import Logger from "./loggerRateLimiter";

describe("359. Logger Rate Limiter", () => {
  describe("Logger#shouldPrintMessage", () => {
    it("returns boolean value by usage until the time", () => {
      const logger = new Logger();

      expect(logger.shouldPrintMessage(1, "foo")).toBe(true);
      expect(logger.shouldPrintMessage(2, "bar")).toBe(true);
      expect(logger.shouldPrintMessage(3, "foo")).toBe(false);
      expect(logger.shouldPrintMessage(8, "bar")).toBe(false);
      expect(logger.shouldPrintMessage(10, "foo")).toBe(false);
      expect(logger.shouldPrintMessage(11, "foo")).toBe(true);
    });
  });
});
