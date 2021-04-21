# Problem list

## Modifying the 1st element of an array in redux

=> I was not able to access the first element of the array I wanted to modify (tried accessing it by writing state.array[0], for some reasons it didn't work), I therefore decided to read the redux official documentation, to understand better how it work (so far I only used it based on the knowledge I got from the bootcamp I did) and I discovered redux toolkit which reduced the code by a lot, and is (in my opinion) easier to use. I then decided to use it and now the code works.

## Having the divs scaling from the center on hover

=> modifying the height and width property scales from the top right, to scale from the center, I can either use x any to put it back in place or use scale.

``` JavaScript
// converts the size of the div we get in pixels to vw
const componentWidth = componentRef.current.clientWidth / document.documentElement.clientWidth * 100;
// 8.8 => scale we want in vw
const componentScale = 8.8 / componentWidth;
tl.to(componentRef.current, 0.35, {
    // scaling messes up all the sizes so need to divide them per the component scale (typo size..)
ease: 'power1.inOut', zIndex: 10, scale: componentScale, fontSize: `${2 / componentScale}vw`,
}).play();
```

``` JavaScript
// converts the size of the div we get in pixels to vw
const componentWidth = componentRef.current.clientWidth / document.documentElement.clientWidth * 100;
// 8.8 => scale we want in vw
const componentNewSize = 8.8;
const componentOffset = (componentWidth - componentNewSize) / 2;
tl.to(componentRef.current, 0.35, {
ease: 'power1.inOut', zIndex: 10, y: `${componentOffset}vw`, x: `${componentOffset}vw`, height: `${componentNewSize}vw`, width: `${componentNewSize}vw`, fontSize: '2vw',
}).play();
```

Somehow, causes the typo in the center to jump a bit sometimes, so I'll go with changing width and height.

## Update n°1 having the divs scaling from the center on hover

Changing the height and width of the div and changing it's position by using x and y works properly 95% of the time... but sometimes it has a side effect, which consist in animating the div continuously in seemingly random directions on hover. It took me a while to find out why. It seems to work better if I round down the value of translation (before I had something like y: 2.7523124326vw which is calculated automatically based on the screen size and the div's width). The down side is that the squares can not be aligned with the others on the grid if I make the value less precise.

I started testing with using percentage instead of vw, but I have different div width, which means I would need to calculate based on each individually, and somehow, the animation doesn't seem to start from the center (which works fine with the vw), it looks like it's making a diagonal translation, even when it should stay centered.

## Update n°2 having the divs scaling from the center on hover

After transitioning to framer-motion, I updated the scale instead of the width and the height, and it worked just fine. I had to animate the typo too, so that it's not influenced by the scale (I wanted to scale the parent div instead, but then it influences the total width that the text can take).

## Animating typo in GSAP

I tried animating the typo size from 0 to something in GSAP (just for one part of the text, the text at the center of the div stays visible). It gave a slight staggering effect. I decided to simply remove this animation, (since I already have fade in and fade out on the text anyway, and I still need to figure out how to organise GSAP and SASS so that they work together, having different style in both is a bit messy).

=> I thought GSAP would solve all problems linked to layout moving, turns out it doesn't do it 100%, which means I shoudl spend more time on learning what modifies the layout and what doesn't.

## Clear GSAP inline styling

I tried clearing the inline style that I added with gsap, at the end of the reversed animation (so when I don't need them anymore), since it caused bugs in an other of my animation, so I thought removing them for all might be a good practice... after trying it out it seems to add more bugs... so I won't remove the online styling anymore (unless when needed).

## Update n°1 clear GSAP inline styling

I realised removing inline styling was actually necessary because modifying the position of the elements by inline styling make them not resize properly (which doesn't matter when we are doing the hover effect, because hovering over the div and resizing the browser's window at the same time should be difficult). After a bit of testing with removing the properties and, causing more bugs doing so (div glitching...), I found out that removing the properties should not be done on the GSAP timeline directly but with TweenLite. I did so with an event callback function and now it seems to be much better.

## Update n°2 clear GSAP inline styling

After reading the doc to understand what is TweenLite and why it's working better, I learned that it's actually deprecated (as is TweenMax, TimelineMax and TimelineLite) and has been replaced by gsap that covers all their fonctionnalities. But clearing props still works better with a callback function, instead of adding it directly to the timeline.

## Update n°3 clear GSAP inline styling

After transitioning to Framer motion, I expected to have the same bug, but it worked fine without me needing to change anything. I guess the way they handle things internally is different even though they both use JavaScript.

## Blurry text

Sometimes, the text appears blurry, I read in a GSAP forum that it can happen when you apply transformations for your element, since GSAP uses 3D transform to save on performance. It can be changed with gsap.config(force3D: false), but then performance drops, so will have to test it if I see too much blurry text (or just have to avoid using scale, which would be a shame since animations of type transform are more performant).

## GSAP reverse animation not working

The GSAP animations were working fine while using .to, but nothing happened while using reverse. After research, I found out that the hooks and lifecycle of React components can mix up badly with GSAP's timeline. However, by using hooks to create and modify the timeline, both work fine together.

## Removing kanjis from the kanjis array, the illustration used for deco also remove it from the quiz

I thought the data array from the kanjis was not going to be affected if I remove some characters from it, in another file, but I was wrong. I then tried again with making a local copy of it, but it didn't work (since it was a dynamic one). After another try, using the spread opearator, in an array, to make a copy, it worked.

## The as prop of styled component doesn't work with animate of framer motion

To my knowledge, there's no solution to this, so I just stopped using as (I didn't find a solution on the forums, but might be that they fixed it or are planning to...).

## The colors don't properly update

I have one mainColor that I stock in my state, which worked fine when the site is loaded but didn't always update afterward. This problem was fixed when I started using animate presence in the app component, which also fixes the problem I had with intro animations not always triggering when (except when you reloaded the page).

I had a lot of similar problems with animating the colors, but I either removed the animation (and then it gets the color automatically updated from styled-component) or I update the animate animation (from framer-motion) when the color changes, and then it fixes it.
