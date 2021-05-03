# API Documentation

## API Routes

This web app uses the following API routes to dynamically update the page to create a single-page-app-like feel for the user for specific features.

### QUESTIONS

* A logged-in user may delete one of their own Questions, removing it from the list of visible Questions without causing a refresh/redirect.

    * `DELETE /api/questions/:id`

* A logged-in user may edit one of their own Questions, changing its content without causing a refresh/redirect.

    * `DELETE /api/questions/:id`

### RESPONSES

* A logged-in user may delete one of their own Responses, removing it from the list of visible Responses for a specific Question without causing a refresh/redirect.

    * `DELETE /api/responses/:id`

* A logged-in user may edit one of their own Responses, changing its content without causing a refresh/redirect.

    * `PATCH /api/responses/:id`


### VOTES

* A logged-in user may vote on a Question, updating its score without causing a refresh/redirect.

    * `POST /api/questions/:id`

* A logged-in user may delete their previous vote on a Question, updating its score without causing a refresh/redirect.

    * `DELETE /api/questions/:id`

* A logged-in user may vote on a Response, updating its score without causing a refresh/redirect.

    * `POST /api/responses/:id`

* A logged-in user may delete their previous vote on a Response, updating its score without causing a refresh/redirect.

    * `DELETE /api/responses/:id`







# Frontend Routes

## User-Facing Routes

## `/login`

### Log-In Page

This page displays a log-in form.

* `GET /users/login`
* `POST /users/login`

## `/logout`

### Log-Out Page

This page displays a log-out confirmation.

* `GET /users/logout`

## `/signup`

### Sign-Up Page

This page displays a sign-up form.

* `GET /users/signup`
* `POST /users/signup`

## `/questions`

### Main Questions Page

This page displays a list of all the active questions.

* `GET /questions/`

## `/questions/ask`

### New Question Form

This page displays a form to create a new question

* `GET /questions/ask`
* `POST /questions/ask/submit`

## `/questions/:id/`

### Respond

This page displays a specific Question thread and its responses, and includes a form where users can submit a new response to the question.

* `GET /questions/:id/`
* `POST /questions/:id/response/submit`






* A logged-in or logged-out user can see a list of all the questions

    * `GET /api/questions`


* A logged-in or logged-out user can click on a question thread to see the thread's contents

    * `GET /api/questions/:id`







BACK END STUFF
delete a question
`DELETE /api/questions/:id`

edit a question
`DELETE /api/questions/:id`

delete a response (a div has an id corresponding to the response)
`DELETE /api/responses/:id` (is this right?)

edit a response
`PATCH /api/responses/:id` (it might need to be PUT?)

upvote/downvote on a question
`POST /api/questions/:id`
`DELETE /api/questions/:id`

upvote/downvote on a response
`POST /api/responses/:id`
`DELETE /api/questions/:id`


FRONT END STUFF
sign-up
`GET /users/signup`
`POST /users/signup`

log-in
`GET /users/login`
`POST /users/login`

log-out
`GET /users/logout`

create question
`GET /questions/`

respond to a question
`POST /questions/:id/response/submit`



/questions

    * shows all the questions

/questions/:id

    * shows a specific question

/users

    * shows all the users

/users/signup

    * signs up a new user
