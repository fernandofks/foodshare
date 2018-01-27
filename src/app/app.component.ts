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

  constructor(){
    let dadosString = localStorage.getItem('cards');

    if(dadosString){
      this.lista = JSON.parse(dadosString);
    }
  }
  
  inserirDados(){
    this.lista.push(this.dados);
    console.log(this.lista);
    this.dados = {preco: "", comida: "", imagem: "", descricao: ""};
    let dadosString = JSON.stringify(this.lista);
    localStorage.setItem('cards', dadosString);
  }

  limparDados(){
    this.lista=[];
    localStorage.clear();
  }

}
