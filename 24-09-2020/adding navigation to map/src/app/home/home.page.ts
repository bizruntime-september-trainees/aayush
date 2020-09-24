import { Component } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  map: any;

  @ViewChild("map", { read: ElementRef, static: false }) mapRef: ElementRef;

  infoWindows: any[] = [];

  markers: any = [
    {
      title: "My home ",
      latitude: "12.910472",
      longitude: "77.686569",
    },
    {
      title: "Saket cinepolis",
      latitude: "12.909742",
      longitude: " 77.685387",
    },
    {
      title: "Mandir",
      latitude: "12.910844",
      longitude: "77.626089",
    },
    {
      title: "Mall ",
      latitude: "12.950594",
      longitude: "77.689809",
    },
  ];

  constructor() {}

  ionViewDidEnter() {
    this.showMap();
  }

  addMarkersToMap(markers) {
    for (let marker of markers) {
      let position = new google.maps.LatLng(marker.latitude, marker.longitude);
      var mapMarker = new google.maps.Marker({
        position: position,
        title: marker.title,
        latitude: marker.latitude,
        longitude: marker.longitude,
      });
      mapMarker.setMap(this.map);
      this.addInfoWindowToMarker(mapMarker);
    }
  }

  addInfoWindowToMarker(marker) {
    var infoWindowContent =
      '< div id="content">' +
      '<h2 id="firstheading" class"firstheading">' +
      marker.title +
      "</h2>" +
      "<p>Latitude: " +
      marker.latitude +
      "</p>" +
      "<p>Longitude: " +
      marker.longitude +
      "</p>" +
      '<ion-button id="navigate">Navigate</ion-button>' +
      "</div>";
    let infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent,
    });

    marker.addListener("click", () => {
      this.closeAllInfoWindow();
      infoWindow.open(this.map, marker);

      google.maps.event.addListenerOnce(infoWindow, "domready", () => {
        document.getElementById("navigate").addEventListener("click", () => {
          console.log("navigate button clicked");

          window.open(
            'https://www.google.com/maps/dir?api=1&destination=' + marker.latitude +', ' + marker.longitude
          );
        });
      });
    });
    this.infoWindows.push(infoWindow);
  }
  closeAllInfoWindow() {
    for (let window of this.infoWindows) {
      window.close();
    }
  }

  showMap() {
    const location = new google.maps.LatLng(12.910494, 77.686059);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true,
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
    this.addMarkersToMap(this.markers);
  }
}
