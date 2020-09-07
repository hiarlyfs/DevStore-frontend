DevStore: A store for developers.<br/>
Access [DevStore](https://devstore-frontend.vercel.app/) to use the application.

## Description

This is the frontend of [DevStore Backend](https://github.com/hiarlyfs/DevStore-backend)

## Tecnologies used

- [ReactJs](https://reactjs.org/docs/getting-started.html)
- [Material Ui](https://material-ui.com/getting-started/installation/)
- [ReduxJs](https://redux.js.org/introduction/getting-started)
- [Redux Saga](https://redux-saga.js.org/)
- [Firebase](https://firebase.google.com/docs)

## How to run?

. First install the dependencies:

```bash
$ yarn install
```

. Create the .env file in the root directory;<br/>
. Create an firebase project;<br/>
. In the .env set the:

- REACT_APP_API_URL='URL's api associated with this project (for more details see: [DevStore Backend](https://github.com/hiarlyfs/DevStore-backend)
  '
- REACT_APP_FIREBASE_API_KEY='The api key of the firebase project'
- REACT_APP_FIREBASE_PROJECT_ID='The id of the firebase project'

. Obs: All the value in the .env file is without the quotation marks: EX: REACT_APP_API_URL=http://localhost:3333<br/>

. At least, run yout project:

```bash
$ yarn start
```
