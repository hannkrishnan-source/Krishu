import { Component } from "@angular/core";


@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {

  img = '/assets/flight-icon.png';
  successMessage = false;

  onSubmit() {
    this.successMessage = true;
  };
}
