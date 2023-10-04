export const users = [
  {
    id: 1,
    name: "Rodnie Galvan",
    bankAccounts: [
      {
        id: 1,
        type: "Savings Account",
        cardTypeImg: "/images/visa.png",
        paymentMethod: "Credit Card",
        cardNumber: "1234 5678 9012 3456", // 16-digit card number
        phoneNumber: "+639517042047",
        cvc: "123", // CVC (Card Verification Code)
        expirationDate: "12/25", // MM/YY format for expiration date
      },
      {
        id: 2,
        type: "Savings Account",
        cardTypeImg: "/images/mastercard.png",
        paymentMethod: "Bank Transfer",
        cardNumber: "9876 5432 1098 7654", // Second bank account's card number
        phoneNumber: "+639123456789",
        cvc: "456", // Second bank account's CVC
        expirationDate: "11/24", // Second bank account's expiration date
      },
    ],
  },
];
