import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './app-heroes-list.component.html',
  styleUrls: ['./app-heroes-list.component.scss']
})
export class AppHeroesListComponent {

  public HeroNames: string[] = ["Lupin", "Jigen", "Goemon", "Zenigata"]
  public deletedHero: string = ' ';


  deleteHero(){
    this.deletedHero = this.HeroNames.pop() || "ninguno"
  }

}
