# Yarno Demo Tool Exercise

## What is the demo tool?

We have a custom built demo tool that is used by Mark, our head of sales, when presenting Yarno to potential clients. The demo tool is set up so that Mark can easily customise it with images and questions relevant to the potential client.

It showcases examples of what it might be like for them to use the Yarno platform with their employees.

[Click here to view the existing demo tool](https://demo.yarno.com.au/woolworths-c80).

## What is our ultimate goal?

Rebuild our existing demo tool using React. As this is a demo tool, the functionality required is not full featured. For example, we do not need to authenticate a user, although we do want to simulate the login screen.

We would like the ability to display three questions with four possible answers, and have the app react to correct and incorrect selections.

For incorrect selections, we want to show a button with a link to the explanation.

We will need to show a Next Question button once a question has been answered.

## What is expected of you with this exercise?

You are not expected to complete this exercise in full. It is an opportunity for you to think about how you would approach building and styling this tool with React, discuss your approach with Paul, and develop as much of it as you can in the allotted period of time.

Do not be concerned with how much or little you are able to complete, there is much to do in a short period of time. Simply discuss your approach, work on what you are able to work on, and ask for help when you need it. Paul is there as a sounding board and to help you out.

## What is already done?

The app is set up as an empty shell. The router has been set up, with an empty login page. In the main Yarno app, we use Styled Components, a CSS in JS library. This has been set up in the app already and you can see how it is used by looking in `Login.js` and `styledComponents.js`.

## Where to begin?

Once you have cloned or downloaded the app, run `yarn` and then `yarn start`. Visit the app at http://localhost:3000/ and you should see a basic login page. Use Chrome developer tools to view this in a mobile orientation.

The login page is missing a login button. Start by building the login button (modelling it on what you see when visiting [the demo app login page](https://demo.yarno.com.au/woolworths-c80/)). You can choose to use Styled Components or style a `<button>` element by hand.

Steps:

- build the Login button
- create a question page that loads the first question and four possible answers
  - there is a `questions.js` file for you to use
- create a "show results" button that handles right or wrong answers
- show a "show explanation" button for incorret answers that somehow shows the explanation
- show a "Next Question" button that takes you to the next question
