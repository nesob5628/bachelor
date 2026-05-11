import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "pkt-button": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
      "pkt-linkcard": DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

export {};
