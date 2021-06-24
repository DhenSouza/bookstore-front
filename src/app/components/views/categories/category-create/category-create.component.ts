import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css']
})
export class CategoryCreateComponent implements OnInit {

  category: Category = {
    nome: "",
    descricao: ""
  }

  constructor(
    private service: CategoryService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {

  }

  createCat() {
    if(this.category.nome != null || this.category.nome != "" || this.category.nome != undefined){
      this.service.create(this.category).pipe(first()).subscribe((resp) => {
        this.messageService.add({key: 'tr', severity:'success', summary: 'Criado!', detail: 'Criado com sucesso!'});
        setTimeout(() => {
          this.router.navigate(['category-read'])
      }, 2000);
    
        }, error => {
          this.messageService.add({key: 'tr', severity:'error', summary: '!Criado', detail: 'Não pode ser criado, campo vazio ou inválido!'});
        })
    }
    
  }

cancel(): void {
  this.router.navigate(['category-read'])
}

}
