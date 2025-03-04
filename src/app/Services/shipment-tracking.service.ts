import { Injectable, inject, DestroyRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, takeUntil, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShipmentTrackingService {
  private http = inject(HttpClient);
  private destroyRef = new Subject<void>();

  fetchShipments(): Observable<any[]> {
    return this.http.get<any[]>('assets/shipments.json').pipe(takeUntil(this.destroyRef));
  }

  ngOnDestroy() {
    this.destroyRef.next();
    this.destroyRef.complete();
  }
}
