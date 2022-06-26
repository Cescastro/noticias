import { Component } from '@angular/core';
import { NoticiaService } from './service/noticia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listNoticias: any[] = [];
  loading = false;
 
  constructor(private noticiaService: NoticiaService){

  }

  buscarNoticias(parametros: any){   
    this.loading = true;
    this.listNoticias = [];
    this.noticiaService.getNoticias(parametros).subscribe(data=>{
      this.loading = false;
      console.log(data);
      this.listNoticias = data.articles;
    }, error => 
    {
      console.log(error)
      this.loading = false;
    });
    
  }
}
