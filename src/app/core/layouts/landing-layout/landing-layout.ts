import { Component } from '@angular/core';
import { LandingNavbar } from "../../components/landing-navbar/landing-navbar";
import { RouterOutlet } from '@angular/router';
import { Footer } from "../../components/footer/footer";

@Component({
  selector: 'app-landing-layout',
  imports: [LandingNavbar, RouterOutlet, Footer],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.css',
})
export class LandingLayout {}
