import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { OrderContainerService } from './order-container.service';
import { OrderList } from '../models/order-list';
import { TableViewComponent } from '../../shared/table-view/table-view.component';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss'],
  providers : [OrderContainerService]
})
export class OrderContainerComponent implements OnInit, AfterViewInit {


  items: OrderList[] = [];
  public columns: object[] = [];
  public detailColumns: object[] = [];
  @ViewChild("tableView") tableView: TableViewComponent<any>;
  @ViewChild("orderIdCellTemplate") private orderIdCellTemplate: TemplateRef<any>;
  @ViewChild("orderNumberCellTemplate") private orderNumberCellTemplate: TemplateRef<any>;

  numberOfRecords = 0;
  pageSizeOptions: number[] = [10, 20, 30];
  pageSize = 10;
  pageIndex = 0;

  constructor(private ref: ChangeDetectorRef, private service: OrderContainerService) { }

  ngOnInit() {
    this.getOrders(1, 10);

  }
  ngAfterViewInit(): void {
    this.columns = this.getColumns();
    this.detailColumns = this.getDetailsColumns();
    this.ref.detectChanges();
  }

  getOrders(page: number, rows: number): void {
    this.service.getOrderList(page, rows)
        .subscribe(response => {
          this.items = response;
          this.numberOfRecords = response[0].totalRecords;
        });
  }

  changePage(event: any): void {
    this.getOrders(event.pageIndex + 1, event.pageSize);
  }

  toggleExpandRow(row) {
    this.tableView.toggleExpandRow(row);
    this.ref.detectChanges();
  }

  private getColumns(): object[] {
		return [

      {
				name: "Id",
				flexGrow: 0.5,
				cellTemplate : this.orderIdCellTemplate
			},
			{
				name: "Customer",
				prop: "customer",
				flexGrow: 1
			},
			{
        name: "Total",
				prop: "totalAmount",
				flexGrow: 0.5
      },
      {
        name: "# Order",
				cellTemplate: this.orderNumberCellTemplate,
				flexGrow: 0.5
      }
		];
  }

  private getDetailsColumns(): object[] {
		return [

			{
        name: "Product",
        flexGrow: 0.5,
        prop: "productName"
      },
      {
        name: "unitPrice",
				prop: "unitPrice",
				flexGrow: 0.5
      },
      {
        name: "quantity",
				prop: "quantity",
				flexGrow: 0.5
      }
		];
	}
}
