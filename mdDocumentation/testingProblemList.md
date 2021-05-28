# Testing - How to ❌

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

screen.debug() has a limit, by default, for the quantity of elements it can console.log(). We can override that by using screen.debug(null, Infinity)

## How to select components we want to test

The official recommendation for selecting elements we want to test is:

1. By role
2. By label text
3. By placeholder text
4. By text  

### Challenge with the role

=> there can be multiple elements with the same role (buttons...) and if not, it's not very flexible if we want to add some later.

### Challenge with the text content

=> the text content changes a lot and is sometimes assigned randomly (question, answer for quizzes...)  
=> It's not possible to select by text if the text is inside children components (unless you go throught the children, but there's no utility, out of the box, to my knowledge)

I decided to use label text, when I can not use text, because I find it to be quite flexible. Also, I keep it in a separate file to be able to edit it all at once, if I want to improve its text later.

## Jest is complaining that it can not find an element, when we are checking to make sure that it does not exist

=> getBy always throw an error if no element is found (or if more than one element is found), can use queryBy instead:

```javascript
expect(screen.queryByText(/next/i)).toBeNull();
```

## The code is pretty long

=> Every time I test something, I use a query and a reference and then the assertion, which leads to a very long line of code  
=> Difficult to read + if I decide to change the way I select something later, I'll have to modify it everywhere  
=> I found [this article](https://kentcdodds.com/blog/test-isolation-with-react) that shows how to reuse the same setup for tests

## Update n°1

It works well, until I try to change state. Since I select the elements just after rendering the component, it always return them in this state. Therefore, it looks like nothing is updating when I interact with the elements (click on next button...), because I am still testing things on the elements on their initial state.  
=> I could do the same thing as mentionned in the article above (one function per state and triggers the function before each test), but I liked the idea of defining the selectors all in one place, and not multiple times.  
=> I decided to make a function that returns the state individually, and call it whenever I need it.

## Different results when it should be equal

I saved the first state of a component (text content of the question) from one test (initial state, when the component just rendered), and the second from an other test (after the user clicks on an answer). The problem is that the text of a question is generated randomly, so it doesn't work if I take the value from 2 different tests because the Quiz component is rendered anew with every test, and the question randomly choosen again.

## Jest is complaining that there's 2 elements, where there should be only one

=> I didn't set up my functions properly, it always rendered the component, which works when I only want to test one state, but renders the component various times if I use various states inside of the same test (initial state, then click button...).  

=> I therefore decomposed my functions into smaller ones that I call step by step.
