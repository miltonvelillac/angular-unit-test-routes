import { async, ComponentFixture, TestBed, getTestBed, fakeAsync, flush } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { mockRoutes } from '../mock/mock-routes';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        RouterTestingModule.withRoutes(mockRoutes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('go to register', fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    const btn = fixture.nativeElement.querySelector('#btnRegisterId');
    btn.click();
    fixture.detectChanges();
    flush();
    expect(router.url).toEqual('/register');
  }));
});
