# 🌸 Pixiji

This website helps you to train your kanjis (characters from the Japanese writing system) knowledge. But that's mainly an excuse to create interactive pixel art.

The ⚡⚡⚡ mdDocumentation folder ⚡⚡⚡ contains some observations made during the project (bugs, research...). Other observations are made in the code itself as comment.

This is a portfolio project, so some feature were created, just to make the website easier to go through:
* A cheating mode, that you can change in the menu, is on by default and change the answer's colors to show the right one.
* You can finish or restart the quiz just by clicking on one button (also in the menu).
* You have access to all the quizzes (no content is locked).

And some others are following the original concept of being a learning experience:
* The quiz is randomized, so each time you reload, you get different questions.
* It keeps track of the wrong answers, so it will keep asking the same question over and over until you answer correctly.
* The pixel art on the right (when you play the quiz) show you the answers again (and their translation), if you want to spend more time looking at them.
* The number of times you answered wrong is also indicated (the number of time you answered correctly is not, since it's always one).

## 🤓 Things I learned:
* Redux toolkit makes it easier to write code and in a more succinct way.
* Styled-Components can help you style your React components in JavaScript (I didn't know it existed).
* GSAP is great (I mainly used CSS animations before, which are much more limited, and started trying to do things on my own, with JavaScript before reading that GSAP could make that so much easier).
* Scaling is my friend (modifying height and width, instead of scale, can cause a lot of problems: it's more difficult to use unit like vw since GSAP only get units in px when it communicates with the browser, which can cause unexpected result when resizing, and unwanted bugs appeared when I modified the position so that it looks like the transformation point is in the center).
* GSAP is not perfect (I had a great amount of bugs along the way, which is mainly due, of course, to my lack of knowledge, but it helps to learn, and others that are unavoidable, I guess, like the fact that squares don't align perfectly if you modify their position with js, I think pure CSS is more beginner friendly).

## What I want to do better next time 👍
* Keep learning about how GSAP and React lifecycle works. Debugging always help you see if you understand how something work or not.
* Improve GSAP's animations.

## Things that I will do later ⏱️
* I just focused on the front end so far, I plan to do a phase 2 where I work on the back end (make login possible, lock the other quizzes, if you haven't done the 1st one, keep a track of the user's good or wrong answer to have a more personnalised experience...).
