export const maskCardNumber = (cardNumber) => {
    const cardNumberArray = cardNumber.split(" "); // Split the card number by spaces
    const lastPart = cardNumberArray.pop(); // Get the last part (last 4 digits)
    const maskedCardNumber = cardNumberArray
      .map((part) => "*".repeat(part.length))
      .join(" "); // Mask the rest
    return `${maskedCardNumber} ${lastPart}`;
  };