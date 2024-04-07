import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    { name: 'fullscreen', route: '/maps/fullscreen' },
    { name: 'zoom', route: '/maps/zoom-range' },
    { name: 'markes', route: '/maps/markers' },
    { name: 'Houses', route: '/maps/properties' },
    { name: 'alone', route: '/alone' },
  ]

}
