import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: AutoActionsComponent;
  let fixture: ComponentFixture<AutoActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoActionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
