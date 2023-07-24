import { Router } from '@angular/router';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Produto } from '@app/models/Produtos';
import { ProdutosService } from '@app/services/produtos.service';
import { Pagination } from '@app/models/Pagination';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.scss'],
})
export class ProdutoListaComponent implements OnInit {
  productList$!:Observable<any[]>;
  
  modalRef: BsModalRef;
  public produtos: Produto[] = [];
  public produtoId = 0;
  public pagination = {} as Pagination;

  constructor(
    private produtoService: ProdutosService,
    private modalService: BsModalService,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.pagination = {
      currentPage: 1,
      itemsPerPage: 3,
      totalItems: 1,
    } as Pagination;
    this.productList$ = this.produtoService.getProductList();
  }

  openModal(event: any, template: TemplateRef<any>, produtoId: number): void {
    event.stopPropagation();
    this.produtoId = produtoId;
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public pageChanged(event): void {
    this.pagination.currentPage = event.page;
    this.produtoService.getProductList();
  }

  decline(): void {
    this.modalRef.hide();
  }

  detalheProduto(id: number): void {
    this.router.navigate([`produtos/detalhe/${id}`]);
  }
}
