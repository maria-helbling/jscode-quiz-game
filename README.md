# Javascript Code Quiz

 A timed code quiz with multiple-choice questions. This app runs in the browser and feature dynamically updated HTML and CSS powered by JavaScript code. It is responsive, ensuring that it adapts to multiple screen sizes.
The [deployed page can be seen here](https://maria-helbling.github.io/jscode-quiz-game/).

## Contents

1. [About](#about)
2. [Setup](#setup)
3. [Credits](#credits)
4. [License](#license)
5. [Contributing](#contributing)

## About
Below is the user story and acceptance criteria used as the basisi for this development.

### User Story

```
AS A coding bootcamp student
I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
SO THAT I can gauge my progress compared to my peers
```

### Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```
### Completed product

The final project opens on an intro page outlining the rules.

![Intro page screenshot](intro.PNG)

After the user START's the quiz, the app cycles through 10 randomly selected questions with answer options.

![Question page screenshot](questions.PNG)

Once the quiz is completed, the user is redirected to the scores page. Once they enter their alias they can see progress in the ranked high-score table.

![High score page screenshot](highscore.PNG)

### Build

* In HTML semantic tags have been used to aid with accessibility as far as possible.
* The site is built using Bootstrap.
   * The use of Bootstrap minimises the need for media queries.
   * See [Bootstrap documentation](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for customising the site with their provided options
* The  dynamic functionality is built with javascript.
* The project utilises local storage for score tracking accross pages and sessions.

### Future plans

- [ ] Randomizing which answer options are displayed for each question

## Setup

To clone the repo:
```
git clone https://github.com/maria-helbling/jscode-quiz-game.git
``` 

## Credits

The starting music is from Who wants to be a Millionaire. As are two of the three Lifeline option ideas.

## License

Built by Maria Helbling
This application is released under [MIT](LICENSE.txt) license.

## Contributing

To contribute to this application, create a pull request.
Here are the steps needed for doing that:
- Fork the repo
- Create a feature branch (git checkout -b NAME-HERE)
- Commit your new feature (git commit -m 'Add some feature')
- Push your branch (git push)
- Create a new Pull Request

Following a code review, your feature will be merged.
