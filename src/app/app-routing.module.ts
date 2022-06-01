import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  // home route
  { path: "", component: HomeComponent },
  // lazyily load movies/public module only when the route contains movies in it
  // http://localhost:4200/movies/2 => MovieDetailsComponents
  // http://localhost:4200/movies/cast/3 => CastDetailsComponent
  {
    path: "movies", loadChildren: () => import("./public/movies.module").then(mod => mod.MoviesModule)
  },

  {
    path: "user", loadChildren: () => import("./user/user.module").then(mod => mod.UserModule)
  },
  
  {
    path: "account", loadChildren: () => import("./account/account.module").then(mod => mod.AccountModule)
  },

  {
    path: "admin", loadChildren: () => import("./admin/admin.module").then(mod => mod.AdminModule)
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Create modules based on features of the application