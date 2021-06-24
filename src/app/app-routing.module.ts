import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryCreateComponent } from './components/views/categories/category-create/category-create.component';
import { CategoryDeleteComponent } from './components/views/categories/category-delete/category-delete.component';
import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component';
import { CategoryUpdateComponent } from './components/views/categories/category-update/category-update.component';
import { HomeComponent } from './components/views/home/home.component';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  {path: "home", component: HomeComponent},
  {path: "category-read", component: CategoryReadComponent},
  {path: "categories/create", component: CategoryCreateComponent},
  {path: 'categories/delete/:id', component: CategoryDeleteComponent},
  {path: "categories/update/:id", component: CategoryUpdateComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
