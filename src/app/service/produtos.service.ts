import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Produtos } from '../model/Produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllProdutos():Observable<Produtos[]>{
    return this.http.get<Produtos[]>('https://upvzinhozinho-ynmf.onrender.com/produtos', this.token)
  }

  getByIdProdutos(id:number):Observable<Produtos>{
    return this.http.get<Produtos>(`https://upvzinhozinho-ynmf.onrender.com/produtos/${id}`, this.token)
  }

  getByNomeProdutos(nome: string): Observable<Produtos[]>{
      return this.http.get<Produtos[]>(`https://upvzinhozinho-ynmf.onrender.com/produtos/nome/${nome}`, this.token)
  }

  postProdutos(produtos: Produtos): Observable<Produtos>{
    return this.http.post<Produtos>('https://upvzinhozinho-ynmf.onrender.com/produtos', produtos, this.token)
  }

  putProdutos(produtos:Produtos):Observable<Produtos>{
    return this.http.put<Produtos>('https://upvzinhozinho-ynmf.onrender.com/produtos', produtos, this.token)
  }

  deleteProdutos(id:number){
    return this.http.delete(`https://upvzinhozinho-ynmf.onrender.com/produtos/${id}`, this.token)
  }

}
