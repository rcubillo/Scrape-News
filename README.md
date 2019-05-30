# :page_with_curl: Scrape News :page_with_curl:

[![IMAGE ALT TEXT HERE](public/img/logo.png)](https://youtu.be/RrBuQYUD4co)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

### Overview

This is a web app that lets users view and leave comments on the latest news. Using Mongoose and Cheerio to scrape news from another site.

### Technologies

- npm packages 
```sh
   1. express
   2. mongoose
   3. cheerio
   4. axios
```

## Live Demo

[![Deploy](https://pacific-lake-15233.herokuapp.com/)


- This project has been deployed to Heroku.

- This code should connect mongoose to your remote mongolab database if deployed, but otherwise will connect to the local mongoHeadlines database on your computer.

## Instructions

  1. Whenever a user visits this site, the app should scrape stories from a news outlet of your choice and display them for the user. Each scraped article should be saved to the application database. The app should scrape and display the following information for each article:
  ```sh

     * Headline - the title of the article

     * Summary - a short summary of the article

     * URL - the url to the original article

     * Feel free to add more content to your database (photos, bylines, and so on).
```     

  2. Users should also be able to leave comments on the articles displayed and revisit them later. The comments should be saved to the database as well and associated with their articles. Users should also be able to delete comments left on articles. All stored comments should be visible to every user.
  
  ## Contributing Guidelines

All contributions and suggestions are welcome! For direct contributions, please fork the repository and file a pull request.

## Contact

Full-stack Web Software Developer
   
 * :email: E-mail: ronaldcubillo92@gmail.com
 * [Twitter](https://twitter.com/rcubillo92)
 * [LinkedIn](https://linkedin.com/in/ronald-cubillo/)


