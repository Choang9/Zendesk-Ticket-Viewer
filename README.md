# Zendesk Ticket Viewer
<!-- ABOUT THE PROJECT -->

## About The Project
![image](https://user-images.githubusercontent.com/68668290/143797262-e1e22b90-5583-4fab-9c98-558fe5ba549b.png)

This application has the following requirements:

-   Connect to the Zendesk API

-   Request all the tickets for your account

-   Display them in a list

-   Display individual ticket details

-   Page through tickets when more than 25 are returned



## Built With

-   [Express.js](https://expressjs.com/)
-   [EJS.js](https://ejs.co/)
-   [JQuery](https://jquery.com)

## Tested With
-   [Jest](https://jestjs.io/)
-   [SuperTest](https://www.npmjs.com/package/supertest)


<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps:

1. Have Zendesk API Key
2. Clone the repo
3. Install NPM packages
    ```sh
    npm install
    ```
4. Enter your API and Email in `config.js`
    ```js
    const config = { API_KEY : 'ENTER YOUR API', EMAIL = 'ENTER YOUR EMAIL'};
    module.exports = config;
    ```
5. Run the project
    ```sh
    npm start
    ```
6. Go to http://localhost:3000/
7. Run tests
    ```sh
    npm run tests
    ```

## Contact

Chinh Hoang - choang@seattleu.edu
