import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit {
  nombre = '';
  estado = 'No Aprobado';

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
  }

  agregarAlumno(): void {

    const alumno: Alumno = {
      nombre: this.nombre,
      estado: this.estado
    };
    this.alumnoService.addAlumno(alumno);
    this.nombre = '';
    this.estado = 'No Aprobado';
  }

}
