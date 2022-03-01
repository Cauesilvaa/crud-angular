import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  // Dando o valor 'alguma-coisa' como valor do id no html
  // atributoId = 'alguma-coisa'

  // Criando um obj do tipo produto
  product: Product = {
    nome: '',    
    senha: '',
    cpf: 0,
  }

  constructor(private productService: ProductService,
              private router: Router) { }


  // É chamado quando o component é inicializado, igual 'window.onload'              
  ngOnInit(): void {}

  //Exemplo de função, e to passando ela no arquivo html
  fazerAlgo(): void {
    console.log('Fazendo algo');
  }

  createProduct(): void {
    this.productService.create(this.product) /*até aq é a função de criar um produto*/.subscribe(()=> { //'subscrible' notifica só quando a resposta da função chegar
      this.productService.showMessage('Produto criado.') // chamando o 'showMessage' no subscrible
      this.router.navigate(['/products']) // redirecionando
    })
  }

  cancel(): void{
    this.router.navigate(['/products'])
  }

}
