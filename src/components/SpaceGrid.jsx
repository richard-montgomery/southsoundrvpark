export default function SpaceGrid({ spaces, selectedNumber, onSelect }) {
  return (
    <div className="space-grid" role="group" aria-label="RV space map">
      {spaces.map((space) => {
        const isAvailable = space.status === "available";
        const isSelected = space.number === selectedNumber;
        return (
          <button
            key={space.number}
            type="button"
            className={[
              "space-tile",
              isAvailable ? "is-available" : "is-occupied",
              isSelected ? "is-selected" : "",
            ].join(" ").trim()}
            aria-pressed={isSelected}
            aria-label={`Space ${space.number}, ${isAvailable ? "available" : "occupied"}`}
            onClick={() => onSelect(space.number)}
          >
            {space.number}
          </button>
        );
      })}
    </div>
  );
}
