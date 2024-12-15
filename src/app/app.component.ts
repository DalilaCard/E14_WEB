import { Component } from '@angular/core';
import { TablaEmpleadosComponent } from './tabla-empleados/tabla-empleados.component'; // Importa el componente

@Component({
  selector: 'app-root',
  standalone: true, // Declara el componente independiente
  imports: [TablaEmpleadosComponent], // Importa el componente aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Empleados';
}
