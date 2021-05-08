# Welcome to MyReads App

This Web App is a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Starting The App

Follow these steps to run the app successfully:

1. fork this repo.

2. after cloning, install everything:

   `cd` into your new folder and run:

```
npm install
```

3. Start-up the app by running:

```
npm start
```

## The App Features

- The search page has a search input field that get **auto-focused** when loaded.
- As the user types into the search field, books that match the query are displayed on the page, along with their titles and authors this is done by **using debounce by 0.6 sec from lodash library**.
- When a book does not have a thumbnail **a BookCover is created from its title**.
- **PropTypes** is used to validate props of each component.
