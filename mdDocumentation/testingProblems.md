# Testing - How to ❌

## Run the test

to run the test put

```
"test": "jest",
"test:watch": "npm test -- --watch"
```

in the scripts, in the package.json file (test to test once, test:watch to run on every file change)

## The key words test and so on that are provided by jest are underlined

=> This is linked to the esLint settings, need to modify it in .eslintrc by putting 
```
"env": {
    "jest/globals": true
  }
  ```
### Update n°1

It does work but esLint doesn't work for the normal components anymore. It does the same when adding ```èslint-plugin-jest``` or ```jest``` in the .eslintrc in the plugins setting
ex: 
```
  "plugins": ["testing-library", "jest-dom", "eslint-plugin-jest"],
```

## Jest gives `Cannot find module` when importing components with absolute paths

found the solution on [stack overflow](https://stackoverflow.com/questions/50863312/jest-gives-cannot-find-module-when-importing-components-with-absolute-paths)  
=> Needs to do the configuration of Jest individually (node doesn't know where to get the files from, if we don't tell it), can put   
```
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

## Could not find "store" in the context of "Connect(Quiz)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Quiz) in connect options.
As mentionned earlier need to reconfigurate everything so that it works with jest, if we want to use the store, need to put 
```
<Provider store={store}></Provider>
``` 
around the component
