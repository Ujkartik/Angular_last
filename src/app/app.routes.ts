import { Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FoodSafetyBlogsComponent } from './Components/food-safety-blogs/food-safety-blogs.component';
import { ShipmentTrackingComponent } from './Components/shipment-tracking/shipment-tracking.component';
import { StockManagementComponent } from './Components/stock-management/stock-management.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Default route
  { path: 'dashboard', component: DashboardComponent },
  { path: 'blogs', component: FoodSafetyBlogsComponent },
  { path: 'shipment-tracking', component: ShipmentTrackingComponent },
  { path: 'stock-management', component: StockManagementComponent },
//   { path: '**', component: NotFoundComponent } // Handle unknown routes
];
