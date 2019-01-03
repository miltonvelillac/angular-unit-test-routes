# Project Description
This is a little example how you can create unit test using jasmine and karma for test routes

You can see the examples in the register.component.spect.ts and login.component.spect.ts

I have created two buttoms, one in both components, each buttoms go to other component using router-outlet.

Login component has a function in the ts field for navigate to register
Register component calls to Login component from its own html with routerLink

Both cases are tested in the same way

- Run test with ng test, and run project with ng serve

#Spec fields
- first you can have the RouterTestingModule in the imports with the routes that you want to test, it is better to create a mock field for the routes (see mock-routes.ts) and load it.

- Second you should created an injector (const injector = getTestBed();) from getTestBed function.

-Third with the injector you shold the routes (const router = injector.get(Router);)

- Finally you can try if the current paht is the one you want (expect(router.url).toEqual('/login');)

- Note: Is important that you use fakeAsync and use the flush function before the expect
