import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoresTaguatingaComponent } from './monitores-taguatinga.component';

describe('MonitoresTaguatingaComponent', () => {
  let component: MonitoresTaguatingaComponent;
  let fixture: ComponentFixture<MonitoresTaguatingaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitoresTaguatingaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoresTaguatingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
