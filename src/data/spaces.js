// South Sound RV Park — space data
//
// HOW TO EDIT:
// - Change `status` to "available" or "occupied" to update the map/color.
// - Change any other field (rvSize, price, etc.) to update what shows on
//   the detail card for that specific space.
// - petRestrictions is just a list of breed names shown on the card —
//   edit the shared PET_RESTRICTIONS list below to change it everywhere,
//   or override it on an individual space object if one lot differs.

export const PET_RESTRICTIONS = ["Rottweilers", "German Shepherds", "Pitbulls"];

const DEFAULTS = {
  rvSize: "32'",
  price: 750,
  maxVehicles: 2,
  maxPets: 2,
  maxPeople: 2,
  extraPersonFee: 100,
  petRestrictions: PET_RESTRICTIONS,
};

// Every space starts from DEFAULTS and can override any field.
// Demo data below marks a handful of spaces "available" — replace with
// your real availability.
const overrides = {
  2: { status: "available" },
  5: { status: "available", rvSize: "40'", price: 850 },
  11: { status: "available" },
  18: { status: "available" },
  23: { status: "available", rvSize: "28'", price: 700 },
  34: { status: "available" },
  41: { status: "available" },
};

export const spaces = Array.from({ length: 46 }, (_, i) => {
  const number = i + 1;
  return {
    number,
    status: "occupied",
    ...DEFAULTS,
    ...(overrides[number] || {}),
  };
});
