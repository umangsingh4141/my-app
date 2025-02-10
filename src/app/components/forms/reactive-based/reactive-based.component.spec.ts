import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBasedComponent } from './reactive-based.component';

describe('ReactiveBasedComponent', () => {
  let component: ReactiveBasedComponent;
  let fixture: ComponentFixture<ReactiveBasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveBasedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveBasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
