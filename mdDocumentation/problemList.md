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

## Animating typo in GSAP

I tried animating the typo size from 0 to something in GSAP (just for one part of the text, the text at the center of the div stays visible). It gave a slight staggering effect. I decided to simply remove this animation, (since I already have fade in and fade out on the text anyway, and I still need to figure out how to organise GSAP and SASS so that they work together, having different style in both is a bit messy).

=> I thought GSAP would solve all problems linked to layout moving, turns out it doesn't do it 100%, which means I shoudl spend more time on learning what modifies the layout and what doesn't.

## Clear GSAP inline styling

I tried clearing the inline style that I added with gsap, at the end of the reversed animation (so when I don't need them anymore), since it caused bugs in an other of my animation, so I thought removing them for all might be a good practice... after trying it out it seems to add more bugs... so I won't remove the online styling anymore (unless when needed).
