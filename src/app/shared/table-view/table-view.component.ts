import { Component, OnInit, Input, ViewChild, TemplateRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableViewComponent<T> implements OnInit {

  @Input() minTableHeight: number = 500;
  @Input() items: object[] = [];
  @Input() columns: object[] = [];
  @Input() limit?: number;
  @Input() detailTemplate: TemplateRef<any>;

  @ViewChild('myTable') table: any;

  constructor() { }

  ngOnInit() {
  }

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
   }

}
