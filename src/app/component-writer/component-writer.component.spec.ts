import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWriterComponent } from './component-writer.component';

describe('ComponentWriterComponent', () => {
  let component: ComponentWriterComponent;
  let fixture: ComponentFixture<ComponentWriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWriterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
