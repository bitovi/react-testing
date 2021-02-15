import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function usePathname(protocol: "http" | "https" = "https") {
  const [value, setValue] = useState<string>();
  const { pathname } = useLocation();
  const { part } = useParams() as Record<string, string>;

  useEffect(() => {
    setValue(`${protocol}://test.com${pathname}/${part}`);
  }, [part, pathname, protocol]);

  return value;
}

export { usePathname };
