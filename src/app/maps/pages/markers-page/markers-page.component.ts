import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css'
})
export class MarkersPageComponent {

  @ViewChild('map')
  public divMap?: ElementRef;

   //! valor inicial del zoom
   public zoom: number = 15;
   public map?: Map;
   public currentCenter: LngLat = new LngLat(-75.64, 4.53);

  ngAfterViewInit(): void {

    //! si no existe hagame un return
    if( !this.divMap ) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentCenter, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    //! podemos cambiar el icono, html del marker por uno personalizado
    /* const marketHtml = document.createElement('div');
    marketHtml.innerHTML = "Alejandro Toro"; */

    //! crear un marcador
    /* const marker = new Marker({
            //color: "red"
            //!element: marketHtml
          })
          .setLngLat( this.currentCenter )
          .addTo( this.map ); */

  }

  //! crear marcador

  public createMarket = (): void => {

    if( !this.map ) return;
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
    const ubicationNow = this.map.getCenter();
    this.addMarket(ubicationNow,color);

  }


  //! Añadir marcadores

  public addMarket = ( lngLat: LngLat, color: string ): void => {

    if(!this.map) return;
    const market = new Marker({
            color,
            draggable: true
          }).setLngLat( lngLat)
            .addTo( this.map );

  }

}
