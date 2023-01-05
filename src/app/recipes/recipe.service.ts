import { EventEmitter } from "@angular/core";
import {Recipe} from "./recipe.model";

export class RecipeService {
  recipeSelected=new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simple text case",
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9"),
    new Recipe("Another Test Recipe", "This is simple text case",
      "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-05/Tomato-Pie_0256.jpg?itok=c63mh-z9")
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
