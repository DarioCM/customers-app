import { Component } from '@angular/core'; // to the annotation can works

@Component({ //decorador = anotacion
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
    title: string = 'App'
}
