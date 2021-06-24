import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
  
  constructor(
    private service: CategoryService,
    private router: Router
  ) { }

  ngOnInit() {

    this.findAll();
  }

  findAll() {
    this.service.findAll().pipe(first()).subscribe(resp => {
      this.categories = resp;
    })
  }

  navCategoryCreate() {
    this.router.navigate(["categories/create"])
  }

}
