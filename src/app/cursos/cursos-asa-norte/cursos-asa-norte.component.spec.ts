import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosAsaNorteComponent } from './cursos-asa-norte.component';

describe('CursosAsaNorteComponent', () => {
  let component: CursosAsaNorteComponent;
  let fixture: ComponentFixture<CursosAsaNorteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosAsaNorteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosAsaNorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
