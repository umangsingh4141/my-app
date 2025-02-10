import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartingComponent } from './carting.component';

describe('CartingComponent', () => {
  let component: CartingComponent;
  let fixture: ComponentFixture<CartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
