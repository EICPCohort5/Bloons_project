# Bloons_project
Team Bloons game project

# Bloons
  - Adam Audet
  - Charlie Nathan
  - Christopher Gritter
  - Brianna Fahrenkopf
  - Maria Ringes
# Week 5 Project

## Activity

This week, we're going to build out a RESTful application from scratch. It doesn't have to look pretty, but it does have to involve the following:

- Source control
- Front-end
- Back-end
- Database
- Not the cloud, unless you go through stuff really fast

## Topic area

Games, obviously!

Model games, publishers, and platforms (more at the database slide)

## Source control

- Git strategy for your project
- Tests that run at check-in
  - At least one client-side
  - At least one server-side
- Host the entire project in one repo

## Front-end

- The browser
- JavaScript, CSS, HTML
- Use a library like Bootstrap if you'd like
- Fetch data from the server (use `fetch`, or Axios, or another library at your preference)

## Front-end, continued
- Required pages:
  - List resource
  - Including a filtering capability
  - Detail for a resource
  - Add a resource
- At least one client-side test that should run on check-in (GitHub actions)
  - package.json target for the above as well, so you can check the test without a superfluous check-in

## Back-end
- Server is Node.js running ExpressJS
- Use `express-generator` to set it up
  - Which is probably the basis for the file structure for your project!
- Assume ORM with Sequelize from the start
  - Other libraries as you see fit
- At least one server-side test that should run on check-in
  - package.json target for the above as well, so you can check the test without a superfluous check-in

## REST endpoint
- At least one resource
- For that resource
  - LIST one
  - LIST all
  - LIST all, filter
  - ADD a new resource
  - UPDATE that resource
  - Plan for DELETE
  - Note that UPDATE and DELETE do not have UIs. Just implement the server-side version
- Resource(s) get data from and send data to the database, below

## Database

- Database in mySQL
  - Include DDL so anyone can set up the database on their machine
  - Include seed SQL so that there's some starter data in the database
- Model
  - Games
  - Publishers
  - Platforms

## Data model

- `games` is the driving table
  - One-to-one relationship with a publisher
  - One-to-many relationship with platforms
- `publisher`
  - One-to-many relationship with games
  - No relationship with platforms
- `platforms`
  - No direct relationship with `games`
  - Instead, use a join/junction table
