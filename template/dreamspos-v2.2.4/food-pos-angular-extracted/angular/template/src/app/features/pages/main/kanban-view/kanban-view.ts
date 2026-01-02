import { Component } from '@angular/core';
import {
  CdkDragDrop,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Daterangepicker } from '../../../../shared/daterangepicker/daterangepicker';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../../core/routes/routes';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-kanban-view',
  imports: [DragDropModule,Daterangepicker,FormsModule,RouterLink],
  templateUrl: './kanban-view.html',
  styleUrl: './kanban-view.scss',
})
export class KanbanView {
  AllRoutes = routes
  public lstOne: KanbanCard[] = [];
  public lstTwo: KanbanCard[] = [];
  public lstThree: KanbanCard[] = [];
  public lstFour: KanbanCard[] = [];
    ngOnInit(): void {
      document.body.classList.add('custom-rangePicker')
    this.lstOne = [
      {
        orderId:'#56998',
        status:'Dine In <span class="text-light">|</span> Table No : 3',
        tokenNo: '24',
        time: '06:24 PM',
        item1: [
          {
          veg: true,
          food: 'Grilled Chicken',
          qty: 1
        }
      ],
        item2: [
          {
          veg: true,
          food: 'Chicken Taco - Medium',
          qty: 1
        }
      ],
        item3: [
          {
          veg: true,
          food: 'Lobster Thermidor',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
      {
        orderId:'#57001',
        status:'Take Away',
        tokenNo: '25',
        time: '06:55 PM',
        item1: [
          {
          veg: false,
          food: 'Vegan Burger',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Sweet Potato Fries',
          qty: 1
        }
      ],
        item3: [
          {
          veg: false,
          food: 'Chocolate Lava Cake',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
      {
        orderId:'#57002',
        status:'Delivery',
        tokenNo: '26',
        time: '07:00 PM',
        item1: [
          {
          veg: false,
          food: 'Margherita Pizza ',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Pasta Primavera',
          qty: 1
        }
      ],
        item3: [
          {
          veg: false,
          food: 'Grilled Salmon Steak',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
    ];
    this.lstTwo = [
      {
        orderId:'#57001',
        status:'Take Away',
        tokenNo: '25',
        time: '06:55 PM',
        item1: [
          {
          veg: false,
          food: 'Vegan Burger',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Sweet Potato Fries',
          qty: 1
        }
      ],
        item3: [
          {
          veg: true,
          food: 'Chocolate Lava Cake',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
      {
        orderId:'#57002',
        status:'Delivery',
        tokenNo: '26',
        time: '07:00 PM',
        item1: [
          {
          veg: false,
          food: 'Margherita Pizza',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Pasta Primavera',
          qty: 1
        }
      ],
        item3: [
          {
          veg: true,
          food: 'Grilled Salmon Steak',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
    ];
    this.lstThree = [
      {
        orderId:'#57002',
        status:'Delivery',
        tokenNo: '26',
        time: '07:00 PM',
        item1: [
          {
          veg: false,
          food: 'Margherita Pizza',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Pasta Primavera',
          qty: 1
        }
      ],
        item3: [
          {
          veg: true,
          food: 'Grilled Salmon Steak',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: true,
      },
    ];
    this.lstFour = [
      {
        orderId:'#57002',
        status:'Delivery',
        tokenNo: '26',
        time: '07:00 PM',
        item1: [
          {
          veg: false,
          food: 'Margherita Pizza',
          qty: 1
        }
      ],
        item2: [
          {
          veg: false,
          food: 'Pasta Primavera',
          qty: 1
        }
      ],
        item3: [
          {
          veg: true,
          food: 'Grilled Salmon Steak',
          qty: 1
        }
      ],
        notes: ' Notes : Extra Spicy',
        print: false,
      },
    ];
  }
    onDrop(event: CdkDragDrop<KanbanCard[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
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
  ngOnDestroy():void{
    document.body.classList.remove('custom-rangePicker')
  }
}
interface KanbanCard {
  orderId: string;
  status: string;
  tokenNo: string;
  time: string;
  item1: Array<{
  veg: boolean;
  food: string;
  qty: number;
}>;
  item2: Array<{
  veg: boolean;
  food: string;
  qty: number;
}>;
  item3: Array<{
  veg: boolean;
  food: string;
  qty: number;
}>;
  notes: string;
  print: boolean;
}

export interface Item {
  veg: boolean;
  food: string;
  qty: number;
}