import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLoguinComponent } from './home-login.component';

describe('HomeLoguinComponent', () => {
  let component: HomeLoguinComponent;
  let fixture: ComponentFixture<HomeLoguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLoguinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
