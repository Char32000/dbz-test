import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'component-dbz-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  @Output()
  public onNewChar:EventEmitter<Character> = new EventEmitter();

  public character : Character = {
    name: '',
    power: 0
  }

addCharacter():void{
  console.log(this.character)

  this.onNewChar.emit({...this.character});

  this.character.name = '';
  this.character.power = 0;
}

}
