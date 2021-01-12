import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import * as data from './data';

@Injectable()
export class InMemoryProductService implements InMemoryDbService {
  createDb() {
    return {
      products: data.data,
      comments: [
        {
          id: 1, items: [
            { id: 1, text: 'Cool', replies: [] },
            { id: 2, text: 'Cool', replies: [] },
          ]
        },
        {
          id: 2, items: [
            { id: 1, text: 'Super', replies: [] },
            { id: 2, text: 'Super', replies: [] },
          ]
        },
        {
          id: 3, items: [
            { id: 1, text: 'Wow', replies: [] },
            { id: 2, text: 'Super', replies: [] },
          ]
        },
        {
          id: 4, items: [
            { id: 1, text: 'No', replies: [] },
            { id: 2, text: 'No', replies: [] },
          ]
        },
      ]
    };
  }
}