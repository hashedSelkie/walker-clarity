import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  openMenu(event: Event){
    document.getElementById("myNav").style.height = "100%";
  }

  closeMenu(event: Event){
    document.getElementById("myNav").style.height = "0%";
  }

}
