# Testing research ❌✔️

I made a list of goals that I have in mind for when writing testing, I found some of them in [this article](https://www.freecodecamp.org/news/testing-react-hooks/)

* Don't test the implementation details (Kent C dodds).  
Everything might change in a website, especially the way the code is written. The closest we are to testing the functionnality itself, and not the way it is implemented, the more it makes sense and the less likely we are to break the code when it is rewritten.
* Many integrations tests  
Elements should be tested the same way they are used, if the element work individually, it's a good start, but if it doesn't work on the page, as you wanted it to, it's a problem. Elements work together, a button might work when rendered alone and still not be clickable because its z-index is smaller than the other elements of the page.

In this article, I found a list of mistakes to avoid while making tests [this article](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

* Use ESLint plugins  
[eslint-plugin-testing-library](https://github.com/testing-library/eslint-plugin-testing-library)  
[eslint-plugin-jest-dom](https://github.com/testing-library/eslint-plugin-jest-dom)
* Unmount or cleanup the component after each test (otherwise one test will affect another test)
* It's strongly recommended to use jest-dom because the error messages you get with it are much better.  
=> Install and use [@testing-library/jest-dom](https://github.com/testing-library/jest-dom#tobedisabled)
* Use the right query
see => [which query should I use?](https://testing-library.com/docs/queries/about/#priority)
