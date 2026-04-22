"use client";

export default function Switch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (checked: boolean) => void;
}) {
  return (
    <pkt-checkbox
      label="Fullført video"
      isSwitch
      checked={checked}
      onChange={(e: any) => onChange(e.target.checked)}
    />
  );
}