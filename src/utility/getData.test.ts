import { getData } from "./getData";

describe("getData function", () => {
  it("should return data from API", async () => {
    const mockedFetch = jest.fn().mockResolvedValue({
      json: () => Promise.resolve(Array(1)),
    });

    global.fetch = mockedFetch;

    const data = (await getData()) as unknown as IPhoto[];

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
    mockedFetch.mockRestore();
  });

  it("should return an error message if API fails", async () => {
    const mockedFetch = jest.fn().mockResolvedValue({
      json: () => Promise.reject(),
    });

    global.fetch = mockedFetch;

    const data = (await getData()) as unknown as Error;

    expect(data).toBeDefined();
    expect(data).toBeInstanceOf(Error);
    expect(data.message).toBe("API failed to fetch");

    mockedFetch.mockRestore();
  });
});
