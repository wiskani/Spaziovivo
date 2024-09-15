// src/mocks/mockData.ts

export const mockProvinces = [
  {
    id: 1,
    province_name: "Province A",
    cities: [
      { id: 1, city_name: "City A1", provinceId: 1 },
      { id: 2, city_name: "City A2", provinceId: 1 },
    ],
  },
  {
    id: 2,
    province_name: "Province B",
    cities: [
      { id: 3, city_name: "City B1", provinceId: 2 },
      { id: 4, city_name: "City B2", provinceId: 2 },
    ],
  },
];

export const mockLocations = [
  {
    id: "1",
    estate_name: "Estate 1",
    cityId: 1,
    city: {
      id: 1,
      city_name: "City A1",
      provinceId: 1,
      province: { id: 1, province_name: "Province A", cities: [] },
    },
    typeId: 1,
    statusId: 1,
    employeeId: 1,
    type: { id: 1, type_name: "Type 1" },
    status: { id: 1, status_name: "Available" },
    employee: { id: 1, first_name: "John", last_name: "Doe" },
    total_area: 100,
    number_of_garage: 1,
    number_of_floors: 2,
    number_of_bedroom: 3,
    number_of_bathroom: 2,
    estate_description: "A nice estate.",
    price: 250000,
    price_monthly: 2000,
    currency: "USD",
    latitude: 40.7128,
    longitude: -74.006,
    pictures: [
      { id: "photo1", url: "https://via.placeholder.com/150", tag: "Front View" },
    ],
  },
  {
    id: "2",
    estate_name: "Estate 2",
    cityId: 3,
    city: {
      id: 3,
      city_name: "City B1",
      provinceId: 2,
      province: { id: 2, province_name: "Province B", cities: [] },
    },
    typeId: 2,
    statusId: 2,
    employeeId: 2,
    type: { id: 2, type_name: "Type 2" },
    status: { id: 2, status_name: "Sold" },
    employee: { id: 2, first_name: "Jane", last_name: "Smith" },
    total_area: 200,
    number_of_garage: 2,
    number_of_floors: 3,
    number_of_bedroom: 4,
    number_of_bathroom: 3,
    estate_description: "A luxury estate.",
    price: 750000,
    price_monthly: 5000,
    currency: "USD",
    latitude: 34.0522,
    longitude: -118.2437,
    pictures: [
      { id: "photo2", url: "https://via.placeholder.com/150", tag: "Garden" },
    ],
  },
];

