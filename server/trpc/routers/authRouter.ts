import z from "zod";
import { authRequiredMiddleware } from "../middlewares/authMiddleware";
import { procedure } from "../trpc";
import { createZodTrpcError } from "../utils/zodHelpers";

export const getAuth = procedure
  .use(authRequiredMiddleware)
  .query(({ ctx }) => {
    return ctx.user;
  });

export const signIn = procedure
  .input(
    z.object({
      email: z.email(),
      password: z.string().min(6),
    })
  )
  .mutation(async ({ input: { email, password }, ctx: { database, libs } }) => {
    // find the user

    const user = await database.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) throw createZodTrpcError("email", "Email does not exist!");

    // match password
    const matched = await libs.passwordEncryptor.compare(
      password,
      user.password
    );

    if (!matched)
      throw createZodTrpcError("password", "Password does not match!");

    // sign token
    const token = libs.tokenEncryptor.sign({ userId: user.id });

    return {
      token,
      user,
    };
  });

export const signUp = procedure
  .input(
    z.object({
      email: z.email(),
      password: z.string().min(6),
    })
  )
  .mutation(async ({ input, ctx: { database, libs } }) => {
    // check if email is used
    const emailAlreadyExist = await database.user.findUnique({
      where: {
        email: input.email,
      },
    });
    if (emailAlreadyExist)
      throw createZodTrpcError("email", "This email is already used!");

    // hash password
    const password = await libs.passwordEncryptor.hash(input.password);

    // save the user
    const user = await database.user.create({
      data: {
        email: input.email,
        password,
      },
    });

    // create token
    const token = libs.tokenEncryptor.sign({ userId: user.id });

    // send it to the client
    return {
      user,
      token,
    };
  });
