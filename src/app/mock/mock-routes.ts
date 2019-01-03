import { Routes } from '@angular/router';
import { TestComponentRenderer } from '@angular/core/testing';

export const mockRoutes: Routes = [
    {
        path: 'login',
        component: TestComponentRenderer
    },
    {
        path: 'register',
        component: TestComponentRenderer
    }
];
