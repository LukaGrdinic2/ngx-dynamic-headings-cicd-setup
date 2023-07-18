# NgxDynamicHeadings

A library to help you use dynamic headings in your angular app. 

A monorepo containing the library source code as well as a playground web app to test the lib behaviour.

## Development server

Run `npm run dev` to run a development server. This app is used as a playground to experiment with the **ngx-dynamic-heading** lib

## Dynamic headings lib docs

### Running unit tests

Run `npm run test` to execute the unit tests.

### Building the lib

`npm run build:ngx-dynamic-headings`

### Docs

Go to [ngx-dynamic-heading docs](/libs/ngx-dynamic-headings/README.md)

## Using Git

This project uses conventional commits, so make sure all commits adhere to conventional rules. Learn more at https://www.conventionalcommits.org/en/v1.0.0/

### VSC users

Make sure extension **conventional-commits** is installed.

Type <kbd>Ctrl</kbd> + <kbd>Shift</kbd> +<kbd>P</kbd> 

Then enter **conventional-commits** and then just answer the questions regarding your commit

## Publishing to NPM

### Library files

To publish to npm, submit a PR into **main** branch. 

In order to generate a release with semantic versioning, merged code must contain the type of changes: 

**fix** (fix release), 

**feat** (feature release) or

**BREAKING CHANGE:** in the commit footer (Breaking release)

TEST