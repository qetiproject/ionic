import { Injectable } from '@angular/core';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.jocooks.com/wp-content/uploads/2019/04/pork-schnitzel-1.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Schnitzel2',
      imageUrl: 'https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg',
      ingredients: ['French Fries', ' Meat', 'Salad']
    },
    {
      id: 'r3',
      title: 'Schnitzel3',
      imageUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];

  constructor() { }

  getRecipes()  {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
      return {
        ...this.recipes.find(recipe => {
        return recipe.id === recipeId
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter( recipe => {
      return recipe.id !== recipeId
    });

  }

}
