import db from "./db";
import mail from "./mail";

// Testing numbers
const absolute = function (number) {
  return number >= 0 ? number : -number;
};

// Testing strings
const greet = function (name) {
  return "Welcome " + name;
};

// Testing arrays
const getCurrencies = function () {
  return ["USD", "AUD", "EUR"];
};

// Testing objects
const getProduct = function (productId) {
  return { id: productId, price: 10 };
};

// Testing exceptions
const registerUser = function (username) {
  if (!username) throw new Error("Username is required.");

  return { id: new Date().getTime(), username: username };
};

// Mock functions
const applyDiscount = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  if (customer.points > 10) order.totalPrice *= 0.9;
};

// Mock functions
const notifyCustomer = function (order) {
  const customer = db.getCustomerSync(order.customerId);

  mail.send(customer.email, "Your order was placed successfully.");
};

const lib = {
  absolute,
  greet,
  getCurrencies,
  getProduct,
  registerUser,
  applyDiscount,
  notifyCustomer,
};

export default lib;
