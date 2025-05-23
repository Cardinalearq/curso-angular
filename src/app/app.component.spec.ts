import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './features/dashboard/navbar/navbar.component';
import { HeaderComponent } from './features/dashboard/header/header.component';
import { FooterComponent } from './features/dashboard/footer/footer.component';

fdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,           // Mejor para tests que RouterModule
        StoreModule.forRoot({}),       // Importa StoreModule sin reducers para proveer Store
        BrowserAnimationsModule        // Si usás Angular Material
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        HeaderComponent,
        FooterComponent
      ],
    }).compileComponents();
  });

  it('deberia crear la app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`titulo deberia ser curso-angular`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('curso-angular');
  });

  it('debería renderizar el titulo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Universidad de Buenos Aires');
  });
});

