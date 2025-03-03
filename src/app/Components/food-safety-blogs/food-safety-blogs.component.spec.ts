import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSafetyBlogsComponent } from './food-safety-blogs.component';

describe('FoodSafetyBlogsComponent', () => {
  let component: FoodSafetyBlogsComponent;
  let fixture: ComponentFixture<FoodSafetyBlogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodSafetyBlogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSafetyBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
