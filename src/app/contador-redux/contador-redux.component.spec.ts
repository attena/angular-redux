import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorReduxComponent } from './contador-redux.component';

describe('ContadorReduxComponent', () => {
  let component: ContadorReduxComponent;
  let fixture: ComponentFixture<ContadorReduxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContadorReduxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorReduxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
