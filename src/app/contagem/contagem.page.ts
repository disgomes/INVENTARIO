import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-contagem',
  templateUrl: './contagem.page.html',
  styleUrls: ['./contagem.page.scss'],
})
export class ContagemPage implements OnInit {

  data:any = {};
  constructor(public http: HttpClient, public router: Router,public toastController: ToastController) {
    this.data.prateleira = '';
    this.data.codigo_de_barras = '';
    this.data.codigo_do_produto = '';
    this.data.referencia = '';
    this.data.descricao = '';
    this.data.quantidade = '';
    this.http = http;
  }

  ngOnInit() {
  }
  
  cadastrar() {
    var link = 'http://localhost/api-slim/pessoas/';
    var myData = JSON.stringify({prateleira: this.data.prateleira,            
                                 codigo_de_barras: this.data.codigo_de_barras, 
                                 codigo_do_produto: this.data.codigo_do_produto, 
                                 referencia: this.data.referencia ,
                                 descricao: this.data.descricao, 
                                 quantidade: this.data.quantidade});
    
    this.http.post(link, myData)
    .subscribe(data => {
    this.router.navigateByUrl('/home');
    this.notificacaoCadastro();
    }, error => {
    });
    }

    async notificacaoCadastro() {
      const toast = await this.toastController.create({
        message: 'Produto cadastrado !',
        duration: 2000,
        position: 'middle',
      });
      toast.present();
}
    
    }

