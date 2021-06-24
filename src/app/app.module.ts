import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MenubarModule} from 'primeng/menubar';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'
import {MenuModule} from 'primeng/menu';
import { HomeComponent } from './components/views/home/home.component';
import {MatCardModule} from '@angular/material/card';
import { CategoryReadComponent } from './components/views/categories/category-read/category-read.component';
import {MatTableModule} from '@angular/material/table';
import { CategoryCreateComponent } from './components/views/categories/category-create/category-create.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';

import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CategoryDeleteComponent } from './components/views/categories/category-delete/category-delete.component';
import { CategoryUpdateComponent } from './components/views/categories/category-update/category-update.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CategoryReadComponent,
    CategoryCreateComponent,
    CategoryDeleteComponent,
    CategoryUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    MenuModule,
    HttpClientModule,
    FormsModule,
    ToastModule,
    // Modulos do Angular material
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatTableModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
