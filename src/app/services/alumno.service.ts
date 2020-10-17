import { Injectable } from '@angular/core';
import { Alumno } from '../models/alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  listAlumnos: Alumno[] = [
    { nombre: 'Mark Zuckerberg', estado: 'Aprobado' },
    { nombre: 'Bill Gates', estado: 'No Aprobado' },
    { nombre: 'Elon Musk', estado: 'Promocionado' }
  ];
  constructor() { }

  // funcion que permite agregar alumno
  addAlumno(alumno: Alumno): void {
    this.listAlumnos.unshift(alumno);
  }

  // funcion que permite actualizar el estado del alumno
  updateAlumno(id: number, estado: string): void {
    this.listAlumnos[id].estado = estado;
  }
}
