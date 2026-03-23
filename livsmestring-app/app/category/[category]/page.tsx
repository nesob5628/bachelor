export default function Page() {
  const undertemaer = ["tema1", "tema2", "tema3", "tema4", "tema5"];

  return (
    <main className="pkt-container">
      <div className="category-grid">
        {undertemaer.map((tema) => (
          <button
            key={tema}
            className="pkt-button pkt-button--primary pkt-button--small"
          >
            {tema}
          </button>
        ))}
      </div>
    </main>
  );
}