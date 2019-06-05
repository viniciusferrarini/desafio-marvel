// import { OnInit } from '@angular/core';
// import { Entity } from './entity';
// import { DataService } from './data.service';
// import { CharacterDataContainer } from '../model/character.data.container';
// import { CharacterDataWrapper } from '../model/character.data.wrapper';
// import { Character } from '../model/character';

// export abstract class DataController implements OnInit { 

//     lista: Character[] = [];

//     constructor(
//         public dataService: DataService<T, ID>,
//         private type: any) {
//     };

//     ngOnInit(): void {
//         this.getAll();
//     }

//     getAll() {
//         this.dataService
//           .get<CharacterDataWrapper>()
//           .subscribe((data: CharacterDataWrapper) => {
//             this.lista = data.data.results;
//             console.log(this.lista);
//           },
//           error => () => {
//             console.log(error);
//           });
//       }

// }