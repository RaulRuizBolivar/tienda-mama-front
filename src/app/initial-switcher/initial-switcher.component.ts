import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-initial-switcher',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './initial-switcher.component.html',
  styleUrl: './initial-switcher.component.css',
})
export class InitialSwitcherComponent {}
