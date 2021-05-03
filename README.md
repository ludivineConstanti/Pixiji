# 🌸 Pixiji

This website helps you to train your kanjis (characters from the Japanese writing system) knowledge. But that's mainly an excuse to create interactive pixel art.

![Homepage screenshot](https://user-images.githubusercontent.com/24965333/116855558-e27d4900-abf9-11eb-85e8-5defb196eb01.png)

The ⚡⚡⚡ mdDocumentation folder ⚡⚡⚡ contains some observations made during the project (bugs, research...). Other observations are made in the code itself as comment.

This is a portfolio project, so some feature were created, just to make the website easier to go through:
* A cheating mode, that you can change in the menu, is on by default and change the answer's colors to show the right one.
* You can finish or restart the quiz just by clicking on one button (also in the menu, but only visible when you are playing the quiz).
* You have access to all the quizzes (no content is locked).
* The error page is shown in the menu (I might as well make the access easier, since I made one).

And some others are following the original concept of being a learning experience:
* The quiz is randomized, so each time you reload, you get different questions.
* It keeps track of the wrong answers, so it will keep asking the same question over and over until you answer correctly.
* The pixel art on the right (when you play the quiz) show you the answers again (and their translation), if you want to spend more time looking at them.
* You can see japanese characters (and their prononciation + translation) on every page of the website (it reacts on hover).

## 🤓 Things I learned:
* Redux toolkit makes it easier to write code and in a more succinct way.
* Styled-Components can help you style your React components in JavaScript (I didn't know it existed).
* Animation libraries are great (I mainly used CSS animations before, which are much more limited, and started trying to do things on my own, with JavaScript before reading that GSAP could make that so much easier).
* It's better to use transform properties for animation (causes less bugs and is more performant).
* It's better to use a toolset that works well together: I used GSAP at the beginning of the project, because that was the main library that I heard of. Afterward, I learned about framer-motion and it made a lot of things less complicated and shorter to write (I needed to use hooks to keep the animation state in memory. ref to know which element to animate, and then my animation didn't properly update when a prop updated... framer motion made a lot of that easier).
* Using more libraries simplifies the code, but make it harder to find what you want (small documentation, small community, limited options...)
* Too much organisation is not necessarily good (I tried to organise my state in advance, without having any real reason to, and same thing for writing code again afterward, I was ready to rechange a lot of the structure, when it wasn't necessary).

## What I want to do better, for phase 2 👍
* Read about React's good practices and apply them (I started reading some, and there's a lot of things I could improve, especially for performance).
* Add testing (the great thing about changing a lot of things on a website, all the time, to add features, reorganise, or fix bugs, is that you realise pretty fast how easy it is to break things all over the place with every single change...).

## Things that I will do for phase 3 ⏱️
* I just focused on the front end so far, I plan to make a back end to add the usual features that come with a quiz (make login possible, lock the other quizzes, if you haven't done the 1st one, keep a track of the user's good or wrong answer to have a more personnalised experience...).

## And phase 4? 🤔
* I have more animations ect... that I wanted to add, but I will do everything that is more "bonus feature" later to practice things written above, that I spent less time doing until now.
* Make it possible to see the kanjis in their hover mode, on mobile and tablet (by clicking on it instead of hovering).
* Have the array of wrong answer update so that the ones that are answered wrong the most go to the top (at the moment every time you play at the quiz still pushes answers in the array but the first answers are the ones that are shown in the illustrations, and that doesn't update).
