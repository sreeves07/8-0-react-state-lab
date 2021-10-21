# Pursuit-Core-Web-React-State-Lab

[![Pursuit Logo](https://avatars1.githubusercontent.com/u/5825944?s=200&v=4)](https://pursuit.org)

Build a simple clicker game. It should have the following requirements:

- Display the current score to the user, starting from a score of `0`
  - Use the _exact_ text: `Current Score: ` followed by the score.
- Clicking a button increments the score by one
  - The button text should have the _exact_ text: `+1`
- Have a button where the user can spend `10` points to increase the value of each click by `1`
  - The button should have the _exact_ text: `Pay 10 points to change from +1 to +2`
  - Display an `alert` with the _exact_ text `You can't afford that!` if the user doesn't have enough points to spend
  - If the user has enough points, reduce the score by 10, and add `1` to points you add to your score each time you click the button.
  - The button text should change as well, for example from `+1` to `+2`
  - The pay button text should also update, for example from `Pay 10 points to change from +1 to +2` to `Pay 10 points to change from +2 to +3`
- When the user has `100` or more points, display a victory screen
  - There should be an `<h2>` element with the _exact_ text `You Win!`
  - There should be a button with the text `Play again?` (including the question mark)
    - Clicking on this button starts the game over again with a score of 0, a `+1` button, etc.
  - Keep the user's score on the screen
  - Do not show the buttons to add to the score or pay points.

![clickerGame](./clickerGame.gif)

## Getting Started

- Fork this repo
- Clone the forked repository
- `cd` to the directory where you cloned it
- `npm install` to install dependencies
- `npm run cypress` to open the cypress testing window
- `npm test` to run jest / node tests

> _Note_: Remember to `git add`, `git commit` and `git push` regularly

## Submission Guidelines

- When finished, commit and push your work.
- Make a pull request on github.
- Submit the link to your pull request on Canvas.

[Additional instructions]
