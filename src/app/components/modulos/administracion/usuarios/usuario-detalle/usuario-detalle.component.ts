import { Component, OnInit } from '@angular/core';
import { SessionService, HttpService } from 'eter-ui';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.scss']
})
export class UsuarioDetalleComponent implements OnInit {

  urlGetDetalleUsuario = `${environment.endpoint}/api/v1/usuarios/${this.session.getData('cedulaUsuario')}`


  constructor(
    private session : SessionService,
    private http : HttpService
  ) { }

  ngOnInit(): void {
    this.http.getData(this.urlGetDetalleUsuario).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

}
