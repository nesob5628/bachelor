export default function Page() {
  const undertemaer = ["tema1", "tema2", "tema3", "tema4", "tema5"];

  return (
    <main style={{ padding: "2rem" }}>
      <div className="category-grid">
        {undertemaer.map((tema) => (
          <pkt-button
            key={tema}
            skin="primary"
            size="small"
            variant="label-only"
            iconName="heart"
            color="red"
            state="normal"
            type="button"
          >
            <span>{tema}</span>
          </pkt-button>
        ))}
      </div>
    </main>
  );
}