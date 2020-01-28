import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemMenuComponent } from './menu/item-menu/item-menu.component';
import { ArchivosFullstackComponent } from './archivos-fullstack/archivos-fullstack.component';
import { CargueArchivoComponent } from './cargue-archivo/cargue-archivo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EstadoTraficoComponent } from './estado-trafico/estado-trafico.component';
import { ParametrizacionComponent } from './parametrizacion/parametrizacion.component';
import { LogsAuditoriaComponent } from './logs-auditoria/logs-auditoria.component';
import { ConfirmarCargueComponent } from './confirmar-cargue/confirmar-cargue.component';
import { ConfirmarDescargaComponent } from './confirmar-descarga/confirmar-descarga.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemMenuComponent,
    ArchivosFullstackComponent,
    CargueArchivoComponent,
    NavbarComponent,
    FooterComponent,
    EstadoTraficoComponent,
    ParametrizacionComponent,
    LogsAuditoriaComponent,
    ConfirmarCargueComponent,
    ConfirmarDescargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
