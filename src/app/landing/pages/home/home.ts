import { Component } from '@angular/core';
import { Contactus } from "../contactus/contactus";
import { Serviceus } from "../serviceus/serviceus";
import { Aboutus } from "../aboutus/aboutus";

@Component({
  selector: 'app-home',
  imports: [Contactus, Serviceus, Aboutus],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
