import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { FoodDetailsComponent } from './food-details/food-details.component';
import { ItemComponent } from './item/item.component';
import { NewItemFormComponent } from './new-item-form/new-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ItemsComponent,
    FoodDetailsComponent,
    ItemComponent,
    NewItemFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
