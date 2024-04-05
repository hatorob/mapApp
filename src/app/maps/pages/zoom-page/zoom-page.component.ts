import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-page.component.html',
  styleUrl: './zoom-page.component.css'
})
export class ZoomPageComponent implements AfterViewInit, OnDestroy{

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

    this.mapListeners();

  }

  ngOnDestroy(): void {
    this.map?.remove();
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

    this.map.on('move', (event) => {
      this.currentCenter = this.map!.getCenter();
      //const { lng, lat } = this.currentCenter;
    })

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
