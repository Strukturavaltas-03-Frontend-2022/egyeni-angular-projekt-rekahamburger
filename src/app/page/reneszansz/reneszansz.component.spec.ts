import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReneszanszComponent } from './reneszansz.component';

describe('ReneszanszComponent', () => {
  let component: ReneszanszComponent;
  let fixture: ComponentFixture<ReneszanszComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReneszanszComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReneszanszComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
