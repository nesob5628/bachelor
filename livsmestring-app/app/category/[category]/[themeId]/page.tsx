"use client";

import { topics } from "@/lib/data/videos";
import { Topic } from "@/lib/types";

export default function Page() {
  return (
    <main style={{ padding: "2rem" }}>
      <h1>Videoer</h1>

      {topics.map((item: Topic, i: number) => (
        <div key={item.synthesiaId || i} style={{ marginBottom: "2rem" }}>
          <h3>{item.title}</h3>

          {item.synthesiaId && (
            <iframe
              width="400"
              height="225"
              src={`https://share.synthesia.io/embeds/videos/${item.synthesiaId}`}
              allow="encrypted-media; fullscreen;"
              allowFullScreen
            />
          )}
        </div>
      ))}
    </main>
  );
}