import React from "react";
import { MemoryRouter, Route, Switch } from "react-router-dom";
import { renderHook } from "@testing-library/react-hooks";
import { usePathname } from "./router-hook";
import { usePathnameAsync } from "./router-hook-async";

const mockUseLocation = jest.fn();
jest.mock("react-router-dom", () => {
  return {
    // Use requireActual to access the module's functionality and include it in
    // the mock implementation. For example you'll see that the original
    // functionality of the `useParams` hook is maintained.
    ...jest.requireActual("react-router-dom"),

    // We override the module's `useLocation` implmentation with a mocked
    // function. We can use rest and spread to pass along any arguments to the
    // mock without needing to know the number of arguments or type.
    useLocation: (...args: any[]) => mockUseLocation(...args)
  };
});

beforeEach(() => {
  // Before each test clear any previous test mock results and reset the
  // default mock implemention. This implementation can be overridden by a
  // test if it needs too.
  mockUseLocation.mockClear().mockImplementation(() => ({ pathname: "/mock" }));
});

describe("Test a custom hook with @testing-library/react-hooks.", () => {
  it("can be invoked", () => {
    const { result } = renderHook(() => usePathname(), { wrapper: Wrapper });

    expect(result.current).toEqual("https://test.com/mock/001");
    expect(mockUseLocation).toHaveBeenCalledTimes(2);
    expect(mockUseLocation).toHaveBeenNthCalledWith(1);
    expect(mockUseLocation).toHaveBeenNthCalledWith(2);
  });

  it("will reset the useLocation mock between tests", () => {
    // This test overrides the mock implementation of `useLocation` to return a
    // different pathname value.
    mockUseLocation.mockImplementation(() => ({
      pathname: "/mock2"
    }));

    const { result } = renderHook(() => usePathname(), { wrapper: Wrapper });

    expect(result.current).toEqual("https://test.com/mock2/001");
    expect(mockUseLocation).toHaveBeenCalledTimes(2);
    expect(mockUseLocation).toHaveBeenNthCalledWith(1);
    expect(mockUseLocation).toHaveBeenNthCalledWith(2);
  });

  it("updates when props change", () => {
    // After the initial render the protocol will be changed and the result
    // produced by the hook will be different.
    const { rerender, result } = renderHook(
      ({ protocol }) => usePathname(protocol),
      {
        initialProps: { protocol: undefined },
        wrapper: Wrapper
      }
    );

    expect(result.current).toEqual("https://test.com/mock/001");
    expect(mockUseLocation).toHaveBeenCalledTimes(2);
    expect(mockUseLocation).toHaveBeenNthCalledWith(1);
    expect(mockUseLocation).toHaveBeenNthCalledWith(2);

    // Change the protocol value and the protocol portion of the returned URL
    // will reflect  the change.
    rerender({ protocol: "http" });
    expect(result.current).toEqual("http://test.com/mock/001");
    expect(mockUseLocation).toHaveBeenCalledTimes(4);
    expect(mockUseLocation).toHaveBeenNthCalledWith(3);
    expect(mockUseLocation).toHaveBeenNthCalledWith(4);
  });
});

describe("Test an asynchronous custom hook with @testing-library/react-hooks.", () => {
  it("waits for the hook result to change", async () => {
    const { result, waitForValueToChange } = renderHook(
      () => usePathnameAsync(),
      {
        wrapper: Wrapper
      }
    );

    expect(result.current).toEqual(undefined);

    await waitForValueToChange(() => result.current);

    expect(result.current).toEqual("https://test.com/mock/001");
    expect(mockUseLocation).toHaveBeenCalledTimes(2);
    expect(mockUseLocation).toHaveBeenNthCalledWith(1);
    expect(mockUseLocation).toHaveBeenNthCalledWith(2);
  });
});

/**
 * This React functional component includes Context providers that our hook
 * needs to operate. This is provided to `renderHook` as the `wrapper` option.
 */
function Wrapper({ children }: React.PropsWithChildren<unknown>) {
  return (
    <MemoryRouter initialEntries={["/one/001"]} initialIndex={0}>
      <Switch>
        <Route path="/one/:part">{children}</Route>
      </Switch>
    </MemoryRouter>
  );
}
