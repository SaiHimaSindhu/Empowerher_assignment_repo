function evaluatePerformance(employees) {
  // 1. Filter employees who completed more than 5 tasks
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // 2. Map to objects with name and performance level
  const mapped = filtered.map(emp => {
    let performance;
    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }
    return { name: emp.name, performance };
  });

  // 3. Sort by performance with priority: Excellent > Good > Needs Improvement
  const performanceOrder = { "Excellent": 1, "Good": 2, "Needs Improvement": 3 };
  mapped.sort((a, b) =>
    performanceOrder[a.performance] - performanceOrder[b.performance]
  );

  // 4. Return the sorted array
  return mapped;
}

// Example input
const employees = [
  { name: "Alice", tasksCompleted: 8, rating: 4.7 },
  { name: "Bob", tasksCompleted: 4, rating: 4.0 },
  { name: "Charlie", tasksCompleted: 6, rating: 3.5 },
  { name: "David", tasksCompleted: 10, rating: 4.9 },
  { name: "Eve", tasksCompleted: 7, rating: 2.8 }
];

console.log(evaluatePerformance(employees));