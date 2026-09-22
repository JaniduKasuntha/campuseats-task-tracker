// AFTER: Clear names, input validation, no magic numbers, no secrets
const VIP_DISCOUNT = 0.1;

function calculateTotal(price, quantity, customerType) {
  if (price < 0 || quantity < 0) {
    throw new Error("Price and quantity must be >= 0");
  }

  const subtotal = price * quantity;

  return customerType === "vip" 
    ? subtotal * (1 - VIP_DISCOUNT) 
    : subtotal;
}

// API keys are read from environment variables (e.g., process.env.API_KEY)
// Never hardcode credentials into version control!
console.log("Calculated Total for VIP:", calculateTotal(100, 2, "vip"));