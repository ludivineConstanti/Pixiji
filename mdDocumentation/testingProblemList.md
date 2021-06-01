# Testing - How to + issues ❌

## Run the test

to run the test put

```json
"test": "jest",
"test:watch": "npm test -- --watch"
```

in the scripts, in the package.json file (test to test once, test:watch to run on every file change)

## The key words test and so on that are provided by jest are underlined

=> This is linked to the esLint settings, need to modify it in .eslintrc by putting

```json
"env": {
    "jest/globals": true
  }
  ```

### Update n°1

It does work but esLint doesn't work for the normal components anymore. It does the same when adding ```èslint-plugin-jest``` or ```jest``` in the .eslintrc in the plugins setting
ex:

```json
  "plugins": ["testing-library", "jest-dom", "eslint-plugin-jest"],
```

## Jest gives `Cannot find module` when importing components with absolute paths

found the solution on [stack overflow](https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths)  
=> Needs to do the configuration of Jest individually (node doesn't know where to get the files from, if we don't tell it), can put  

```json
"jest": {
  "roots": [
    "<rootDir>"
  ],
  "modulePaths": [
    "<rootDir>"
  ],
  "moduleDirectories": [
    "node_modules"
  ],
}
```

in package.json or can do a jest configuration file

## Could not find "store" in the context of "Connect(Quiz)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Quiz) in connect options

As mentionned earlier need to reconfigurate everything so that it works with jest, if we want to use the store, need to put

```xml
<Provider store={store}></Provider>
```

around the component

## screen.debug() does not print all elements

```screen.debug()``` has a limit, by default, for the quantity of elements it can console.log(). We can override that by using ```screen.debug(null, Infinity)```

## How to select components we want to test

The official recommendation for selecting elements we want to test is:

1. By role
2. By label text
3. By text  
4. By test id

### Challenge with the role

=> I wasn't sure how to know what role an element has, and what is its accessible name, but now I know that you can just look into the Accessibility tab while inspecting an element. I also thought it's not the best because many elements can have the same role (button...) but it can be complementary with the label text

```JavaScript
getByRole('image', { name: 'fancy image' })
```

### Challenge with label text

=> There are some informations that I need to test that are not necessarily meant to be seen by the user (what is the right or wrong answer from the quiz).

### Challenge with the text content

=> the text content changes a lot and is sometimes assigned randomly (question, answer for quizzes...)  
=> Selecting by text selects the element that contains the text (so it can be bad, if I want to interact with a button that has various divs imbricated in it).

I therefore decided to use a mix between various query methods.

## Jest is complaining that it can not find an element, when we are checking to make sure that it does not exist

=> getBy always throw an error if no element is found (or if more than one element is found), can use queryBy instead:

```javascript
expect(screen.queryByText(/next/i)).toBeNull();
```

## The code is pretty long

=> Every time I test something, I use a query and a reference and then the assertion, which leads to a very long line of code  

```Javascript
expect(screen.getAllByLabelText(lQuiz.progressSquarelength).toEqual(screen.getAllByLabelText(lIllmainSquare).length);
```

=> Difficult to read + if I decide to change the way I select something later, I'll have to modify it everywhere  
=> I found [this article](https://kentcdodds.com/blog/test-isolation-with-react) that shows how to reuse the same setup for tests

## Update n°1

It works well, until I try to change state. Since I select the elements just after rendering the component, it always return them in this state. Therefore, it looks like nothing is updating when I interact with the elements (click on next button...), because I am still testing things on the elements on their initial state.

```javascript
let ref;

beforeEach(() => {
  render(<Provider store={store}><Quiz currentQuiz={dataQuiz[0]} /></Provider>);
  ref = {
    question: screen.getByLabelText('question'),
    nextButton: screen.queryByText(/next/i)
  }
});
```

=> I could do the same thing as mentionned in the article above (one function per state and triggers the function before each test), but I liked the idea of defining the selectors all in one place, and not multiple times.  
=> I decided to make a function that returns the state individually, and call it whenever I need it.

## Update n°2

There's one potential problem that if I have ask for an element that is not there, it breaks all the tests (I always keep the same references, and jest run the query for all those references every time, in my code, currently).  

```javascript
const returnRef = () => {
  return {
    title: screen.getByText(/Quiz/i),
    question: screen.getByText(/Which character means/i),
    buttonNext: screen.queryByLabelText('next'),
    arrProgressSquare: screen.getAllByLabelText(lQuiz.progressSquare),
    arrButtonKanji: screen.getAllByLabelText(lQuiz.buttonKanji),
  }
}
```

So if I make a mistake there, it breaks everything and if I use this, once I answered all the questions of the quiz, currently, it will break, because question should not be there anymore, same as arrProgressSquare and arrButtonKanji ect...

## Get different results when they should be equal

I saved the first state of a component (text content of the question) from one test (initial state, when the component just rendered), and the second from an other test (after the user clicks on an answer). The problem is that the text of a question is generated randomly, so it doesn't work if I take the value from 2 different tests because the Quiz component is rendered anew with every test, and the question randomly choosen again.

## Jest is complaining that there's 2 elements, where there should be only one

=> I didn't set up my functions properly, it always rendered the component, which works when I only want to test one state, but renders the component various times if I use various states inside of the same test (initial state, then click button...).  

=> I therefore decomposed my functions into smaller ones that I call step by step.

## Testing animations

The visual side of this website is quite important (in my opinion) which is why I want to test it as well. However, to stay flexible on the type of animation / visual changes, I decided to test for changes instead of testing for precise characteristics.  

The first problem I got, is that the css is identical, even though it should not be. I think there can be 2 potential reasons for this: 1. Things work differently in the testing environment since it uses node and not the browser 2. tests happen immediately, which means that the css does not have time to change. I tried again with a setTimeout but, by the time it gets executed, the clean up already happened, and the elements I want to test do not exist anymore.

I didn't find much documentation on the subject just [this article](https://www.hectane.com/blog/mock-framer-motion-with-jest) and [that one](https://dev.to/tmikeschu/mocking-framer-motion-v4-19go) that are talking about mocking the animation library, but do not explain much, about the how and why they are doing it.

Then I found [this article](https://benjaminjohnson.me/blog/testing-animations-in-react-native) which does not use framer motion, but is a lot more helpful and confirms that, as I suspected, testing animations directly doesn't work because they don't have time to be executed.

## Tests for the quizSlice work when done individually, but not one after another

I think jest clean up things, when you render a component, but does not reset the state, (at least if you do not render anything). I had now reset the state with an ```afterEach(() => {})``` and now it works.
