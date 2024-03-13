import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BurgerComponent } from './components/burger/burger.component';
import { ShavermaComponent } from './components/shaverma/shaverma.component';
import { PizzaComponent } from './components/pizza/pizza.component';
import { ProductInfoComponent } from './components/product-info/product-info.component';
import { AdminPannelComponent } from './components/admin-panel/admin-panel.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'authorize',
    component: AuthorizationComponent,
  },
  {
    path: 'admin',
    component: AdminPannelComponent,
  },
  {
    path: 'burgers',
    component: BurgerComponent,
  },
  {
    path: 'shaverma',
    component: ShavermaComponent,
  },
  {
    path: 'pizzas',
    component: PizzaComponent,
  },
  {
    path: ':id',
    component: ProductInfoComponent,
  },
  {
    path: 'burgers/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'tacos/:id',
    component: ProductInfoComponent,
  },
  {
    path: 'pizzas/:id',
    component: ProductInfoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
