export const maskCardNumber = (cardNumber) => {
  const cardNumberArray = cardNumber.split(" "); // Split the card number by spaces
  const lastPart = cardNumberArray.pop(); // Get the last part (last 4 digits)
  const maskedCardNumber = cardNumberArray
    .map((part) => "*".repeat(part.length))
    .join(" "); // Mask the rest
  return `${maskedCardNumber} ${lastPart}`;
};

export const maskMobileNumber = (phoneNumber) => {
  // Check if the phone number has at least 9 characters
  if (phoneNumber.length >= 10) {
    // Extract the 7th, 8th, and 9th characters
    const middlePart = phoneNumber.slice(6, 9);

    // Mask the middle part with '*'
    const maskedMobileNumber =
      phoneNumber.slice(0, 6) +
      middlePart.replace(/\d/g, "*") +
      phoneNumber.slice(9);

    return maskedMobileNumber;
  } else {
    // If the phone number is too short, return it as is
    return phoneNumber;
  }
};
