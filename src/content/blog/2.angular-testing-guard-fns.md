---
title: 'Angular: Testing Guard Functions'
description: How to unit test Guard Functions in Angular.
date: '12.29.2022 20:00'
image: '/images/angular.svg'
---

## Angular: Testing Guard Functions

Recently the Angular Team added a new and handy way to define Route Guards in a functional way.

### Example CanActivateFn

Here is a simple CanActivateFn example:

```ts [auth.guard.ts]
export const authGuard: CanActivateFn = (route, state) => {
	const auth = inject(AuthService);
	return auth.isLoggedIn;
};
```

### Testing

As you can see from the example above we are not dealing with an Injectable and need to run need a way to execute our Function within a DI Context.

Luckily we grab an `EnvironmentInjector` from `TestBed` to run our function with all our Providers.

```ts [auth.guard.spec.ts]
describe('TourStausGuard', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [
				{
					provide: AuthService,
					useValue: { isLoggedIn: true },
				},
			],
		});
	});

	it('should allow accessing active tours', () => {
		const envInjector = TestBed.inject(EnvironmentInjector);
		envInjector.runInContext(() => {
			expect(guard(null, null)).toBe(true);
		});
	});
});
```
