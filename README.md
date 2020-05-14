# package-ts

A JavaScript boilerplate for building Node packages.

## Setup

Clone the project with `git clone --dissociate <THIS PROJECT GIT URI> <YOUR PROJECT NAME>`;

### **Required** overrides:

You **must**...

1. update `author`, `name` and `version` in `package.json`.
2. delete or replace demo files: `rm src/index.ts src/simple-math.ts src/__tests__/simple-math.test.ts`.
3. rewrite this `README.md`;

### **Optional** overrides:

You might want to...

- set the `license` field (default is `UNLICENSED`). You may also include a `LICENSE` file on the root folder.
- set the `publishConfig.access`to `public` if your package is not meant to be published as a private package.
- set the `private` field to `false` in order to publish the package.
- set the `repository` field.
- remove the `test` command along with the `jest` dependency if your project is not meant to include automated tests.
- run `yarn upgrade` to generate a fresh `yarn.lock`.

In addition to `package.json`, you might also want to check...

- the `.npmignore` file for the files that will be ignored on publishing.
- the test runner options on the `jest.config.js` file.
- the linter rules in the `eslintrc.yml` file.
- the general editor configuration on the `.editorconfig` file.

## Todo:

- [ ] Add and configure semantic-release.
