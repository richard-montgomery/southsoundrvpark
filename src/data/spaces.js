// South Sound RV Park — space data
//
// HOW TO EDIT:
// - Change `status` to "available" or "occupied" to update the map/color.
// - Change any other field (rvSize, price, sewerHookup, etc.) to update
//   what shows on the detail card for that specific space.
// - sewerHookup is `true`/`false` — most spaces have a sewer hookup, so
//   it defaults to true; set it to false on individual spaces that don't.
// - caveat is the small footnote at the bottom of the detail card (e.g.
//   pricing terms). Edit the shared default below to change it everywhere,
//   or override it on an individual space if one lot needs different wording.
// - petRestrictions is just a list of breed names shown on the card —
//   edit the shared PET_RESTRICTIONS list below to change it everywhere,
//   or override it on an individual space object if one lot differs.

export const PET_RESTRICTIONS = ["Rottweilers", "German Shepherds", "Pitbulls"];

const DEFAULTS = {
  rvSize: "26'",
  price: 800,
  maxVehicles: 2,
  maxPets: 2,
  maxPeople: 2,
  extraPersonFee: 100,
  sewerHookup: true,
  petRestrictions: PET_RESTRICTIONS,
  caveat: "Price reflects a long-term stay. Short-term/nightly rates are higher.",
};

// Every space starts from DEFAULTS and can override any field.
// All space data below

const overrides = {
  // 1: { status: "available", rvSize: "32'", price: 850},
  // 2: { status: "available", rvSize: "32'", price: 850 },
  // 3: { status: "available", rvSize: "32'", price: 850 },
  // 4: { status: "available", rvSize: "32'", price: 850 },
  // 5: { status: "available", rvSize: "27'", price: 850, maxVehicles: 1  },
  // 6: { status: "available", rvSize: "27'", price: 850 },
  // 7: { status: "unavailable" },
  // 8: { status: "available", rvSize: "32'", price: 850 },
  // 9: { status: "available", rvSize: "37'", price: 850 },
  // 10: { status: "available", rvSize: "37'", price: 850 },
  // 11: { status: "available", rvSize: "37'", price: 850 },
  // 12: { status: "available", rvSize: "37'", price: 850 },
  // 13: { status: "available", rvSize: "35'", price: 850 },
  // 14: { status: "available", rvSize: "27'", price: 850 },
  // 15: { status: "available", rvSize: "35'", price: 850 },
  // 16: { status: "available", rvSize: "40'", price: 850 },
  // 17: { status: "available", rvSize: "37'", price: 850 },
  // 18: { status: "available", rvSize: "37'", price: 850 },
  // 19: { status: "available", rvSize: "37'", price: 850 },
  // 20: { status: "available", rvSize: "29'", price: 850 },
  // 21: { status: "available", rvSize: "37'", price: 850 },
  // 22: { status: "available", rvSize: "29'", price: 850 },
  // 23: { status: "available", rvSize: "29'", price: 850 },
  // 24: { status: "available", rvSize: "29'", price: 850 },
  // 25: { status: "available", rvSize: "29'", price: 850 },
  // 26: { status: "available", rvSize: "29'", price: 850 },
  // 27: { status: "available", rvSize: "29'", price: 850 },
  // 28: { status: "available", rvSize: "27'", price: 850 },
  // 29: { status: "unavailable" },
  // 30: { status: "available" },
  // 31: { status: "unavailable" },
  // 32: { status: "available", rvSize: "27'", price: 850 },
  // 33: { status: "available", rvSize: "27'", price: 850 },
  34: { status: "available", rvSize: "29'", price: 850 },
  // 35: { status: "available", rvSize: "29'", price: 850 },
  // 36: { status: "available", rvSize: "30'", price: 850 },
  // 37: { status: "available", rvSize: "20'", price: 850, sewerHookup: false },
  // 38: { status: "available", rvSize: "27'", price: 850, sewerHookup: false },
  // 39: { status: "available", rvSize: "27'", price: 850, sewerHookup: false },
  // 40: { status: "available", rvSize: "33'", price: 850, sewerHookup: false },
  // 41: { status: "available", rvSize: "27'", price: 850 },
  // 42: { status: "available", rvSize: "27'", price: 850 },
  // 43: { status: "available", rvSize: "27'", price: 850 },
  // 44: { status: "available", rvSize: "40'", price: 850 },
  // 45: { status: "available", rvSize: "29'", price: 850 },
  // 46: { status: "available", rvSize: "32'", price: 850 },
  // 47: { status: "available", rvSize: "27'", price: 850 },
  48: { status: "available" },
  // 49: { status: "available", rvSize: "30'", price: 850, sewerHookup: false },
};

export const spaces = Array.from({ length: 49 }, (_, i) => {
  const number = i + 1;
  return {
    number,
    status: "occupied",
    ...DEFAULTS,
    ...(overrides[number] || {}),
  };
});
