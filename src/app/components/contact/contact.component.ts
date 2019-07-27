import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
// ** User Form
report: Mensaje = {
  nombre: null,
  email: null,
  message: null
};
// ********
  send_message = 'Send a message';
  alertTime = 4000;
  alertName = false;
  alertEmail = false;
  alertMessage = false;
  constructor() { }

  ngOnInit() {
  }

  addMessage( forma: NgForm) {
    if (this.report.nombre === '' || this.report.nombre === ' ') {
      this.showAlertName();
    }
    if (this.report.email === '' || this.report.email === ' ') {
      this.showAlertEmail();
    }
    if (this.report.message === '' || this.report.message === ' ') {
      this.showAlertMessage();
    }

    if (forma.valid) {
      const mensaje: Mensaje = {
        nombre: this.report.nombre,
        email: this.report.email,
        message: this.report.message
      };
      console.log(mensaje);
      /*
      return this.itemsCollection.add( mensaje )
        .then(() => {
          this.showError('Thanks, your message has been sent successfully.', 'success');
          forma.resetForm();
        })
        .catch((err) => {
          this.showError(err , 'danger');
        });
        */
    } else {

    }
  }

  showAlertName() {
    this.alertName = true;
    setTimeout(() => {
      this.alertName = false;
    }, this.alertTime);
  }

  showAlertEmail() {
    this.alertEmail = true;
    setTimeout(() => {
      this.alertEmail = false;
    }, this.alertTime);
  }

  showAlertMessage() {
    this.alertMessage = true;
    setTimeout(() => {
      this.alertMessage = false;
    }, this.alertTime);
  }
} // FIN
export interface Mensaje {
  nombre: string;
  email: string;
  message: string;
}