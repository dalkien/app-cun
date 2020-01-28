import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchivosFullstackComponent } from './archivos-fullstack/archivos-fullstack.component';
import { EstadoTraficoComponent } from './estado-trafico/estado-trafico.component';
import { ParametrizacionComponent } from './parametrizacion/parametrizacion.component';
import { LogsAuditoriaComponent } from './logs-auditoria/logs-auditoria.component';

const routes: Routes = [
  { path: '', component: ArchivosFullstackComponent },
  { path: 'archivos', component: ArchivosFullstackComponent },
  { path: 'estado-trafico', component: EstadoTraficoComponent },
  { path: 'parametrizacion', component: ParametrizacionComponent },
  { path: 'logs-auditoria', component: LogsAuditoriaComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
