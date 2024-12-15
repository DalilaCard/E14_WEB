import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabla-empleados',
  standalone: true, // Declaración como componente independiente
  imports: [CommonModule], // Importa CommonModule aquí
  templateUrl: './tabla-empleados.component.html',
  styleUrls: ['./tabla-empleados.component.css']
})
export class TablaEmpleadosComponent {
  empleados = [
    { id: 1, nombre: 'Andrés', sueldo: 239.31, estado: 'activo' },
    { id: 2, nombre: 'Cristiano', sueldo: 211.53, estado: 'activo' },
    { id: 3, nombre: 'Efrain', sueldo: 250.7, estado: 'activo' },
    { id: 4, nombre: 'Gerard', sueldo: 215.21, estado: 'activo' },
    { id: 5, nombre: 'Lionel o Leo', sueldo: 215.21, estado: 'activo' },
    { id: 6, nombre: 'Neymar', sueldo: 450.04, estado: 'inactivo' },
    { id: 7, nombre: 'Ana', sueldo: 450.03, estado: 'inactivo' },
    { id: 8, nombre: 'Enzo', sueldo: 215.21, estado: 'inactivo' },
    { id: 9, nombre: 'Eric', sueldo: 250.7, estado: 'inactivo' },
    { id: 10, nombre: 'Eva', sueldo: 250.7, estado: 'inactivo' },
  ];

  editarEmpleado(id: number) {
    console.log(`Editar empleado con ID: ${id}`);
  }

  eliminarEmpleado(id: number) {
    console.log(`Eliminar empleado con ID: ${id}`);
  }
}
