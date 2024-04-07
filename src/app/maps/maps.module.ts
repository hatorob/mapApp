import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environments';

//! para que quede de forma global
import mapboxgl from 'mapbox-gl';

(mapboxgl as any).accessToken = environment.mapbox_key;


import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiessPageComponent } from './pages/propertiess-page/propertiess-page.component';
import { ZoomPageComponent } from './pages/zoom-page/zoom-page.component';
import { RouterModule } from '@angular/router';
import { CounterComponent } from '../alone/components/counter/counter.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';


@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiessPageComponent,
    ZoomPageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    RouterModule,
    CounterComponent,
    SideMenuComponent
  ]
})
export class MapsModule { }
