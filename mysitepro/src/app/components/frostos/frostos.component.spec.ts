import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrostosComponent } from './frostos.component';

describe('FrostosComponent', () => {
  let component: FrostosComponent;
  let fixture: ComponentFixture<FrostosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrostosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrostosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
