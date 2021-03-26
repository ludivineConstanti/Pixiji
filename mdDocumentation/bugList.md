# Bug List

#### The square (child of the div in grid displayed) takes the entire width instead of taking the dimensions the CSS ask it to
=> I put the parent class name on the child as well, which made it have the grid settings as well  
=> Fixed by changing class

## The same dispatched action was executed multiple times (between 2 and 8)
=> Apparently, react components rendering multiple times is a common issue, which was, I believe, the origin of the problem, I read [an article](https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/) that said that strict mode makes every component render twice in dev mode (but I am currently not using strict mode), [an other one](https://medium.com/unsplash/react-redux-performance-considerations-when-dispatching-multiple-actions-5162047bf8a6) that said that React component re-render every time a new action is dispatched  
=> I originally created a value in my React component, then dispatched the value, and then reused the values that I just updated, from the props (I thought always using the values from the store might be more consistent, having only one source for all informations). I then tried using the value directly instead of recuperating it from the store and it solved the rerender issue.
