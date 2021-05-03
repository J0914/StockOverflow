### QUESTIONS

<!-- Front End -->

* A logged-in or logged-out user can see a list of all the questions

    * `GET /api/questions`


* A logged-in or logged-out user can click on a question thread to see the thread's contents

    * `GET /api/questions/:id`

*


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
