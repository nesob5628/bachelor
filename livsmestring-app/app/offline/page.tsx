export default function OfflinePage() {
  // Display a fallback message when the app detects there is no internet connection.
  return (
    <main className="pkt-container" style={{ padding: "2rem 1rem" }}>
      <h1>Ingen nettforbindelse</h1>
      <p>Du må være koblet til internett for å se videoer i appen.</p>
    </main>
  );
}