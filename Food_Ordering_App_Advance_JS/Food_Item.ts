import { FoodCategory } from "./Food_Category";

class FoodItem {
  id: number;
  name: string;
  category: object;
  userRating: number;
  price: number;
  imagepath: any;
  // [x: string]: string;

  constructor(
    id: number,
    name: string,
    category: object,
    userRating: number,
    price: number,
    imagepath: unknown
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.userRating = userRating;
    this.price = price;
    this.imagepath = imagepath;
  }

  display() {
    console.log(`name of the food is: ${this.name}`);
  }
}

let fc1 = new FoodCategory(FoodCategory.FOOD_CATEGORY_BIRYANI);

let foodItem1 = new FoodItem(1, "Ambur Biryani", fc1, 4.5, 10, "");
foodItem1.display();

export { FoodItem };
