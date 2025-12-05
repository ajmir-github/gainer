import { database } from "../database";

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  phone?: string;
  address?: string;
  role: "ADMIN" | "USER";
  createdAt: number;
  updatedAt: number;
}

type BaseUser = Omit<User, "id">;

const Users = database.collection<BaseUser>("Users");

export const listUsers = async () => {
  return (await Users.find().toArray()).map(({ _id, ...rest }) => ({
    ...rest,
    id: _id.toHexString(),
  }));
};

export const createUser = async (entries: BaseUser) => {
  await Users.insertOne(entries);
};
