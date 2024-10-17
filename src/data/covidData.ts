export type StateType =
  | "Andhra Pradesh"
  | "Arunachal Pradesh"
  | "Assam"
  | "Bihar"
  | "Chhattisgarh"
  | "Goa"
  | "Gujarat"
  | "Haryana"
  | "Himachal Pradesh"
  | "Jharkhand"
  | "Karnataka"
  | "Kerala"
  | "Madhya Pradesh"
  | "Maharashtra"
  | "Manipur"
  | "Meghalaya"
  | "Mizoram"
  | "Nagaland"
  | "Odisha"
  | "Punjab"
  | "Rajasthan"
  | "Sikkim"
  | "Tamil Nadu"
  | "Telangana"
  | "Tripura"
  | "Uttar Pradesh"
  | "Uttarakhand"
  | "West Bengal"
  | "Andaman and Nicobar Islands"
  | "Chandigarh"
  | "Dadra and Nagar Haveli and Daman and Diu"
  | "Lakshadweep"
  | "Delhi"
  | "Puducherry"
  | "Ladakh"
  | "Jammu and Kashmir";

export type CovidDataType = (typeof covidData)[number];
export const covidData = [
  {
    state: "Andhra Pradesh",
    total_cases: 100,
    active_cases: 10,
    recovered: 40,
    death: 50,
    coordinates: [15.9129, 79.74],
  },
  {
    state: "Arunachal Pradesh",
    total_cases: 1500,
    active_cases: 200,
    recovered: 1200,
    death: 100,
    coordinates: [28.218, 94.7278],
  },
  {
    state: "Assam",
    total_cases: 4000,
    active_cases: 600,
    recovered: 3300,
    death: 100,
    coordinates: [26.2006, 92.9376],
  },
  {
    state: "Bihar",
    total_cases: 6000,
    active_cases: 800,
    recovered: 5100,
    death: 100,
    coordinates: [25.0961, 85.3131],
  },
  {
    state: "Chhattisgarh",
    total_cases: 3000,
    active_cases: 400,
    recovered: 2500,
    death: 100,
    coordinates: [21.2787, 81.8661],
  },
  {
    state: "Goa",
    total_cases: 2000,
    active_cases: 300,
    recovered: 1600,
    death: 100,
    coordinates: [15.2993, 74.124],
  },
  {
    state: "Gujarat",
    total_cases: 7500,
    active_cases: 1200,
    recovered: 6000,
    death: 300,
    coordinates: [22.2587, 71.1924],
  },
  {
    state: "Haryana",
    total_cases: 4500,
    active_cases: 500,
    recovered: 3800,
    death: 200,
    coordinates: [29.0588, 76.0856],
  },
  {
    state: "Himachal Pradesh",
    total_cases: 2500,
    active_cases: 400,
    recovered: 2000,
    death: 100,
    coordinates: [31.1048, 77.1734],
  },
  {
    state: "Jharkhand",
    total_cases: 3500,
    active_cases: 500,
    recovered: 2900,
    death: 100,
    coordinates: [23.6102, 85.2799],
  },
  {
    state: "Karnataka",
    total_cases: 9000,
    active_cases: 1500,
    recovered: 7200,
    death: 300,
    coordinates: [15.3173, 75.7139],
  },
  {
    state: "Kerala",
    total_cases: 10000,
    active_cases: 2000,
    recovered: 7500,
    death: 500,
    coordinates: [10.8505, 76.2711],
  },
  {
    state: "Madhya Pradesh",
    total_cases: 6500,
    active_cases: 900,
    recovered: 5300,
    death: 300,
    coordinates: [22.9734, 78.6569],
  },
  {
    state: "Maharashtra",
    total_cases: 15000,
    active_cases: 3000,
    recovered: 11500,
    death: 500,
    coordinates: [19.7515, 75.7139],
  },
  {
    state: "Manipur",
    total_cases: 1800,
    active_cases: 300,
    recovered: 1400,
    death: 100,
    coordinates: [24.6637, 93.9063],
  },
  {
    state: "Meghalaya",
    total_cases: 1600,
    active_cases: 200,
    recovered: 1300,
    death: 100,
    coordinates: [25.467, 91.3662],
  },
  {
    state: "Mizoram",
    total_cases: 1200,
    active_cases: 150,
    recovered: 1000,
    death: 50,
    coordinates: [23.1645, 92.9376],
  },
  {
    state: "Nagaland",
    total_cases: 1000,
    active_cases: 100,
    recovered: 850,
    death: 50,
    coordinates: [26.1584, 94.5624],
  },
  {
    state: "Odisha",
    total_cases: 5500,
    active_cases: 700,
    recovered: 4700,
    death: 100,
    coordinates: [20.9517, 85.0985],
  },
  {
    state: "Punjab",
    total_cases: 5000,
    active_cases: 600,
    recovered: 4300,
    death: 100,
    coordinates: [31.1471, 75.3412],
  },
  {
    state: "Rajasthan",
    total_cases: 7000,
    active_cases: 1000,
    recovered: 5800,
    death: 200,
    coordinates: [27.0238, 74.2179],
  },
  {
    state: "Sikkim",
    total_cases: 900,
    active_cases: 100,
    recovered: 750,
    death: 50,
    coordinates: [27.533, 88.5122],
  },
  {
    state: "Tamil Nadu",
    total_cases: 8000,
    active_cases: 1000,
    recovered: 6700,
    death: 300,
    coordinates: [11.1271, 78.6569],
  },
  {
    state: "Telangana",
    total_cases: 7000,
    active_cases: 1200,
    recovered: 5600,
    death: 200,
    coordinates: [18.1124, 79.0193],
  },
  {
    state: "Tripura",
    total_cases: 1400,
    active_cases: 200,
    recovered: 1100,
    death: 100,
    coordinates: [23.9408, 91.9882],
  },
  {
    state: "Uttar Pradesh",
    total_cases: 9500,
    active_cases: 1700,
    recovered: 7500,
    death: 300,
    coordinates: [26.8467, 80.9462],
  },
  {
    state: "Uttarakhand",
    total_cases: 2300,
    active_cases: 300,
    recovered: 1900,
    death: 100,
    coordinates: [30.0668, 79.0193],
  },
  {
    state: "West Bengal",
    total_cases: 11000,
    active_cases: 2500,
    recovered: 8200,
    death: 300,
    coordinates: [22.9868, 87.855],
  },
  {
    state: "Andaman and Nicobar Islands",
    total_cases: 800,
    active_cases: 100,
    recovered: 650,
    death: 50,
    coordinates: [11.7401, 92.6586],
  },
  {
    state: "Chandigarh",
    total_cases: 1500,
    active_cases: 200,
    recovered: 1200,
    death: 100,
    coordinates: [30.7333, 76.7794],
  },
  {
    state: "Dadra and Nagar Haveli and Daman and Diu",
    total_cases: 700,
    active_cases: 100,
    recovered: 550,
    death: 50,
    coordinates: [20.4283, 72.8397],
  },
  {
    state: "Delhi",
    total_cases: 9000,
    active_cases: 1800,
    recovered: 6900,
    death: 300,
    coordinates: [28.7041, 77.1025],
  },
  {
    state: "Jammu and Kashmir",
    total_cases: 4000,
    active_cases: 600,
    recovered: 3300,
    death: 100,
    coordinates: [33.7782, 76.5762],
  },
  {
    state: "Ladakh",
    total_cases: 1000,
    active_cases: 150,
    recovered: 800,
    death: 50,
    coordinates: [34.1526, 77.577],
  },
  {
    state: "Lakshadweep",
    total_cases: 500,
    active_cases: 50,
    recovered: 400,
    death: 50,
    coordinates: [10.5667, 72.6417],
  },
  {
    state: "Puducherry",
    total_cases: 2000,
    active_cases: 300,
    recovered: 1600,
    death: 100,
    coordinates: [11.9416, 79.8083],
  },
];
