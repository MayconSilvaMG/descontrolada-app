import { Produto } from './../models/Produtos';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take} from 'rxjs/operators';
@Injectable(
// { providedIn: 'root'}
)
export class ProdutosService {
  readonly descontroladaApiUrl = "http://localhost:5000";

  constructor(private http: HttpClient) { }


  getProductList():Observable<any[]>{
    return this.http.get<any>(this.descontroladaApiUrl+ '/v1/GetProduct' );
    }
    
  /*public getProductList(page?: number, itemsPerPage?: number, term?: string): Observable<PaginatedResult<Produto[]>> {
    const paginatedResult: PaginatedResult<Produto[]> = new PaginatedResult<Produto[]>();

    let params = new HttpParams;

    if (page != null && itemsPerPage != null) {
      params = params.append('pageNumber', page.toString());
      params = params.append('pageSize', itemsPerPage.toString());
    }

    if (term != null && term != '')
      params = params.append('term', term)

    return this.http
      .get<Produto[]>(this.descontroladaApiUrl, {observe: 'response', params })
      .pipe(
        take(1),
        map((response) => {
          paginatedResult.result = response.body;
          if(response.headers.has('Pagination')) {
            paginatedResult.pagination = JSON.parse(response.headers.get('Pagination'));
          }
          return paginatedResult;
        }));
  }*/

  public getProdutoById(id: number): Observable<Produto> {
    return this.http
      .get<Produto>(`${this.descontroladaApiUrl}/${id}`)
      .pipe(take(1));
  }

  public post(produto: Produto): Observable<Produto> {
    return this.http
      .post<Produto>(this.descontroladaApiUrl, produto)
      .pipe(take(1));
  }

  public put(produto: Produto): Observable<Produto> {
    return this.http
      .put<Produto>(`${this.descontroladaApiUrl}/${produto.id}`, produto)
      .pipe(take(1));
  }

  public deleteProduto(id: number): Observable<any> {
    return this.http
      .delete(`${this.descontroladaApiUrl}/${id}`)
      .pipe(take(1));
  }
}
