import { prisma } from "./prisma";

(async () => {
  const products = await createProducts();

  console.log(products);
})();

async function createCategories() {
  return await prisma.category.createMany({
    data: [
      { name: "Proteins" },
      { name: "Pre-Workouts" },
      { name: "Multivitamins" },
      { name: "Apparel" },
      { name: "Accessories" },
      { name: "Recovery" },
      { name: "Hydration" },
    ],
  });
}

async function createProducts() {
  // Fetch category IDs
  const proteins = { id: "Sad" };
  const preWorkouts = { id: "Sad" };
  const multivitamins = { id: "Sad" };
  const apparel = { id: "Sad" };
  const accessories = { id: "Sad" };
  const recovery = { id: "Sad" };
  const hydration = { id: "Sad" };

  // Generate ~100 products
  const products: any[] = [];

  // Proteins (20 products)
  const proteinFlavors = [
    "Chocolate",
    "Vanilla",
    "Strawberry",
    "Cookies & Cream",
    "Banana",
  ];
  for (let i = 1; i <= 20; i++) {
    products.push({
      name: `Whey Protein ${proteinFlavors[i % proteinFlavors.length]} ${i}kg`,
      description: "High-quality whey protein powder for muscle recovery.",
      price: 29.99 + i,
      stock: 50 + i,
      images: [`protein-${i}.jpg`],
      featured: i % 5 === 0,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e5d",
    });
  }

  // Pre-Workouts (15 products)
  const preWorkoutFlavors = [
    "Fruit Punch",
    "Blue Raspberry",
    "Watermelon",
    "Lemon Lime",
  ];
  for (let i = 1; i <= 15; i++) {
    products.push({
      name: `Pre-Workout ${
        preWorkoutFlavors[i % preWorkoutFlavors.length]
      } #${i}`,
      description: "Boost energy and focus before training.",
      price: 24.99 + i,
      stock: 40 + i,
      images: [`preworkout-${i}.jpg`],
      featured: i % 3 === 0,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e5e",
    });
  }

  // Multivitamins (15 products)
  for (let i = 1; i <= 15; i++) {
    products.push({
      name: `Daily Multivitamin Pack #${i}`,
      description: "Essential vitamins and minerals for overall health.",
      price: 19.99 + i,
      stock: 100 + i,
      images: [`multivitamin-${i}.jpg`],
      featured: false,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e5f",
    });
  }

  // Apparel (20 products)
  const apparelItems = [
    "T-Shirt",
    "Shorts",
    "Leggings",
    "Knee Band",
    "Hand Wrap",
  ];
  for (let i = 1; i <= 20; i++) {
    products.push({
      name: `${apparelItems[i % apparelItems.length]} Size ${
        ["S", "M", "L", "XL"][i % 4]
      }`,
      description: "Comfortable and durable workout apparel.",
      price: 14.99 + i,
      stock: 200 - i,
      images: [`apparel-${i}.jpg`],
      featured: i % 4 === 0,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e60",
    });
  }

  // Accessories (15 products)
  const accessoriesItems = [
    "Yoga Mat",
    "Foam Roller",
    "Resistance Band",
    "Jump Rope",
    "Water Bottle",
  ];
  for (let i = 1; i <= 15; i++) {
    products.push({
      name: `${accessoriesItems[i % accessoriesItems.length]} #${i}`,
      description: "Essential accessory for home workouts.",
      price: 9.99 + i,
      stock: 80 + i,
      images: [`accessory-${i}.jpg`],
      featured: i % 2 === 0,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e61",
    });
  }

  // Recovery (10 products)
  for (let i = 1; i <= 10; i++) {
    products.push({
      name: `BCAA Recovery Formula #${i}`,
      description: "Supports muscle recovery and reduces soreness.",
      price: 21.99 + i,
      stock: 60 + i,
      images: [`recovery-${i}.jpg`],
      featured: i % 2 === 0,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e62",
    });
  }

  // Hydration (5 products)
  for (let i = 1; i <= 5; i++) {
    products.push({
      name: `Hydration Bottle ${i}L`,
      description: "Durable water bottle for hydration during workouts.",
      price: 12.99 + i,
      stock: 120 + i,
      images: [`hydration-${i}.jpg`],
      featured: false,
      sortOrder: i,
      categoryId: "6922f33c437a15ead3a68e63",
    });
  }

  // Insert products
  return await prisma.product.createMany({ data: products });
}
