import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdutosComponent } from './components/produtos/produtos.component';
import { ProdutoDetalheComponent } from './components/produtos/produtos-detalhe/produto-detalhe.component';
import { ProdutoListaComponent } from './components/produtos/produtos-lista/produto-lista.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    children: [
      { path: 'produtos', redirectTo: 'produtos/lista' },
      {
        path: 'produtos',
        component: ProdutosComponent,
        children: [
          { path: 'detalhe/:id', component: ProdutoDetalheComponent },
          { path: 'detalhe', component: ProdutoDetalheComponent },
          { path: 'lista', component: ProdutoListaComponent },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
