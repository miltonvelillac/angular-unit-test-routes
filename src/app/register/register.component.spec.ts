import { async, ComponentFixture, TestBed, fakeAsync, getTestBed, flush } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { RouterTestingModule } from '@angular/router/testing';
import { mockRoutes } from '../mock/mock-routes';
import { Router } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterComponent ],
      imports: [
        RouterTestingModule.withRoutes(mockRoutes)
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('go to register', fakeAsync(() => {
    const injector = getTestBed();
    const router = injector.get(Router);
    const btn = fixture.nativeElement.querySelector('#btnLoginId');
    btn.click();
    fixture.detectChanges();
    flush();
    expect(router.url).toEqual('/login');
  }));
});
