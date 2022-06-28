import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NietooComponent } from './nieto.component';

describe('NiertoComponent', () => {
  let component: NietooComponent;
  let fixture: ComponentFixture<NietooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NietooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NietooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
