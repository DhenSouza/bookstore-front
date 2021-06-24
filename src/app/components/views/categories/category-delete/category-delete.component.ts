import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {

  category: Category = {
    id: '',
    nome: '',
    descricao: ''
  }

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(){

    this.category.id = this.route.snapshot.paramMap.get('id')!
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).pipe(first()).subscribe((resp: Category) => {
      this.category.nome = resp.nome
      this.category.descricao = resp.descricao
    })
  }

  deleteCat(): void {
    this.service.delete(this.category.id!).pipe(first()).subscribe((resp) => {
      this.messageService.add({key: 'trd', severity:'success', summary: 'Deletado!', detail: 'Deletado com sucesso!'});
        setTimeout(() => {
          this.router.navigate(['category-read'])
      }, 2000);
    
        }, error => {
          this.messageService.add({key: 'trd', severity:'error', summary: '!=Deletado', detail: 'Não pode ser deletado!'});
        
    });
  }

  cancel(): void {
    this.router.navigate(['category-read'])
  }
}
