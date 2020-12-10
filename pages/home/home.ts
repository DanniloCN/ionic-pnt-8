import { Component } from "@angular/core";
import { NavController, AlertController, ToastController } from "ionic-angular";
import { Comprar } from "../comprar/comprar";
import comprarHtml from "../comprar/comprar.html";

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  styleUrls: ["home.scss"]
})
export class HomePage {
  constructor(public navCtrl: AlertController, public alertCtrl: AlertController, public toastCtrl: ToastController) {

 }

  abrirAlerta() {
    let alert = this.alertCtrl.create({
      title: "Confirmação de compra",
      message: "Tem certeza que deseja comprar esse livro?",
      buttons: [
                {
          text: "Cancelar",
          handler: () => {this.presentToastCancela()}
        },
        {
          text: "Comprar",
          handler: () => {this.presentToastSucesso()}
        }
      ]
    });
    alert.present();
  }

  presentToastSucesso() {
    let toast = this.toastCtrl.create({
      message: "Sua compra foi realizada com sucesso!",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }
  presentToastCancela() {
    let toast = this.toastCtrl.create({
      message: "Sua compra foi cancelada!",
      duration: 3000,
      position: "bottom"
    });
    toast.present();
  }

}
