type Props = {
  title: string;
  children: React.ReactNode;
  skin?: "beige" | "green" | "blue" | "red";
};

export default function MessageBox({
  title,
  children,
  skin = "beige",
}: Props) {
  // `MessageBox` is a thin wrapper around the Punkt web component
  // that centers its children and exposes a small set of skin options.
  return (
    <pkt-messagebox title={title} skin={skin}>
      <span style={{ textAlign: "center", width: "100%", display: "block" }}>
        {children}
      </span>
    </pkt-messagebox>
  );
}