import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimaryAddressComponent } from './primary-address.component';

describe('PrimaryAddressComponent', () => {
  let component: PrimaryAddressComponent;
  let fixture: ComponentFixture<PrimaryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimaryAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrimaryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
