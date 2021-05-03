# User Stories

## Users

### Sign Up

* As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
  * When I'm on the `/signup` page:
    * I would like to be able to enter my email, username, and preferred password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the sign-up form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the sign-up form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
    * So that I can try again without needing to refill forms I entered valid data into.

### Log in

* As a registered and unauthorized user, I want to be able to log in to the website via a log-in form.
  * When I'm on the `/login` page:
    * I would like to be able to enter my email and password on a clearly laid out form.
    * I would like the website to log me in upon successful completion of the log-in form.
      * So that I can seamlessly access the site's functionality
  * When I enter invalid data on the log-in form:
    * I would like the website to inform me of the validations I failed to pass, and repopulate the form with my valid entries (except my password).
      * So that I can try again without needing to refill forms I entered valid data into.

### Log Out

* As a logged in user, I want to log out via an easy to find log out button on the navigation bar.
  * While on any page of the site:
    * I can log out of my account and be redirected to a page displaying recent question threads.
      * So that I can easily log out to keep my information secure.

### Demo User

* As an unregistered and unauthorized user, I can see question threads with responses by users.
  * When I'm on either the `/signup` or `/login` pages:
    * I can click on the Demo User button to log me in, which gives me increased accessibility to the site.
      * So that
  * When I use the search feature, I can query the website to find question threads and answers that are related to my question.

## Questions and Responses

### Ask a Question and Start a Question Thread

* As a logged-in user, I want to be able to ask a question on Stock Overflow.
  * When I'm on the `/new-question` page:
    * I can write and submit a new Question
      * So that it will create a new thread where I can seek answers from other users.

### Viewing Question Threads and Responses

* As a logged-in or logged-out user, I want to be able to view all Question threads and see their associated Responses
  * When I'm on the `/questions` page:
    * I can view 15 Questions at a time.
      * So that I can follow their links to their associated Threads
* As a logged-in or logged-out user, I want to be able to view a specific Question Thread and its associated responses and upvotes/
  * When I'm on the `/questions/:id` page:
    * I can view all responses to a specific question.
* As a logged-in user, I can upvote or downvote Responses in Question threads
  * When I'm on the `/questions/:id` page:
    * I can upvote or downvote a specific Question
    * I can upvote or downvote Responses
    * I can Respond to the specific Question
    <!-- * I can Respond to other Responses -->

<!-- ### Some Details about Responses
*  -->

## Search

* As a logged-in or logged-out user, I want to be able to use the search bar to locate information related to a specific tag or topic
  * When I'm viewing search results:
    * I can utilize a drop-bar to sort results by age or number of votes

## Upvotes and Downvotes

* As a logged-in user, I want to be able to upvote or downvote Questions
  * When I upvote or downvote:
    * I can see the vote score update
    * I can see how the updated vote score affects the order of the question threads as they appear on the page
<!-- * As a logged-in user, I want to be able to upvote or downvote Responses in Question threads
  * When I upvote or downvote:
    * I can see the vote score update
    * I can see how the updated vote score affects the order of the Responses in the specific Question thread as they appear on the page -->
