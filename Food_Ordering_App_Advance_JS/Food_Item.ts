import { Food_Category } from "./Food_Category";

class FoodItem {
  name: string;
  category: object;
  userRating: any;
  price: any;
  imagepath: any;
  // [x: string]: string;

  constructor(
    name: string,
    category: object,
    userRating: number,
    price: number,
    imagepath: unknown
  ) {
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

let fc1 = new Food_Category(Food_Category.FOOD_CATEGORY_BIRYANI);

let foodItem1 = new FoodItem("Ambur Biryani", fc1, 4.5, 10, "");
foodItem1.display();
