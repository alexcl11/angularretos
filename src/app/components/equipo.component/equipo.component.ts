import { Component, OnInit } from '@angular/core';
import { DatosEquipo } from '../../models/DatosEquipo';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, forkJoin, delay } from 'rxjs';
import ApiApuestasService from '../../services/service.apuestas';

@Component({
  selector: 'app-equipo.component',
  imports: [],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
  providers: [ApiApuestasService]
})
export class EquipoComponent implements OnInit{
  public dataEquipo!: DatosEquipo;
  
  constructor(private _activeRoute: ActivatedRoute, private _service:ApiApuestasService){}

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      let idEquipo = parseInt(params['id'])

      let equipo$ = this._service.findEquipo(idEquipo)
      let jugadores$ = this._service.getJugadoresEquipo(idEquipo).pipe(
        delay(3000) // Retraso artificial de 3000 milisegundos (3 segundos)
      );

      forkJoin({
        equipo: equipo$,
        jugadores: jugadores$
      }).subscribe({
        next: (response) => {
          let datos = new DatosEquipo()
          datos.equipo = response.equipo
          datos.jugadores = response.jugadores

          this.dataEquipo = datos
        }
      })

    })
  }
}
