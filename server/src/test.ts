import { listUsers } from "./services/user";

async function main() {
  //   await createUser({
  //     name: "Ajmir",
  //     password: "xxx",
  //     email: "Ajmir@gmail.com",
  //     role: "ADMIN",
  //     createdAt: Date.now(),
  //     updatedAt: Date.now(),
  //   });

  const users = await listUsers();
  console.log(users);
}
main();
