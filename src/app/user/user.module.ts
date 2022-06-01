import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavoritesComponent } from './favorites/favorites.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PurchasesComponent } from './purchases/purchases.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    FavoritesComponent,
    ReviewsComponent,
    PurchasesComponent,
    EditProfileComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
