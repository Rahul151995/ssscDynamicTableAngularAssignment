import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor() { }
  @Input() tableData: any[]=[];
  @Input() option: any[]=[];
  @Output() actionTriggered = new EventEmitter();
  @Output() rowClicked = new EventEmitter();

  ngOnInit(): void {
  }
  actionListener(e:any, config:any, rowData:any, index:any) {
    this.actionTriggered.emit({ config, rowData, index });
    e.stopPropagation();
  }

  getCssClassByColumn(rowData:any, opt:any) {
    let cssClass = '';
debugger
    switch (opt.key) {
    
      case 'status': {
        if (rowData[opt.key] === 'Pending') {
          cssClass = 'text-red';
        }
        if (rowData[opt.key] === 'Refund') {
          cssClass = 'text-yellow';
        }
        if (rowData[opt.key] === 'Paid') {
          cssClass = 'text-green';
        }
        if (rowData[opt.key] === 'Confirmed') {
          cssClass = 'text-green';
        }
        if (rowData[opt.key] === 'Reject') {
          cssClass = 'text-red';
        }
        break;
      }
      default: return;
    }
    return cssClass;
  }

  sortingEventHandler() {

  }
  isArray(obj: any) {
    return Array.isArray(obj)
  }
  rowClick(rowData:any, option:any) {
    if (option.columnEmitAction)
      this.rowClicked.emit(rowData)
  }
}
