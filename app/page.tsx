export default function HomePage() {
  const matchTime = "17:15";
  const jamaicaOffsetHours = -5;

  const parseTime = (time: string) => {
    const [hours, minutes] = time.split(":").map((segment) => parseInt(segment, 10));
    return { hours, minutes };
  };

  const formatTime = (hours: number, minutes: number) => {
    const normalizedMinutes = ((minutes % 60) + 60) % 60;
    const totalHours = hours + Math.floor(minutes / 60);
    const normalizedHours = ((totalHours % 24) + 24) % 24;
    const paddedHours = normalizedHours.toString().padStart(2, "0");
    const paddedMinutes = normalizedMinutes.toString().padStart(2, "0");
    return `${paddedHours}:${paddedMinutes}`;
  };

  const { hours, minutes } = parseTime(matchTime);
  const jamaicaTime = formatTime(hours + jamaicaOffsetHours, minutes);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        background: "#0f172a",
        color: "#f8fafc",
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <section
        style={{
          width: "min(90vw, 460px)",
          padding: "2.5rem",
          borderRadius: "1.5rem",
          background: "rgba(15, 23, 42, 0.8)",
          boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.65)",
          border: "1px solid rgba(148, 163, 184, 0.2)",
          display: "grid",
          gap: "1.5rem",
        }}
      >
        <header style={{ display: "grid", gap: "0.5rem" }}>
          <span
            style={{
              textTransform: "uppercase",
              letterSpacing: "0.2em",
              fontSize: "0.85rem",
              color: "#38bdf8",
            }}
          >
            Konvertim Orari
          </span>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 700, margin: 0 }}>
            Orari i transmetimit në Xhamajkë
          </h1>
        </header>
        <div
          style={{
            display: "grid",
            gap: "0.75rem",
            padding: "1.25rem",
            borderRadius: "1.25rem",
            background: "rgba(8, 16, 28, 0.8)",
            border: "1px solid rgba(148, 163, 184, 0.12)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.95rem", color: "#cbd5f5" }}>Ndeshja lokale</span>
            <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>{matchTime}</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: "0.95rem", color: "#cbd5f5" }}>
              Transmetimi në Xhamajkë (−5 orë)
            </span>
            <span style={{ fontSize: "1.25rem", fontWeight: 600 }}>{jamaicaTime}</span>
          </div>
        </div>
        <p style={{ lineHeight: 1.6, color: "#e2e8f0", margin: 0 }}>
          Meqenëse transmetimi në Xhamajkë fillon pesë orë pas fillimit lokal të ndeshjes (17:15),
          orari i transmetimit atje do të jetë <strong>{jamaicaTime}</strong>.
        </p>
      </section>
    </main>
  );
}
