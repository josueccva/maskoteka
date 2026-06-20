import { Component } from '@angular/core';
import { Contactus } from "../contactus/contactus";

@Component({
  selector: 'app-home',
  imports: [Contactus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
