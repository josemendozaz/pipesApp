import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotCommonsComponent } from './not-commons.component';

describe('NotCommonsComponent', () => {
  let component: NotCommonsComponent;
  let fixture: ComponentFixture<NotCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
