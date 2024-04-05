import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit{

  @ViewChild('map')
  public divMap?: ElementRef;

  //! valor inicial del zoom
  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {

    //! si no existe hagame un return
    if( !this.divMap ) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListeners();

  }


  //!listener del map para escuchar los cambios

  public mapListeners = ():void => {

    if( !this.map ) throw "Mapa no inicializado";

    this.map.on('zoom', (env) => {
      //console.log({env});
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (env) => {
      if( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18);
    });

  }

  public zoomIn = ():void => {
    this.map?.zoomIn();
  }

  public zoomOut = ():void => {
    this.map?.zoomOut();
  }

  /* Para el control de la barra del input */
  public zoomChanged = ( zoomValue: string ): void => {
    this.zoom = Number(zoomValue);
    this.map?.zoomTo(this.zoom)
  }


}
