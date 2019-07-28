import { Component, OnInit } from '@angular/core';
import { NgForm, Validators} from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


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
  alertTime = 5000;
  alertName = false;
  alertEmail = false;
  alertMessage = false;
  alertConnection = false;
  alertSuccesfull = false;

  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  constructor(
    private afs: AngularFirestore
  ) {
    this.itemsCollection = this.afs.collection<Mensaje>('portafolio');
  }

  ngOnInit() {
  }

  addMessage(forma: NgForm) {
    let err = false;
    if (this.report.nombre === '' || this.report.nombre === ' ') {
      err = true;
      this.showAlertName();
    }
    if (this.report.email === '' || this.report.email === ' ') {
      err = true;
      this.showAlertEmail();
    }
    if (this.report.message === '' || this.report.message === ' ') {
      err = true;
      this.showAlertMessage();
    }

    if (!err && forma.valid) {
      const mensaje: Mensaje = {
        nombre: this.report.nombre,
        email: this.report.email,
        message: this.report.message
      };
      console.log(mensaje);
      return this.itemsCollection.add( mensaje )
        .then(() => {
          this.showAlertSuccesfull();
          forma.resetForm();
        })
        .catch((err) => {
          this.showAlertConnection();
        });
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

  showAlertConnection() {
    this.alertConnection = true;
    setTimeout(() => {
      this.alertConnection = false;
    }, this.alertTime);
  }

  showAlertSuccesfull() {
    this.alertSuccesfull = true;
    setTimeout(() => {
      this.alertSuccesfull = false;
    }, this.alertTime);
  }
} // FIN
export interface Mensaje {
  nombre: string;
  email: string;
  message: string;
}