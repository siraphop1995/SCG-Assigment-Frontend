# scg-assigment-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### To deploy to Heroku
```
copy file from dist_example into dist
git commit
npm run deploy
```

open app at `https://guarded-shelf-96870.herokuapp.com/`

###Feature
1)  Main page will pull JSON data from backend

2)  Can go to next page (up to 3). Show 20 results per page.

3)  If query too much data in quick succession, google api will return error which the app will handle the error and display error message on screen

4)  App will save query result before going to next page.

5)  /about will show CV

Heroku: `https://guarded-shelf-96870.herokuapp.com/`