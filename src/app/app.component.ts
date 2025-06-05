import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stackalend';

  @HostListener('window:beforeunload', ['$event'])
  clearLocalStorageOnRefresh(event: Event) {
    localStorage.clear();
  }
}
