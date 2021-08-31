import React, { useMemo, useState } from "react";
import PortalContext from "./portal-context";
import type { ContextValue } from "./portal-context";

export default function Provider({ children }) {
  const [el, setEl] = useState<ContextValue["portalContainer"]>(null);

  const value = useMemo<ContextValue>(
    () => ({
      portalContainer: el,
      setPortalContainer: setEl
    }),
    [el]
  );

  return (
    <PortalContext.Provider value={value}>{children}</PortalContext.Provider>
  );
}
