# LeanerMean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Steps to build from scratch
1. `ng new leaner-mean` [@see](https://cli.angular.io/) (`npm install` runs automatically)
2. `ng add component ProductList`
3. copy css files, html files, api files from APM project [@see](https://github.com/adamip/DeborahK_Angular2_GettingStarted)
4. add ngx-bootstrap: `npm i bootstrap ngx-bootstap --save` + add css to `angular-cli.json` [@see](https://github.com/valor-software/ngx-bootstrap/blob/development/docs/getting-started/ng-cli.md)
5. update package.json script: `"start": "ng serve",` to `"start": "ng serve --host 0.0.0.0 --disable-host-check",` [@see](https://github.com/angular/angular-cli)
6. connect git: `git status`, `git commit -a -m "initial commit"`
7. [github.com](https://github.com/new) add a new project (don't init)
8. `git remote add origin https://github.com/rkristelijn/leaner-mean.git`
9. `git push -u origin master`
10. create a branch to keep this version: `git checkout -b 1.0.0_initial_working_copy`,`git status` to see you are on the branch
11. `git push --set-upstream origin 1.0.0_initial_working_copy`
12. on github create a pull request, and merge code into master using web 