import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyGroomCatsComponent } from './why-groom-cats.component';

describe('WhyGroomCatsComponent', () => {
  let component: WhyGroomCatsComponent;
  let fixture: ComponentFixture<WhyGroomCatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WhyGroomCatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyGroomCatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
