import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondaryAddressComponent } from './secondary-address.component';

describe('SecondaryAddressComponent', () => {
  let component: SecondaryAddressComponent;
  let fixture: ComponentFixture<SecondaryAddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondaryAddressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondaryAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
