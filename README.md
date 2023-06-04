# NgxDynamicHeadings

A library to help you use dynamic headings in your angular app. 

A monorepo containing the library source code as well as a playground web app to test the lib behaviour.

## Development server

Run `npm run dev` to run a development server. This app is used as a playground to experiment with the **ngx-dynamic-heading** lib

## Dynamic headings lib docs

### Running unit tests

Run `nx test ngx-dynamic-headings` to execute the unit tests.

### Building the lib

`nx build ngx-dynamic-headings`

### Publishing the lib

`cd /dist/libs/ngx-dynamic-headings`

`npm publish`

### Docs

Go to [ngx-dynamic-heading docs](/libs/ngx-dynamic-headings/README.md)

## To generate a component 

nx g @nrwl/angular:component section --path="apps/web/section" --project='web'