import Model from "./models/Model";

// Define your type
interface User {
  id?: string;
  name: string;
  age: number;
  isAdmin: boolean;
}

// Optional: Another related model (example)
interface Profile {
  id?: string;
  userId: string;
  bio: string;
}

// Create models
const ProfileModel = new Model<Profile>("profiles");
const UserModel = new Model<User>("users", {
  relations: {
    profile: {
      type: "one",
      foreignKey: "userId",
      model: ProfileModel,
    },
  },
});

(async () => {
  // ---------------- Create ----------------
  const { success: createSuccess, id: userId } = await UserModel.create({
    data: {
      name: "Ajmir",
      age: 28,
      isAdmin: true,
      profile: {
        create: { bio: "I love coding" }, // nested create for relation
      },
    },
  });
  console.log("Created user:", userId, createSuccess);

  // ---------------- Find Unique ----------------
  const user = await UserModel.findUnique({
    where: { id: userId },
    include: { profile: true }, // include relation
  });
  console.log("User with profile:", user);

  // ---------------- Find Many ----------------
  const admins = await UserModel.findMany({
    where: { isAdmin: true },
    include: { profile: true },
  });
  console.log("Admin users:", admins);

  // ---------------- Update ----------------
  const { success: updateSuccess } = await UserModel.update({
    where: { id: userId },
    data: { age: 30 },
  });
  console.log("Update success:", updateSuccess);

  // ---------------- Delete ----------------
  const { success: deleteSuccess } = await UserModel.deleteById(userId);
  console.log("Delete success:", deleteSuccess);
})();
