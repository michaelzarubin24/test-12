import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { BurgerComponent } from './components/burger/burger.component';
import { ShavermaComponent } from './components/shaverma/shaverma.component';
import { AdminPannelComponent } from './components/admin-panel/admin-panel.component';
import { MainComponent } from './components/main/main.component';
import { ProductComponent } from './components/product/product.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { FormsModule } from '@angular/forms';
import { AddUserFormComponent } from './components/add-user-form/add-user-form.component';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    BurgerComponent,
    ShavermaComponent,
    PizzaComponent,
    ProductComponent,
    ProductInfoComponent,
    AuthorizationComponent,
    AddProductFormComponent,
    AdminPannelComponent,
    AddUserFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
