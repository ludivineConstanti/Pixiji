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
