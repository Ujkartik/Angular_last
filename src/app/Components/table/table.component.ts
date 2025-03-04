import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, RouterModule],
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.css"]
})
export class TableComponent {
  @Input() headers!: { key: string; label: string; sticky?: boolean }[];
  @Input() data!: any[];
  @Input() filters!: string[];
  filteredData!: any[];
  selectedFilter: string | null = null;

  ngOnInit() {
    this.filteredData = this.data;
  }

  applyFilter(filter: string) {
    this.selectedFilter = filter;
    this.filteredData = filter === 'All' ? this.data : this.data.filter(item => item.status === filter);
  }
  get displayedColumns(): string[] {
    return this.headers.map(h => h.key);
  }
}
