import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function usePathnameAsync(protocol: "http" | "https" = "https") {
  const [value, setValue] = useState<string>();
  const { pathname } = useLocation();
  const { part } = useParams() as Record<string, string>;

  useEffect(() => {
    setTimeout(() => setValue(`${protocol}://test.com${pathname}/${part}`), 1);
  }, [part, pathname, protocol]);

  return value;
}

export { usePathnameAsync };
