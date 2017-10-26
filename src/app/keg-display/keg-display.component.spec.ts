import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KegDisplayComponent } from './keg-display.component';

describe('KegDisplayComponent', () => {
  let component: KegDisplayComponent;
  let fixture: ComponentFixture<KegDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KegDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KegDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
