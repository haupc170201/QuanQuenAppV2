import { Component } from '@angular/core';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  faEnvelope = faEnvelope;
  locationDot = faLocationDot;
  phone = faPhone
  btnContact() {
    window.location.reload()
  }
}
