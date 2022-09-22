import { FoodCategory } from "./Food_Category";

class FoodCategoryFactory {
  static getCategories() {
    let result = new Array();
    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_BIRYANI));

    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_CHICKEN));

    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_CHINESE));

    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_PANEER));

    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_SOUTH_INDIAN));

    result.push(new FoodCategory(FoodCategory.FOOD_CATEGORY_VEGETABLE));

    return result;
  }
}

console.log(FoodCategoryFactory.getCategories());

export { FoodCategoryFactory };
