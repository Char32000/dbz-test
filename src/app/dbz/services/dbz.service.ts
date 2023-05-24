import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({providedIn: 'root'})
export class DBZService {

  public characters: Character[] = [{
    name: "Vegeta",
    power: 9000,
    id: uuid()
  },{
    name: "picoro",
    power: 7000,
    id: uuid()
  },{
    name: "Mr Satan",
    power: 110,
    id: uuid()
  }
];

  onNewCharacter (char: Character): void {

    const newChar = {
      ...char,
      id: uuid()
    }

    this.characters.push(newChar)
  }


  onDeletetId(id: string):void {
    // this.characters.splice(id, 1)
    this.characters = this.characters.filter(char => char.id !== id)
    console.log(this.characters.filter(char => char.id !== id))
  }

}
