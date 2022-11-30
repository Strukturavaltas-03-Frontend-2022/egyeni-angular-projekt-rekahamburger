import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KaracsonyComponent } from './karacsony.component';

describe('KaracsonyComponent', () => {
  let component: KaracsonyComponent;
  let fixture: ComponentFixture<KaracsonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KaracsonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KaracsonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
