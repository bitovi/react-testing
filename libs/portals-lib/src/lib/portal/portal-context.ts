import { createContext } from "react";

const PortalContext = createContext<ContextValue>({
  portalContainer: null,
  setPortalContainer: null
});

export default PortalContext;

export interface ContextValue {
  portalContainer: HTMLDivElement;
  setPortalContainer: (el: HTMLDivElement) => void;
}
