import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dances } from '../../dance'
import { NgFor } from '@angular/common';
import { MatCardModule, MatCardHeader } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, MatCardModule, MatCardHeader, MatDividerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Dancing For Couples';
  dances = dances;

}
