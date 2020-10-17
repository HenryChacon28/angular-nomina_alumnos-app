import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { Alumno } from 'src/app/models/alumno';
@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {
  listAlumnos: Alumno[] = [];

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    this.getAlumno();
  }

  getAlumno(): void {
    this.listAlumnos = this.alumnoService.listAlumnos;
  }

  updateAlumno(id: number, estado: string): void {
    this.alumnoService.updateAlumno(id, estado);
  }

}
