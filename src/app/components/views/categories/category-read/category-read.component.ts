import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/shared/services/category.service';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-category-read',
  templateUrl: './category-read.component.html',
  styleUrls: ['./category-read.component.css']
})
export class CategoryReadComponent implements OnInit {

  categories: Category[] = [];

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'acoes'];
  
  constructor(
    private service: CategoryService
  ) { }

  ngOnInit() {

    this.findAll();
  }

  findAll() {
    this.service.findAll().pipe(first()).subscribe(resp => {
      console.log(resp)
      this.categories = resp;
    })
  }

}
