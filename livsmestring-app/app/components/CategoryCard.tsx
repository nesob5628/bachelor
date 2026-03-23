export default function CategoryCard({ title }: { title: string }) {
  return (
    <a href="#" className="pkt-linkcard pkt-linkcard--blue">
      <div className="pkt-linkcard__title">{title}</div>
    </a>
  );
}