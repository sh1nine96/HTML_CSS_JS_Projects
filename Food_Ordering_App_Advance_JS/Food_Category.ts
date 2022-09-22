const FOOD_CATEGORY_BIRYANI = "biryani";
const FOOD_CATEGORY_CHICKEN = "chicken";
const FOOD_CATEGORY_PANEER = "paneer";
const FOOD_CATEGORY_VEGETABLE = "vegetable";
const FOOD_CATEGORY_CHINESE = "chinese";
const FOOD_CATEGORY_SOUTH_INDIAN = "south-indian";

class Food_Category {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  display() {
    console.log(`category name is: ${this.name}`);
  }

  static get FOOD_CATEGORY_BIRYANI() {
    return FOOD_CATEGORY_BIRYANI;
  }

  static get FOOD_CATEGORY_CHICKEN() {
    return FOOD_CATEGORY_CHICKEN;
  }
  static get FOOD_CATEGORY_PANEER() {
    return FOOD_CATEGORY_PANEER;
  }
  static get FOOD_CATEGORY_VEGETABLE() {
    return FOOD_CATEGORY_VEGETABLE;
  }
  static get FOOD_CATEGORY_CHINESE() {
    return FOOD_CATEGORY_CHINESE;
  }
  static get FOOD_CATEGORY_SOUTH_INDIAN() {
    return FOOD_CATEGORY_SOUTH_INDIAN;
  }
}

let fc1 = new Food_Category(FOOD_CATEGORY_BIRYANI);
fc1.display();

export { Food_Category };
