import { DoCheck, Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { map, of } from 'rxjs';
import { TestModel } from '../models/test-model';

@Injectable({
  providedIn: 'root',
})
export class QueueService implements DoCheck {
  private basicArray: TestModel[] = [
    {
      id: 1,
      name: 'Piero',
      like: 0,
    },
    {
      id: 2,
      name: 'Paolo',
      like: 0,
    },
    {
      id: 3,
      name: 'Pippo',
      like: 0,
    },
  ];

  getBasicArrayPromise() {
    return new Promise((resolve, reject) => resolve(this.basicArray));
  }

  getBasicArrayObservable() {
    return of(this.basicArray).pipe(
      map((values) => {
        values = [...values, { id: 4, name: 'Bryan', like: 0 }];
        return values;
      })
    );
  }

  constructor() {}
  ngDoCheck(): void {
    console.log(this.basicArray);
  }

  pushLike(like: number, id: number) {
    const singleItem = this.basicArray.find((item) => item.id === id);
    console.log(singleItem);
    if (singleItem) singleItem.like = like;
  }

  getBasicArray() {
    return this.basicArray;
  }
}
