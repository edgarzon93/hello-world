import { Component, OnInit } from '@angular/core';
import { HttpService, SessionService } from 'eter-ui';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  urlGetUsuarios = `${environment.endpoint}/api/v1/usuarios`

  usuariosList;
  filterList;

  filter=''

  constructor(
    private http : HttpService,
    private router : Router,
    private session : SessionService,
    private activeRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {

    

    
    this.http.getData(this.urlGetUsuarios).subscribe(
      res=>{
        this.usuariosList = res['body']
        this.filterList = res['body']
        console.log(this.filterList)
      },
      err=>console.log(err)
    )

  }

  filaSeleccionada(user){

    console.log()
    this.session.setData('cedulaUsuario', user.cedula)
    this.router.navigate(['detalle'], {relativeTo: this.activeRoute})
  }

  onChange($event){
   
    this.filter = $event.target.value.toUpperCase()

    console.log(this.filter)

    this.filterList = this.usuariosList.filter( usuario=>
        usuario.nombre.toUpperCase().includes(this.filter)
        || usuario.cedula.toString().toUpperCase().includes(this.filter)
        || usuario.area.toUpperCase().includes(this.filter)
        || usuario.cargo.toUpperCase().includes(this.filter)
        || usuario.telefono.toString().toUpperCase().includes(this.filter)
    )
    console.log(this.usuariosList)
    console.log(this.filterList)

  }

}
