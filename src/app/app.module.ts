import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EterUiModule } from 'eter-ui';
import { InitialPageComponent } from './components/initial-page/initial-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SubmenuComponent } from './components/modals/submenu/submenu.component'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsuariosComponent } from './components/modulos/administracion/usuarios/usuarios.component';
import { TercerosComponent } from './components/modulos/administracion/terceros/terceros.component'
import { HttpClientModule } from '@angular/common/http';
import { UsuarioDetalleComponent } from './components/modulos/administracion/usuarios/usuario-detalle/usuario-detalle.component';
import { Example2Component } from './components/example2/example2.component';
import { TonnyComponent } from './components/example2/tonny/tonny.component';




@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    SubmenuComponent,
    UsuariosComponent,
    TercerosComponent,
    UsuarioDetalleComponent,
    Example2Component,
    TonnyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EterUiModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  entryComponents: [
    SubmenuComponent,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
