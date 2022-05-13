import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Food Art",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Healthy Recipes",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Beginner's Basics",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Indian Recipes",
    description: "",
  },
  {
    _id: uuid(),
    categoryName: "Street Food",
    description: "",
  },
];
