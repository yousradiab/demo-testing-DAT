//simulating communication with a database

//simulating synchronous reading of a customer from db by id
const getCustomerSync = function (id) {
  console.log("Reading a customer from MongoDB...");
  return { id: id, points: 11 };
};

//simulating asynchronous reading of a customer from db by id
const getCustomer = async function (id) {
  return new Promise((resolve, reject) => {
    console.log("Reading a customer from MongoDB...");
    resolve({ id: id, points: 11 });
  });
};

const db = {
  getCustomerSync,
  getCustomer,
};

export default db;
