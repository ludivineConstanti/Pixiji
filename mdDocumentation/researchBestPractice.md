# Best practices 🏆

After React refused to work (multiple times) when I used a function directly inside a component, and not in a hook, I slowly registered the fact that everything that is inside of a react component is being rerendered multiple times. Which means every bit of code that is not inside of a hook is systematically recreated. Which means the more code you put inside... the worst for performance...

Therefore, I researched what are React's best practices (for performance, to avoid bugs...) and realised that I was... not following them so far...

So here is a list of rules that I am not applying and will transition into:
* Keep the component's size to a minimum  
✔️ Makes it easier to have an overview of the code.  
✔️ Code that should not be reexecuted all the time (and is not inside a hook) is now outside of the component.  
* Keep the props of the component to a minimum
✔️ Makes it easier to have an overview of the code. 
✔️ Avoid useless renders (every time a prop is updated, everything is re-rendered) 
✔️ encourage restructuring a component in more small cmponents is part of React's philosophy.   
