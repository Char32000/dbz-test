import { Component } from "@angular/core";

@Component({
  selector: 'counter-app',
  templateUrl: './Counter.component.html',
  styleUrls: ['./counter.component.scss']
})

export class Counter{

  contador: number = 0;

  plusOne(): void{
    this.contador += 1;
  }
  minusOne(): void{
    this.contador > 0 ? this.contador-- : this.contador;
  }

  resetNumber():void{
    this.contador = 0;
  }
}
