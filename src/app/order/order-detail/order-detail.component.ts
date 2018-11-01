import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { OrderDetailService } from './order-detail.service';
import { OrderList } from '../models/order-list';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss'],
  providers: [OrderDetailService]
})
export class OrderDetailComponent implements OnInit, AfterViewInit {

  orderId: number;
  orderItem: OrderList = new OrderList();
  public detailColumns: object[] = [];

  constructor(private service: OrderDetailService, private route: ActivatedRoute, private ref: ChangeDetectorRef) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      {
        this.orderId = params.id;
        this.getOrderById(params.id);
      });
  }

  ngAfterViewInit(): void {
    this.detailColumns = this.getDetailsColumns();
    this.ref.detectChanges();
  }

  getOrderById(orderId: number): void {
    this.service.getOrderById(orderId)
    .subscribe(response => {
      this.orderItem = response;
    });
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
