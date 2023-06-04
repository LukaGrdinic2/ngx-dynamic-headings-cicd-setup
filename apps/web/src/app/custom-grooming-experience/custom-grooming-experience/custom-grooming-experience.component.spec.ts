import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomGroomingExperienceComponent } from './custom-grooming-experience.component';

describe('CustomGroomingExperienceComponent', () => {
  let component: CustomGroomingExperienceComponent;
  let fixture: ComponentFixture<CustomGroomingExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomGroomingExperienceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomGroomingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
