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
           "pkt-messagebox": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        title?: string;
        skin?: string;
      };
      "pkt-checkbox": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        isSwitch?: boolean;
        checked?: boolean;
        onChange?: (e: any) => void;
        disabled?: boolean;
        name?: string;
        value?: string;
        required?: boolean;
        label?: string;
        indeterminate?: boolean;
        ariaLabel?: string;
        ariaLabelledby?: string;
        ariaChecked?: boolean | "mixed";
      };
    }
  }
}

export {};