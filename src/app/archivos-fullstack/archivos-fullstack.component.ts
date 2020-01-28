import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archivos-fullstack',
  templateUrl: './archivos-fullstack.component.html',
  styleUrls: ['./archivos-fullstack.component.css']
})
export class ArchivosFullstackComponent {

  titulo = 'Priorización de tráfico de voz';
  subtitulo = 'Detalle de archivos UNGRD';

  deFullStack = [
    {
      nombre: 'archivo numero 01.txt',
      url: 'ruta_descarga'
    },

    {
      nombre: 'archivo numero 02.txt',
      url: 'ruta_descarga'
    },

    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },

    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
  ];

  aFullStack = [
    {
      nombre: 'archivo numero 01.txt',
      url: 'ruta_descarga'
    },

    {
      nombre: 'archivo numero 02.txt',
      url: 'ruta_descarga'
    },

    {
      nombre: 'archivo numero 03.txt',
      url: 'ruta_descarga'
    },
  ];

}
