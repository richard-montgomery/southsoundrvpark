// South Sound RV Park — space data
//
// HOW TO EDIT:
// - Change `status` to "available" or "occupied" to update the map/color.
// - Change any other field (rvSize, price, sewerHookup, etc.) to update
//   what shows on the detail card for that specific space.
// - sewerHookup is `true`/`false` — most spaces have a sewer hookup, so
//   it defaults to true; set it to false on individual spaces that don't.
// - petRestrictions is just a list of breed names shown on the card —
//   edit the shared PET_RESTRICTIONS list below to change it everywhere,
//   or override it on an individual space object if one lot differs.

export const PET_RESTRICTIONS = ["Rottweilers", "German Shepherds", "Pitbulls"];

const DEFAULTS = {
  rvSize: "27'",
  price: 735,
  maxVehicles: 2,
  maxPets: 2,
  maxPeople: 2,
  extraPersonFee: 100,
  sewerHookup: true,
  petRestrictions: PET_RESTRICTIONS,
};

// Every space starts from DEFAULTS and can override any field.
// Demo data below marks a handful of spaces "available" — replace with
// your real availability.

const overrides = {
  17: { status: "available", rvSize: "37'", price: 766 },
  33: { status: "available" },
  34: { status: "available" },
  35: { status: "available", rvSize: "30'", price: 766 },
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
