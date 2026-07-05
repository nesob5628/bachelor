import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      // Custom PUNKT web components that are used as JSX elements in the app.
      "pkt-button": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "pkt-linkcard": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
