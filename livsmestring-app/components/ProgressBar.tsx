"use client";

// Props for the ProgressBar component.
// - `value`: current progress (0-100)
// - `label`: optional accessible title for the progressbar
// - `small`: when true renders a compact variant
type ProgressBarProps = {
  value: number;
  label?: string;
  small?: boolean;
};

// Render a Punkt `pkt-progressbar` web component. This is a thin wrapper
// that supplies the value and optional label and toggles a small layout class.
export default function ProgressBar({ value, label, small = false }: ProgressBarProps) {
  return (
    <div className={`progress-wrapper ${small ? "progress-wrapper--small" : ""}`}>
      <pkt-progressbar title={label} valueCurrent={value} valueMax={100} statusType="percentage" />
    </div>
  );
}