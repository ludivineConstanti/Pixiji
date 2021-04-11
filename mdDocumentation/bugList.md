# Bug List

#### The square (child of the div in grid displayed) takes the entire width instead of taking the dimensions the CSS ask it to
=> I put the parent class name on the child as well, which made it have the grid settings as well  
=> Fixed by changing class

## The same dispatched action was executed multiple times (between 2 and 8)
=> Apparently, react components rendering multiple times is a common issue, which was, I believe, the origin of the problem, I read [an article](https://mariosfakiolas.com/blog/my-react-components-render-twice-and-drive-me-crazy/) that said that strict mode makes every component render twice in dev mode (but I am currently not using strict mode), [an other one](https://medium.com/unsplash/react-redux-performance-considerations-when-dispatching-multiple-actions-5162047bf8a6) that said that React component re-render every time a new action is dispatched  
=> I originally created a value in my React component, then dispatched the value, and then reused the values that I just updated, from the props (I thought always using the values from the store might be more consistent, having only one source for all informations). I then tried using the value directly instead of recuperating it from the store and it solved the rerender issue.

## The animation on hover, made with GSAP, blocked when the mouse entered the div slightly (when the enter and exit event of the mouse were not clear)
=> Fixed by using a timeline for the animation

#### Disabling the button element not working properly 
=> I used a state directly in the button element and set it to disabled when the user clicked on it, logically it only updated this one button
=> I used the parent element instead to decide if the elements are disabled or not, every time the element is rerendered (which happens when I click on one button, since I modify the state)

## Passing a ref to a component not working

=> I tried to make a custom element "MainSquare" for the illustrations, but passing a ref as a prop does not work in React, after reading the React doc, I found out that it does work if we use "React.forwardRef" to create the component, instead of making a simple function

## Using redux with "React.forwardRef" not working

=> Using redux modified the react component and converted it back to a function, which made using "React.forwardRef" pointless,it now works by adding extra arguments
``` Javascript
export default connect(mapStateToProps, {}, null, { forwardRef: true })(Component);
```

### Width of the button component was not big enough after the GSAP animation

=> the width was using vw, every time GSAP performs a "to" animation in reverse, it just takes the previous value in px, therefore it doesn't work well with it
=> removed the width prop at the end of the animation

### Width of the menu button not being the right dimensions after the GSAP animation

=> same problem, the value is put back in px.  
=> I tried using a fromTo animation so that it goes back to a value with vw instead of just px, but the animation didn't transition smoothly (it looked like it was first changing the position of the button menu and then scaling it, instead of doing both at the same time smoothly).  
=> I used scale instead.  
=> I feel like every time I use width and height for animations, instead of scale, GSAP is trying to tell me that I shouldn't do it.  
=> I read some comments on the internet about it, it seems scale does generally produce smoother results because of "subpixel rendering". It is generally recommended to use CSS transforms and opacity properties (x, y rotation, rotation, rotationX, rotationY, scaleX, scaleY or just scale, skewX and skewY) for animation. "Changing values that are not CSS Transforms or opacity can cause the browser to re-do its layout of the page which in extreme situations can hinder performance." (src: course from creative coding club).

## Hue changing on hover even though it was not animated

=> The animation that I use to make the squares darker on hover (so that the kanjis and their translation are more readable) should only animate the saturation and lightness of those square, but it changed from purple to green to red very fast for one of them (which was originally red).
=> I tested with an over hue as a starting color (the one I used originally was 360), it worked by replacing 360 by 359, apparently GSAP has some trouble with some values (this one being the maximum hue we can put, it could be the reason?).
