import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoresOnlineComponent } from './monitores-online.component';

describe('MonitoresOnlineComponent', () => {
  let component: MonitoresOnlineComponent;
  let fixture: ComponentFixture<MonitoresOnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoresOnlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoresOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
