import {getData, storeData} from "../libs/storage"

async function getUsers(){
    const users = await getData("userFakeDb")
    if(!users) return []
    return users
}

async function storeUsers(users){
  await storeData("userFakeDb", users)
}

async function checkIfEmailInUserTable(email) {
  const users = await getUsers()
  return users.filter((user) => user.email === email).length > 0;
}

async function getUser(email) {
  const users = await getUsers()
  return users.find((user) => user.email === email);
}

async function createUser({ name, email, password }) {
  const users = await getUsers()
  users.push({
    name,
    email,
    password,
  });
  await storeUsers(users)
}

export async function register({ name, email, password }) {
  const isEmailAlreadyExistInUserTable = await checkIfEmailInUserTable(email);
  if (isEmailAlreadyExistInUserTable) {
    return {
      success: false,
      message: `There is already a user with the email adress : ${email}`,
    };
  }

  await createUser({
    name,
    email,
    password,
  });
  const token = "fakeToken";

  return { success: true, name, token };
}

export async function login({ email, password }) {
  const user = await getUser(email);

  const userExistAndPasswordIsValid =
    user !== undefined && user.password === password;
  const token = "fakeToken";
  if (userExistAndPasswordIsValid === true) {
    return { success: true, token, name: user.name };
  } else {
    return { success: false, payload: "nope" };
  }
}

export async function calculate(inr) {
  return {
    success: true,
    dosage: fakeCalculation(), //replace it with real function
  };
}

// return a random value between 1 and 4
function fakeCalculation() {
  return Math.ceil(Math.random() * 4);
}

export async function getHistory() {
  return [
    { timestamp: new Date(), data: { inr: 2 } },
    { timestamp: new Date(), data: { inr: 4 } },
    { timestamp: new Date(), data: { inr: 9 } },
  ];
}
