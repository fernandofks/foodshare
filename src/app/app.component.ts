import { Component,} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lista = [];
  dados = {preco: "", comida: "", imagem: "", descricao: ""};

  inserirDados(){
    this.lista.push(this.dados);
    console.log(this.lista);
    

  }
}
