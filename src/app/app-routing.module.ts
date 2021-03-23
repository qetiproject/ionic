import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'recipes',
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
  //     },
  //     {
  //       path: ':recipeId',
  //       loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
  //     }
  //   ]
  // },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthPageModule)
  },  {
    path: 'search',
    loadChildren: () => import('./places/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./places/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'discover',
    loadChildren: () => import('./places/discover/discover.module').then( m => m.DiscoverPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () => import('./bookings/bookings.module').then( m => m.BookingsPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
