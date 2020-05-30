import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { UsuariosComponent } from './components/modulos/administracion/usuarios/usuarios.component';
import { TercerosComponent } from './components/modulos/administracion/terceros/terceros.component';
import { UsuarioDetalleComponent } from './components/modulos/administracion/usuarios/usuario-detalle/usuario-detalle.component';


const routes: Routes = [
  {path:'', component:InitialPageComponent},
  {
    path:'administracion',
    children:[
      {
        path:'',
        children:[
          {
            path:'usuarios',
            children:[
              {path:'', component:UsuariosComponent},
              {path:'detalle', component:UsuarioDetalleComponent}
            ]            
          },
          {path:'terceros', component: TercerosComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
