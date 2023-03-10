import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroFormsComponent } from './hero-forms.component';

describe('HeroFormsComponent', () => {
  let component: HeroFormsComponent;
  let fixture: ComponentFixture<HeroFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
