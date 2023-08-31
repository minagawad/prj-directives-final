import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class RecipeService {
  recipeSelected = new BehaviorSubject<Recipe>(null);
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recipe(
      "Another Test Recipe",
      "This is simply a test",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
  ];

  constructor() {}
  getRecipe() {
    return this.recipes.slice();
  }
}
