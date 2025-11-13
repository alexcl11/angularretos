import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SubirFicheroComponent } from './components/subir.fichero.component/subir.fichero.component';
import { MenuComponent } from './components/menu.component/menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angularretos');
}
