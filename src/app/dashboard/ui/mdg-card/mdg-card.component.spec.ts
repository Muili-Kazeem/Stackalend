import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdgCardComponent } from './mdg-card.component';

describe('MdgCardComponent', () => {
  let component: MdgCardComponent;
  let fixture: ComponentFixture<MdgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MdgCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MdgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
