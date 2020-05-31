import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { UsuariosComponent } from './components/modulos/administracion/usuarios/usuarios.component';
import { TercerosComponent } from './components/modulos/administracion/terceros/terceros.component';
import { UsuarioDetalleComponent } from './components/modulos/administracion/usuarios/usuario-detalle/usuario-detalle.component';
import { Example2Component } from './components/example2/example2.component';
import { TonnyComponent } from './components/example2/tonny/tonny.component';


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
    
  },    
  {path:'prueba', component:Example2Component},
  {
    path:'prueba',
    children:[      
   {path:'tonny', component:TonnyComponent}
    ]
  }
  
     
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
