import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SzecesszioComponent } from './szecesszio.component';

describe('SzecesszioComponent', () => {
  let component: SzecesszioComponent;
  let fixture: ComponentFixture<SzecesszioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SzecesszioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SzecesszioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
