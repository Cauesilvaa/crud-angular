import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {

  // Criando um atributo 'products' do tipo 'Produto' que vai ser um array - e vai receber oq vier da requisição
  // Não sei pq precisou do '!'
  products!: Product[];

  constructor(private productService: ProductService) { }

  // É chamado quando o component é inicializado, igual 'window.onload'
  ngOnInit(): void {
    this.productService.read()/*até aq é a função de criar um produto*/.subscribe((result)=> { //'subscrible' notifica só quando a resposta da função chegar
      this.products = result
      console.log(result);
      
    })
  }

}
