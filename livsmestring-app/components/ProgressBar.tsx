"use client";

type ProgressBarProps = {
  value: number;
  label?: string;
  small?: boolean;
};

export default function ProgressBar({
  value,
  label,
  small = false,
}: ProgressBarProps) {
  return (
    <div className={`progress-wrapper ${small ? "progress-wrapper--small" : ""}`}>
      <pkt-progressbar
        title={label}
        valueCurrent={value}
        valueMax={100}
        statusType="percentage"
      ></pkt-progressbar>
    </div>
  );
}