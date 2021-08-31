import React, { useContext } from "react";
import PortalContext from "./portal-context";

export default function PortalContainer(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) {
  const ctx = useContext(PortalContext);
  return <div {...props} ref={ctx.setPortalContainer}></div>;
}
