import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../../core/routes/routes';
import { RouterLink } from '@angular/router';
import { Daterangepicker } from '../../../../shared/daterangepicker/daterangepicker';

@Component({
  selector: 'app-orders',
  imports: [FormsModule,RouterLink,Daterangepicker],
  templateUrl: './orders.html',
  styleUrl: './orders.scss',
})
export class Orders {
  AllRoutes = routes
  inputValue = '';
  elem = document.documentElement;
evaluate(expression: string): string {
    try {
      return new Function('return ' + expression)();
    } catch {
      return 'Error';
    }
  }

  clearCal(): string {
    return '';
  }

  backspacemain(value: string): string {
    return value.slice(0, -1);
  }
  onKeyPress(event: KeyboardEvent) {
    const validKeys = /[0-9+\-*/%.]/;
    
    if (validKeys.test(event.key)) {
      this.inputValue += event.key;
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
      this.inputValue = this.backspacemain(this.inputValue);
    } else if (event.key === 'Enter') {
      this.solve();
    } else if (event.key.toLowerCase() === 'c') {
      this.clear();
    }
  }

  solve(): void {
    this.inputValue = this.evaluate(this.inputValue);
  }

  clear(): void {
    this.inputValue = this.clearCal();
  }

  backspace(): void {
    this.inputValue = this.backspacemain(this.inputValue);
  }

  addValue(val: string): void {
    this.inputValue += val;
  }
  showMore:boolean[]=[false];
  toggleShowMore(i:number):void{
    this.showMore[i]=!this.showMore[i]
  }
  ngOnInit():void{
    document.body.classList.add('custom-rangePicker')
  }
  ngOnDestroy():void{
    document.body.classList.remove('custom-rangePicker')
  }
}
