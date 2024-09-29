import { db } from "./db";
export type CreateUserData = Omit<any, "id">;
export async function createUser({ email, name, password }: CreateUserData) {
  return await db.user.create({
    data: { email, name, password },
  });
}

export async function authenticateUser(email: string, password: string) {
  return await db.user.findUnique({
    where: { email, password },
  });
}
