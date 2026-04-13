import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "pkt-progressbar": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        title?: string;
        valueMin?: number | string;
        valueMax?: number | string;
        valueCurrent?: number | string;
        statusType?: string;
        statusPlacement?: string;
        skin?: string;
        ariaLabel?: string;
        ariaLabelledby?: string;
        ariaValueText?: string;
        titlePosition?: string;
        role?: string;
        ariaLive?: string;
      };
    }
  }
}

export {};