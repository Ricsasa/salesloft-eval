# SalesLoft Evaluation

## Features

- Show list of people on SalesLoft API, with pagination and "Results per page" controls.
- Responsive design.
- Show frequency count of unique characters on email field per current page and for all the resources available on the API.
- Show possible duplicates using an implementation of the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) algorithm, both per current page and for all the resources available on the API.
---

## Stacks

### Backend:
- NodeJS
- ExpressGraphQL Server
- Jest and Chai for testing, code coverage and assertions

### Frontend:
- React v16.13 (Based on [CreateReactApp](https://github.com/facebook/create-react-app)), creating custom hooks. 
- [Apollo Client](https://www.apollographql.com/docs/react/) for GraphQL state management
- Jest and Enzyme for testing and rendering
---
## Running Project 
- Make sure you have Docker up and running.
- Add the env var for API Key with the command ```export API_KEY=<API_KEY>```.
- First time executions, run the command ```docker-compose build```.
- Command ```docker-compose up``` to start the project.
- Go to http://localhost:4000/graphl if you want to use the GraphiQL playground, or visit http://localhost:8081/ to review the Project.
---
## Test execution
- For frontend, ```cd``` to salesloft-frontend directory and run ```npm run test```
- For backend, ```cd``` to salesloft-backend directory and run ```npm run test```
---
## Improvement areas
- Increase Code Coverage.
- Deployment to a production server to get a live version of the project.
---
##### Made with 🖤 by Ricardo Sánchez S.
##### Feel free to ping me at [ricsasa201@gmail.com](mailto:ricsasa201@gmail.com) or in the Issues section of this repo
