import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { first } from 'rxjs/operators';
import { Category } from 'src/app/shared/models/Category';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-category-update',
  templateUrl: './category-update.component.html',
  styleUrls: ['./category-update.component.css']
})
export class CategoryUpdateComponent implements OnInit {

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

  ngOnInit() {
    this.category.id = this.route.snapshot.paramMap.get("id")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.category.id!).pipe(first()).subscribe((resp: Category) => {
      this.category.nome = resp.nome;
      this.category.descricao = resp.descricao;
    })
  }

  update() {
    this.service.update(this.category).pipe(first()).subscribe((resp) => {
      this.messageService.add({key: 'tru', severity:'success', summary: 'Atualizado!', detail: 'Atualizado com sucesso!'});
        setTimeout(() => {
          this.router.navigate(['category-read'])
      }, 2000);
    
        }, error => {
          this.messageService.add({key: 'tru', severity:'error', summary: '!=Atualizado', detail: 'Não pode ser Atualizado, não esta seguindo as regras!'});
        
    });
  }

  cancel() {
    this.router.navigate(['category-read'])
  }

}
