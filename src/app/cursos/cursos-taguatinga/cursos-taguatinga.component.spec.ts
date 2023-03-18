import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosTaguatingaComponent } from './cursos-taguatinga.component';

describe('CursosTaguatingaComponent', () => {
  let component: CursosTaguatingaComponent;
  let fixture: ComponentFixture<CursosTaguatingaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosTaguatingaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosTaguatingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
