import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPensamento } from './pensamento/pensamento';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  private readonly API = 'http://localhost:3000/pensamentos'; //API
  constructor(private http: HttpClient) {}

  public listar(pagina: number): Observable<IPensamento[]> {
    const itensPorPagina = 6;

    const params = new HttpParams()
      .set('_page', pagina)
      .set('_limit', itensPorPagina);

    return this.http.get<IPensamento[]>(this.API, { params });
  }

  public criar(pensamento: IPensamento): Observable<IPensamento> {
    return this.http.post<IPensamento>(this.API, pensamento);
  }

  public editar(pensamento: IPensamento): Observable<IPensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<IPensamento>(url, pensamento);
  }

  public excluir(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<IPensamento>(url);
  }

  public buscarPorId(id: number): Observable<IPensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<IPensamento>(url);
  }
}
