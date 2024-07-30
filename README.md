# Search Packages

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). This project provides a way to search modules or packages. The User Interface is powered by [ANTD](https://ant.design/)

## Demo


https://github.com/user-attachments/assets/f5b7e7cc-68ab-4e3b-b6ff-661d3b45e73b



## Specifications 

Please write a responsive website, which mimics the behaviour of https://bower.io/search/. The application should be programmed using TypeScript and React. 

**Layout**

The site should have a header section, a left sidebar, a footer and a content area. The content area should show a list of modules with their **name, owner & stars.**

**Pagination & Sorting**

The list of modules should be at least [sortable by stars](https://libraries.io/api#project-search). It is important that the list is paginated with a numberical page selection. Only **5 items** per page should be shown. It should also be possible to search for a specific module.

**API**

Use the Libraries.io API to query for modules (Example: https://libraries.io/api/search?q=grunt&api_key=YOUR_API_KEY). It will return you all the data which you need to display.

## Observability and Monitoring
All the failures are captured through sentry where alerts are configured.

## Pre-Commit
There is a pre-commit hook installed via `husky` that runs linter and all the tests.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn format`

Formats the code using prettier

### `yarn switchToRecommendedVersion`

Switched to recommended version specified repo admin 


## Next steps
- [ ] The page is rendered on the client side , ideally we can move this to server side for better load time and better SEO access.
- [ ] Add lint-staged so that prettier changes can be staged on pre-commit hook
- [ ] Add an e2e test to capture the journey using cypress so that we can also test e2e journey
- [ ] The bundle size is relatively small but if it tends to grow then we can add code splitting
- [ ] Add a PR template to project so that each pull request has a template.
- [ ] Make main branch as protected
- [ ] Setup CI CD for the project
