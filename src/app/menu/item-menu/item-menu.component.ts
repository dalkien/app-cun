import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.css']
})
export class ItemMenuComponent {

  titulo = 'Tráfico de voz';

  acciones = [
    {
      label: 'Cargue de archivos',
      value: 'cargue-archivos',
      url: 'archivos'
    },

    {
      label: 'Activación / Desactivación tráfico de voz',
      value: 'activa-desactiva-trafico',
      url: 'estado-trafico'
    },

    {
      label: 'Parametrización',
      value: 'parametrizacion',
      url: 'parametrizacion'
    },

    {
      label: 'Logs de auditoria',
      value: 'logs-auditoria',
      url: 'logs-auditoria'
    },
  ];
}
