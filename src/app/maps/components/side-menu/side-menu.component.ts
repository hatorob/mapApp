import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { name: 'fullscreen', route: '/maps/fullscreen' },
    { name: 'markes', route: '/maps/markers' },
    { name: 'Houses', route: '/maps/properties' },
    { name: 'zoom', route: '/maps/zoom-range' },
  ]

}
