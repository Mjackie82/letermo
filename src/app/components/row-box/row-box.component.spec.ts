import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowBoxComponent } from './row-box.component';

describe('RowBoxComponent', () => {
  let component: RowBoxComponent;
  let fixture: ComponentFixture<RowBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RowBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
