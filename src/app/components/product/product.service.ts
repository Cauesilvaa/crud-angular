import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:8080/user/insert";

  //'MatSnackBar' é um import do 'material' que exibe uma mensagem
  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  //To chamando o 'showMessage' no 'product-create.component.ts'
  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  // Função para criar um produto
  create(product: Product): Observable<Product>{ //'Observable<Product>': é o retorno dessa função q vai ser um 'observable' do tipo produto
    return this.http.post<Product>(this.baseUrl, product)
  }
}
