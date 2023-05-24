import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'component-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDeletetId : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = []

  public onDeleteCharacter (index:string):void {
    console.log(`id borrado ${index}`)

    this.onDeletetId.emit(index);

  }



  public onDeleteId() :void {

  }


}
