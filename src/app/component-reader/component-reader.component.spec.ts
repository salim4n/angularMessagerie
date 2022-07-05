import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentReaderComponent } from './component-reader.component';

describe('ComponentReaderComponent', () => {
  let component: ComponentReaderComponent;
  let fixture: ComponentFixture<ComponentReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentReaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
