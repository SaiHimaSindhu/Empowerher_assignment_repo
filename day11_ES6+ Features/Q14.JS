const mergeProfile = (profile, updates) => ({
  ...profile,
  ...updates,
  address: {
    ...profile.address,
    ...updates.address
  }
});

// Example Input:
const profile = {
  name: "Charlie",
  age: 29,
  address: { city: "San Francisco", zipcode: "94101" }
};

const updates = {
  age: 30,
  address: { zipcode: "94109" },
  country: "USA"
};

// Example Output:
const result = mergeProfile(profile, updates);
console.log(result);
// { name: "Charlie", age: 30, address: { city: "San Francisco", zipcode: "94109" }, country: "USA" }
