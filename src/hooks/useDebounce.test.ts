import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./useDebounce";

jest.useFakeTimers();

describe("useDebounce hook", () => {
  it("returns the debounced value after the specified delay", () => {
    const delay = 500;
    const value = "test value";
    const { result } = renderHook(() => useDebounce(value, delay));

    expect(result.current.debouncedValue).toBe(value);
    expect(result.current.loading).toBe(true);

    const newValue = "new value";
    act(() => {
      result.current.debouncedValue = newValue;
    });

    expect(result.current.debouncedValue).toBe(newValue);
    expect(result.current.loading).toBe(true);

    act(() => {
      jest.advanceTimersByTime(delay);
    });

    expect(result.current.debouncedValue).toBe(value);
    expect(result.current.loading).toBe(false);
  });

  it("clears the timeout when unmounted", () => {
    const delay = 500;
    const value = "test value";
    const { unmount } = renderHook(() => useDebounce(value, delay));

    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");
    unmount();

    expect(clearTimeoutSpy).toHaveBeenCalledTimes(1);
  });
});
