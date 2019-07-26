import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  num_lista = 1;
  num = 0;
  cont = 0;

  constructor() { }

  ngOnInit() {
    setTimeout(()=>{
      setInterval(() => {
        this.escribir_webSites();
      }, 250);
    }, 1300);
  }

  escribir_webSites() {
    const webSites = new Array('W', 'e', 'b', ' ', 'S', 'i', 't', 'e', 's', '', '', '', '', '', '', '', '', '', '', '', '');
    const webApplicatios = new Array('W', 'e', 'b', ' ', 'A', 'p', 'p', 'l', 'i', 'c', 'a', 't', 'i', 'o', 'n', 's', '', '', '', '', '', '', '', '', '', '', '', '', '');
    const userInterfaces = new Array('U', 's', 'e', 'r', ' ', 'I', 'n', 't', 'e', 'r', 'f', 'a', 'c', 'e', 's', '', '', '', '', '', '', '', '', '', '', '', '', '');

    if (this.cont === 0) {
        document.getElementById('message').innerHTML += webSites[this.num];
        this.num++;
        if (this.num === webSites.length - 1) {
            document.getElementById('message').className = 'bg-black';
        }
        if (this.num === webSites.length) {
          this.num = 0;
            document.getElementById('message').innerHTML = ' ';
            document.getElementById('message').className = 'display-3 text-white';
            this.cont++; // SUMAR CONTADOR EXCEPTO EL ULTIMO QUE LO PONDRA A 0
        }
    }

    if (this.cont === 1) {
        document.getElementById('message').innerHTML += webApplicatios[this.num];
        this.num++;
        if (this.num === webApplicatios.length - 1) {
            document.getElementById("message").className = 'bg-black';
        }
        if (this.num === webApplicatios.length) {
          this.num = 0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            this.cont++;
        }
    }

    if (this.cont === 2) {
        document.getElementById("message").innerHTML += userInterfaces[this.num];
        this.num++;
        if (this.num === userInterfaces.length - 1) {
            document.getElementById("message").className = 'bg-black';
        }
        if (this.num === userInterfaces.length) {
          this.num = 0;
            document.getElementById("message").innerHTML = " ";
            document.getElementById("message").className = 'display-3 text-white';

            this.cont = 0; // EL ULTIMO SIEMPRE PONE A CERO EL CONTADOR
        }
    }


}

}
