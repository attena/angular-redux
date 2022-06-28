import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijooComponent } from './hijo.component';

describe('HijoComponent', () => {
  let component: HijooComponent;
  let fixture: ComponentFixture<HijooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijooComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
