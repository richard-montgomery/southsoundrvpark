import { useMemo, useState } from "react";
import { spaces } from "./data/spaces.js";
import SpaceGrid from "./components/SpaceGrid.jsx";
import SpaceDetails from "./components/SpaceDetails.jsx";

export default function App() {
  const firstAvailable = useMemo(
    () => spaces.find((s) => s.status === "available"),
    []
  );

  const [selectedNumber, setSelectedNumber] = useState(
    firstAvailable ? firstAvailable.number : null
  );

  const selectedSpace = spaces.find((s) => s.number === selectedNumber) || null;

  const availableCount = spaces.filter((s) => s.status === "available").length;

  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">South Sound RV Park</p>
        <h1>Space Availability</h1>
        <p className="muted">
          {availableCount} of {spaces.length} spaces open
        </p>
      </header>

      <main className="app-main">
        <SpaceGrid
          spaces={spaces}
          selectedNumber={selectedNumber}
          onSelect={setSelectedNumber}
        />
        <SpaceDetails space={selectedSpace} />
      </main>

      <footer className="app-footer">
        <div className="footer-item">
          <span className="footer-label">Address</span>
          <a
            className="footer-value"
            href="https://www.google.com/maps/search/?api=1&query=South+Sound+RV+Park+7910+River+Road+East+Puyallup+WA+98371"
            target="_blank"
            rel="noopener noreferrer"
          >
            7910 River Road East, Puyallup, WA 98371
          </a>
        </div>
        <div className="footer-item">
          <span className="footer-label">Phone</span>
          <a className="footer-value" href="tel:2532564781">
            (253) 256-4781
          </a>
        </div>
      </footer>
    </div>
  );
}
