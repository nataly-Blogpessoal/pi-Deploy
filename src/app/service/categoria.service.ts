import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Categoria } from '../model/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  getAllCategoria(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>('https://upvzinhozinho-ynmf.onrender.com/categoria', this.token)
  }
  getByIdCategoria(id:number): Observable<Categoria>{
    return this.http.get<Categoria>(`https://upvzinhozinho-ynmf.onrender.com/categoria/${id}`, this.token)
  }
  getByNomeCategoria(nome: string): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(`https://upvzinhozinho-ynmf.onrender.com/categoria/nome/${nome}`, this.token)
  }

  postCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>('https://upvzinhozinho-ynmf.onrender.com/categoria', categoria, this.token)
  }
  
  putCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>('https://upvzinhozinho-ynmf.onrender.com/categoria', categoria, this.token)
  }

  deleteCategoria(id:number){
    return this.http.delete(`https://upvzinhozinho-ynmf.onrender.com/categoria/${id}`, this.token)
  }
}
