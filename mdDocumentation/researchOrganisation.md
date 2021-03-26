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

## Actions

Based on my previous experience with the project [An intro to Blockchain](https://github.com/ludivineConstanti/an-intro-to-Blockchain) I made, I decided to always recycle the same action if I need to modify only one value and create new ones every time more values need to be modified at the same time. I now make a main object per file with multiple properties that all contain an object. This way I can always stay consistent while updating one value: action(propertyNameMainObject, propertyNameSubObject, value). I also put the name of the file I am modifying at the end of each action (I think it's clearer that way, and it avoids the potential problem of wanting to use similar action, with identical names for different files).

## Store

If I generate a value in a Component and pass it to the store (from redux) I will use that value directly, and not try to recuperate the same value from the store afterward (decision taken after a bug I had, of the component rendering multiple times when I got the value).
  