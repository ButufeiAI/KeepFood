import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSelect, MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-items',
  imports: [MatSelectModule,CommonModule],
  templateUrl: './items.html',
  styleUrl: './items.scss',
})
export class Items {
trash:boolean=false;
isTrash():void{
  this.trash=true;
}
  formData: any[] = []; 

  addNewRow(i:number) {
    if (!this.formData[i]) {
    this.formData[i] = [];
  }
    this.formData[i].push({});
  }

  removeRow(index: number,i:number) {
      this.formData[i].splice(index, 1);
  }
  trackByIndex(index: number, item: any) {
    return index;
  }
}
