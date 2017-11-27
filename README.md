# LeanerMean

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.3.

This project is based on this [Pluralsight](https://app.pluralsight.com/player?name=angular-2-getting-started-update-m7&clip=5&course=angular-2-getting-started-update&author=deborah-kurata) Course from Deborah Kurata called [Angular getting started](https://app.pluralsight.com/player?name=angular-2-getting-started-update-m7&clip=5&course=angular-2-getting-started-update&author=deborah-kurata) however it uses the tools at hand to create the same result, including some optimizations and building towards a full MEAN application to replace the initial lean-mean project.

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

## Chapter 7: Implementing filterPipe and convertPipe
1. switch back to master: `git status`, `git checkout master`, `git pull` [@see](https://confluence.atlassian.com/bitbucket/use-a-git-branch-to-merge-a-file-681902555.html)
2. added ngModel in `product-list.component.html`, `product-list.component.ts`, `app.module.ts` -> add `FormsModule` to `import` at top and `imports`-array
3. added pipe: `ng generate pipe convertToSpaces` -> add implementation of pipe, -> add pipe to template
4. added pipe: `ng generate pipe products/productFilter`-> [@see](https://angular.io/guide/pipes) (FlyingHeroesPipe) make sure to handle `listFilter === undefined`, add ` | productFilter:listFilter` to `*ngFor`

## Chapter 8: Nested component
1. `ng g component star` to create a new component
2. add template (html) and style (css) to component from APM example
3. add nested component to product-list
4. create branch to keep this version
5. 
## Chapter 9: Service
1. `ng g service products/product` to create a new service *in* the products folder
2. add providers array to decorator of ProductListComponent
3. move implementation of data to ProductService
4. implement dependancy injection in ProductListComponent of the service 
5. `git checkout -b 4.0.0_implemented_service`, `git push --set-upstream origin 4.0.0_implemented_service`
5. change back to master `git checkout master`, `git pull`

## Chapter 11: HTTP
1. add products.json in assets folder
2. add `import { HttpClientModule } from '@angular/common/http';` in `src/app/app.module` and in `imports: []`
2. remove static data from `src/app/products/product.service.ts` and let the `getProducts()` function return an Observable, returning this.http.get(), casted into `Iproduct[]`
3. let the ngOnInit subscribe to the getProducts() function in the service

## Chapter 12: Routing
1. copy home folder from APM folder, don't forget the images folder in assets
2. `ng g c products/product-detail --flat`
3. add routes to app.module.ts
4. remove outlets from components as we don't need it anymore
5. add the menu
6. add branche for reference `git checkout -b 12.0.0_routers`, `git push --set-upstream origin 12.0.0_routers`
7. to see what we've done in this chapter: `git diff 12.0.0_routers 4.0.0_implemented_service`

## Chapter 13: Guards
1. `ng g s products/product-guard -m app.module`
2. implement guard
3. add guard to router