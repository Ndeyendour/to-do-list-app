import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor(private router: Router) { }

    redirectToLogin() {
        // Ajoutez ici le code pour rediriger vers la page de connexion
        this.router.navigate(['/login']);
    }

    redirectToSignup() {
        // Ajoutez ici le code pour rediriger vers la page d'inscription
        this.router.navigate(['/signup']);
    }

}
