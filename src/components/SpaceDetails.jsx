export default function SpaceDetails({ space }) {
  if (!space) {
    return (
      <div className="details-card details-card--empty">
        <p className="eyebrow">South Sound RV Park</p>
        <h2>No spaces available</h2>
        <p className="muted">
          Every space is currently occupied. Call{" "}
          <a href="tel:2532564781">(253) 256-4781</a> to be added to the
          waitlist.
        </p>
      </div>
    );
  }

  const isAvailable = space.status === "available";

  return (
    <div className={`details-card ${isAvailable ? "is-available" : "is-occupied"}`}>
      <div className="details-header">
        <p className="eyebrow">Space</p>
        <h2>#{space.number}</h2>
        <span className={`status-pill ${isAvailable ? "is-available" : "is-occupied"}`}>
          {isAvailable ? "Available" : "Occupied"}
        </span>
      </div>

      {isAvailable ? (
        <>
          <div className="details-price">
            <span className="price-amount">${space.price}</span>
            <span className="price-period">/ month</span>
          </div>

          <dl className="details-list">
            <div className="details-row">
              <dt>RV size</dt>
              <dd>Up to {space.rvSize}</dd>
            </div>
            <div className="details-row">
              <dt>Vehicles</dt>
              <dd>{space.maxVehicles} max</dd>
            </div>
            <div className="details-row">
              <dt>People</dt>
              <dd>
                {space.maxPeople} included
                <span className="details-note">
                  {" "}
                  · +${space.extraPersonFee} per additional person
                </span>
              </dd>
            </div>
            <div className="details-row">
              <dt>Pets</dt>
              <dd>
                {space.maxPets} max
                <span className="details-note">
                  {" "}
                  · not permitted: {space.petRestrictions.join(", ")}
                </span>
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <p className="muted">
          This space is currently occupied. Select a green space on the map
          to see availability.
        </p>
      )}
    </div>
  );
}
