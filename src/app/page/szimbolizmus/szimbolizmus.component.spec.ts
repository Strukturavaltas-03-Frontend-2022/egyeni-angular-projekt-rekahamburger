import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzimbolizmusComponent } from './szimbolizmus.component';

describe('SzimbolizmusComponent', () => {
  let component: SzimbolizmusComponent;
  let fixture: ComponentFixture<SzimbolizmusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzimbolizmusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzimbolizmusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
