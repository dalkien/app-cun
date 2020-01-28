import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estado-trafico',
  templateUrl: './estado-trafico.component.html',
  styleUrls: ['./estado-trafico.component.css']
})
export class EstadoTraficoComponent {

  titulo = 'Activación/desactivación';
  subtitulo = 'priorización de tráfico de voz';
  estado = false;

  labelBtnActivo = 'activar';
  labelBtnInactivo = 'desactivar';
  colorActivo = 'success';
  colorInactivo = 'blue-grey';
}
