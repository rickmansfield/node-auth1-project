# Introduction to Authentication Module Project

## Introduction

Use `Node.js`, `Express` and `Knex` to build an API that provides register, login and logout functionality.

## Instructions

### Task 1: Project Setup and Submission

Your assignment page on Canvas should contain instructions for submitting this project. If you are still unsure, reach out to Lambda Staff.

### Task 2: Minimum Viable Product

#### 2A - Database Access Functions

Write the following user access functions inside `api/users/users-model.js`:

- [ ] `find`
- [ ] `findBy`
- [ ] `findById`
- [ ] `add`

#### 2B - Middleware Functions

Write the following auth middlewares inside `api/auth/auth-middleware.js`:

- [ ] `restricted`
- [ ] `checkUsernameFree`
- [ ] `checkPasswordLength`
- [ ] `checkUsernameExists`

#### 2C - Endpoints

Authentication will be tracked using sessions and cookies. See `api/server.js` for more instructions.

Write the following endpoints. The first one belongs inside `api/users/users-router.js` and the rest inside `api/auth/auth-router.js`:

- [ ] `[GET] /api/users`
- [ ] `[POST] /api/auth/register`
- [ ] `[POST] /api/auth/login`
- [ ] `[GET] /api/auth/logout`

#### Users Schema

The database `auth.db3` includes a single `users` table:

| field    | data type        | metadata                                      |
| :------- | :--------------- | :-------------------------------------------- |
| user_id  | unsigned integer | primary key, auto-increments, generated by db |
| username | string           | required, unique                              |
| password | string           | required                                      |

#### Notes

- Run tests locally executing `npm test`.
- The project comes with `migrate`, `rollback` and `seed` scripts in case you need to reset the database.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries or add extra scripts. Do not update existing libraries.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work.
- Perform basic professional polishing including spell-checking and grammar-checking on your work.

### Task 3: Stretch Goals

- Build a React application that implements components to register, login and view a list of users. Gotta keep sharpening your React skills.


## Steps

1. check package.json
   1. npm i bcrptjs
   2. npm i express-session
2. review eslint rules
3. Stubb Server to Routers
   1. Remember to import/export top/bottom
   2. exmample stubb
```javascript
    router.post('/register', (req, res, next)=>{
    res.json('register');
    });
```
4. pull into server.js
5. test in httpie
6. Stubb out middlewares
   1. remember to import/exprot
   2. example stubb
```javascript
function restricted(req, res, next) {
  console.log('restricted middlware working');
  next();
}
```
7. import "restricted in the users-router and 
8. pull into server
9. test in httpie and look for console.log
10. Build out Models
11. finalize routers now that middlware is done
    1.  if you use try catch and use a method with a promise be sure to use async/await
12. Building out auth-middleware except for "restricted." 
    1.  First go to auth.router and pull methods from auth-middleware & test 
```json
http post :5000/api/auth/register

http :5000/api/users

http :5000/api/users

http post :5000/api/auth/login

http :5000/api/auth/logout
```
  2.  Pull models into middlware
  3.  