import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { ShipmentTrackingService } from '../../Services/shipment-tracking.service';
import { TableComponent } from '../table/table.component';
import { PricePipe } from '../../Pipes/price.pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-shipment-tracking',
  standalone: true,
  imports: [TableComponent],
  templateUrl: "./shipment-tracking.component.html"
})
export class ShipmentTrackingComponent implements OnInit {
  private service = inject(ShipmentTrackingService);
  private destroyRef = inject(DestroyRef);
  shipments: any[] = [];

  headers = [
    { key: 'id', label: 'Shipment ID', sticky: true },
    { key: 'shipperName', label: 'Shipper Name' },
    { key: 'phoneNo', label: 'Phone Number' },
    { key: 'status', label: 'Status' },
    { key: 'product', label: 'Product' },
    { key: 'supplier', label: 'Supplier' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'price', label: 'Price', pipe: PricePipe },
    { key: 'deliveryDate', label: 'Delivery Date', pipe: DatePipe },
    { key: 'track', label: 'Track' }
  ];

  filters = ['All', 'In-Transit', 'Completed', 'Pending', 'Failed'];

  ngOnInit() {
    this.service.fetchShipments().subscribe(data => (this.shipments = data));
  }
}
