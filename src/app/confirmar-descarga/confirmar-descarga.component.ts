import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-confirmar-descarga',
  templateUrl: './confirmar-descarga.component.html',
  styleUrls: ['./confirmar-descarga.component.css']
})
export class ConfirmarDescargaComponent {


  @Input() archivo: string;
  @Input() indice: number;

}
