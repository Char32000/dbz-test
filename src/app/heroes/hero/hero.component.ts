import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public title: string = "App Lupin III"
  public age: number | string = 23;
  public name:string = "Arsene Lupin";

  public nameChanged: boolean = false;
  public ageChanged: boolean = false;


  changeName(name?: string): void{
    this.name = "Lupin III";
    this.nameChanged = true;
  }

  changeAge(edad: number | string = "Unknown"):void{
    this.age = 40;
    this.ageChanged = true;
  }

  get capitalizeName():string{
    return "Hola mundo";
  }

  get heroDescription(): string {
    return `${this.name} con ${this.age}`;
  }

}
