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
  rvSize: "27'",
  price: 735,
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
  17: { status: "available", rvSize: "37'", price: 766 },
  32: { status: "available" },
  33: { status: "available" },
  34: { status: "available", rvSize: "30'", price: 766 },
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

// 26' 735, 38' 766, 39'+ 800

// 1 - 32'
// 2 - 32'
// 3 - 32'
// 4 - 32'
// 5 - 32', 1 car
// 6 - 27'
// 7 - unavailable
// 8 - 27'
// 9 - 37'
// 10 - 37'
// 11 - 37'
// 12 - 37'
// 13 - 35'
// 14 - 27'
// 15 - 35'
// 16 - 40'
// 17 - 37'
// 18 - 37'
// 19 - 37'
// 20 - 29'
// 21 - 37'
// 22 - 29'
// 23 - 29'
// 24 - 29'
// 25 - 29'
// 26 - 29'
// 27 - 29'
// 28 - 27'
// 29 - unavailable
// 30 - 25'
// 31 - unavailable
// 32 - 27'
// 33 - 27'
// 34 - 30'
// 35 - 30'
// 36 - 30'
// 37 - 20', no sewer
// 38 - 27', no sewer
// 39 - 27', no sewer
// 40 - 33', no sewer
// 41 - 27'
// 42 - 27'
// 43 - 27'
// 44 - 40'
// 45 - 29'
// 46 - 32'
// 47 - 27'
// 48 - 26'
// 49 - 30', no sewer