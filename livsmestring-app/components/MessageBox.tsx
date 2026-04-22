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
  return (
    <pkt-messagebox title={title} skin={skin}>
      <span>{children}</span>
    </pkt-messagebox>
  );
}