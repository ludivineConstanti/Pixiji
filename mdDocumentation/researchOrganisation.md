# Research organisation 📝

The folder organisation that I had for my last project [An intro to Blockchain](https://github.com/ludivineConstanti/an-intro-to-Blockchain) was working well, in my opinion. There was some minor issues with some elements that did not have a clear category, but it was mostly fine.

This time. I'll put letters at the beggining of my folder names so that they are ordered automatically how I want them to be.  

I've also read on the React documentation that there's an organization system called "collocation" => put the files that are often modified together in the same folder. This time, I'll try putting the container files for redux in the same folder as the components. I can think already of 3 potential advantages of doing this:

* I won't mix up the components and containers folder anymore while looking for files.
* I will spend less time looking for the right file when I want to modify its container.
* ✨ I won't have to change the path to import the container, I can just rename my index file to "component" and add another index file that will be the container. ✨

I will also try the collocation concept for other files in this project, like those for the reducer and the actions.

### Components structure 📁

a_Root => App (the root of the document at the top)  
b_Fixed => Everything that is used on a lot of pages, not as an individual custom element, but as is (menu...)  
b_Pages => Everything that has its own url path (home...)  
c_Illustrations => Illustrations and the function that process them  
dPartials => Things that takes a lot of space and are reused in the pages  
e_Interactives => Small interactive elements (buttons...)  
e_Statics => Small elements that are not interactive

## Naming

I first thought about removing the "Reducer" or "Actions" at the end of the file name, to make it shorter, since they were in the reducers and actions folder anyways, but I changed my mind after clicking a few times on the files in the reducer folder, thinking I was going to find the component.

## CSS

I think what was the worst organised in "An intro to Blockchain" was the CSS. Probably mostly because I did not have a very good knowledge of Sass and how it allows us to reuse code. The main problem, in my opinion, in the last project is that I had a lot of values in pixels, which means that if I were to change some things, I would need to check the entire website to see if the margins still behave properly. I thought about using variables for everything, but that would probably be a nightmare with too many values.

## Update n°1 on CSS organisation

I tried using variables in individual files next to the components (when it was related to that component) and then restocking them in a file and reusing those variables from that file. That might have made sense if I had a lot of them, but turns out that so far, I don't. I also put a file with global variables that I use evrywhere and are not related to individual components, I could have just put everything there.

## Update n°2 on CSS organisation

After using GSAP to animate various things it becomes more and more obvious that the system that I wanted with global values that I can reuse everywhere and just modify in one central file doesn't work if I need to use values in both CSS and JavaScript...  
I discovered there is a special tool for inline styling in React ("styled component"). I am now going to slowly transition to that, at least for the parts where I am using global values. Now I'll be able to have both initial style and style modified by GSAP in one file.

## Update n°3 on CSS organisation

I had some errors showing up in the console.log, complaining about the props I give to some components so that styled-components can use them. Therefore, I decided to always give those props in an object prop that I call s. This way, it's also easier for me to differentiate the props that are just used for styling (especially when there's a lot of them).

## Typo

I have more font sizes than intended, but I think, for the future, I might continue to use one name per role for the typo, and just extend a class if they are the same size. This way, I won't have to go look for it, in the original css file, if I want to make it different, I'll just remove the extend and write the new settings.
  