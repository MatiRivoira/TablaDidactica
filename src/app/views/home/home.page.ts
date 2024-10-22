import { Component, inject } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  idioma:string = "español";
  tema:string = "colores";
  dropIdiomas:boolean = false;
  dropTemas:boolean = false;
  dropSettings:boolean = false;

  auth = inject(AuthService);

  cambiarIdioma(idioma:string):void {
    this.idioma = idioma;
    this.dropIdiomas = false;
  }

  cambiarTema(tema:string):void {
    this.tema = tema;
    this.dropTemas = false;
  }

  reproducirSonido(sonido:string):void {
    const audio = new Audio(`../assets/sounds/${this.idioma}/${sonido}.mp3`);
    audio.volume = 0.8;
    audio.currentTime = 0;
    audio.play();
  }
}

