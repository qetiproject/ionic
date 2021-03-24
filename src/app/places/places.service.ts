import { Injectable } from '@angular/core';
import { Place } from './place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  places: Place[] =[
    {
      id: 'p1',
      title: 'The Foggy Palace',
      description: 'p1 description',
      imageUrl: 'img',
      price: 23
    },
    {
      id: 'p2',
      title: 'The Foggy Palace',
      description: 'p2 description',
      imageUrl: 'img2',
      price: 52
    }
  ];

  constructor() { }

  getPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return {
      ...this.places.find( p => p.id === id)
    };
  }

}
