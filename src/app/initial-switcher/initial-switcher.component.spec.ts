import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialSwitcherComponent } from './initial-switcher.component';

describe('InitialSwitcherComponent', () => {
  let component: InitialSwitcherComponent;
  let fixture: ComponentFixture<InitialSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InitialSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InitialSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
