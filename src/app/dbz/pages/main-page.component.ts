import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {
  public title:string = "App DBZ Works qwq";

  constructor(private dbzService: DBZService){

  }


  get characters():Character[] {
    return [...this.dbzService.characters];
  }

  public onDeleteId(id: string): void{
    this.dbzService.onDeletetId(id)
  }

  public onNewCharacter(char: Character): void{
    this.dbzService.onNewCharacter(char);
  }
}
