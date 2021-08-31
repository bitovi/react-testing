import React, { useContext, useMemo } from "react";
import { createPortal } from "react-dom";
import PortalContext from "./portal-context";

export default function Portal({ children }: React.PropsWithChildren<unknown>) {
  const { portalContainer } = useContext(PortalContext);

  const portal = useMemo(() => {
    return portalContainer ? createPortal(children, portalContainer) : null;
  }, [children, portalContainer]);

  return portal;
}
