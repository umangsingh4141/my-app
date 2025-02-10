import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempelateBasedComponent } from './tempelate-based.component';

describe('TempelateBasedComponent', () => {
  let component: TempelateBasedComponent;
  let fixture: ComponentFixture<TempelateBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempelateBasedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempelateBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
