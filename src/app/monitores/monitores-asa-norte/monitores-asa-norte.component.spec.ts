import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoresAsaNorteComponent } from './monitores-asa-norte.component';

describe('MonitoresAsaNorteComponent', () => {
  let component: MonitoresAsaNorteComponent;
  let fixture: ComponentFixture<MonitoresAsaNorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoresAsaNorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoresAsaNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
