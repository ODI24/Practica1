import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';   // Importa RouterOutlet

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,    // Aquí es donde lo necesitas
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Chipoborroelproye';
}
