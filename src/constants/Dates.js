// Years
const years = Array.from({ length: 100 }, (_, index) => ({
  value: (2023 - index).toString(),
  label: (2023 - index).toString(),
}));

// Months
const months = Array.from({ length: 12 }, (_, index) => {
  const day = index + 1;
  return {
    value: day.toString().padStart(2, "0"), // Add zero-padding
    label: day.toString().padStart(2, "0"), // Add zero-padding
  };
});

// Days (1 to 31)
const days = Array.from({ length: 31 }, (_, index) => {
  const day = index + 1;
  return {
    value: day.toString().padStart(2, "0"), // Add zero-padding
    label: day.toString().padStart(2, "0"), // Add zero-padding
  };
});

export { years, months, days };
