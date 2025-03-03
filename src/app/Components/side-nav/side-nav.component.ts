import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  collapsed = false;

  navItems = [
    { icon: 'dashboard', label: 'Dashboard', route: '/dashboard' },
    { icon: 'inventory_2', label: 'Stocks Management', route: '/stock-management' },
    { icon: 'local_shipping', label: 'Shipment Tracking', route: '/shipment-tracking' },
    { icon: 'assessment', label: 'Reports & Analytics', route: ''},
    { icon: 'people', label: 'Customer Management', route: ''},
    { icon: 'article', label: 'Food Safety Blogs', route: '/blogs' },
    { icon: 'settings', label: 'Settings', route: '' },
    { icon: 'account_circle', label: 'My Account', route: '' },
    { icon: 'help', label: 'Help & Support', route: '' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.collapsed = this.router.url !== '/dashboard';

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.collapsed = event.url !== '/dashboard';
      }
    });
  }

  toggleSideNav(): void {
    this.collapsed = !this.collapsed;
  }
}
