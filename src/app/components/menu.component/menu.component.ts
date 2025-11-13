import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import ApiApuestasService from '../../services/service.apuestas';
import Equipo from '../../models/Equipo';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [ApiApuestasService]
})
export class MenuComponent implements OnInit{
  public equipos: Array<Equipo> = []
  constructor(private _service:ApiApuestasService){}

  ngOnInit(): void {
    this._service.getEquipos().subscribe(response => {
      for (const equipo of response) {
        this.equipos.push(equipo)
      }
    })
  }
}
