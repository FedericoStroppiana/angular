import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDrinksComponent } from './print-drinks.component';

describe('PrintDrinksComponent', () => {
  let component: PrintDrinksComponent;
  let fixture: ComponentFixture<PrintDrinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDrinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
