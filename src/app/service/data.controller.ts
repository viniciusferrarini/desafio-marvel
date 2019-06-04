import { OnInit } from '@angular/core';
import { Entity } from './entity';
import { DataService } from './data.service';

export abstract class DataController<T extends Entity<ID>, ID> implements OnInit { 

    lista: T[] = [];

    constructor(
        public dataService: DataService<T, ID>,
        private type: any) {
    };

    ngOnInit(): void {
        this.getAll();
    }

    getAll() {
        this.dataService
          .get<any[]>()
          .subscribe((data: any[]) => this.lista = data,
            error => () => {
              console.log(error);
            });
      }

}