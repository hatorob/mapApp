import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarketAndColor {
  market: Marker;
  color: string;
}

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrl: './mini-map.component.css'
})
export class MiniMapComponent implements AfterViewInit {

  @Input() lngLat?: [number, number];
  @ViewChild('map') divMap?: ElementRef;

  //!Valores iniciales
  public zoom: number = 15;
  public map?: Map;


  ngAfterViewInit(): void {

    if( !this.divMap ) throw "No se cargo el mapa"
    if( !this.lngLat ) throw "No envió las coordenadas"

    const map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom

    })

    const marker = new Marker({
      color: '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16)),
    }).setLngLat(this.lngLat)
      .addTo( map );
  }



}
