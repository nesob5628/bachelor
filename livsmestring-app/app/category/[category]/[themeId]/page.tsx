"use client";

import Papa from "papaparse";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch("/database.csv")
      .then((res) => res.text())
      .then((text) => {
        const result = Papa.parse(text, {
          header: true,
        });
        setData(result.data);
      });
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Videoer</h1>

      {data.slice(0, 5).map((item, i) => (
        <div key={i}>
          <h3>{item.title}</h3>

          <iframe
    
          width="400"
          height="225"
          src={`https://share.synthesia.io/embeds/videos/${item.videoId}`}
          allow="encrypted-media; fullscreen; microphone;"
          allowFullScreen
        />

        
  
        </div>
      ))}
    </main>
  );
}