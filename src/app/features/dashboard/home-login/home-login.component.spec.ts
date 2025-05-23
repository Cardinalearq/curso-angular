import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HomeLoginComponent } from './home-login.component';
import { StoreModule } from '@ngrx/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

fdescribe('HomeLoguinComponent', () => {
  let component: HomeLoginComponent;
  let fixture: ComponentFixture<HomeLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeLoginComponent, SidebarComponent],
      imports: [StoreModule.forRoot({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],    
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
