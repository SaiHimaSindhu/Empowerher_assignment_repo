function countCategories(categories) {
  // 1. Use reduce() to group and count occurrences
  const counts = categories.reduce((acc, category) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  return counts; // Basic requirement
}

// Extra Challenge: sorted array of category names by count (descending)
function sortedCategoriesByCount(categories) {
  const counts = countCategories(categories);
  // Object.entries(counts) => [ [category, count], ... ]
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])    // Sort by count descending
    .map(entry => entry[0]);         // Take only category names
}

// Example usage:
const input = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

console.log(countCategories(input));


console.log(sortedCategoriesByCount(input));

