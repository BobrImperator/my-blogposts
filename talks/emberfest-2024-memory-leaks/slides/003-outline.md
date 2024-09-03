# Outline

1. Recap on JavaScript memory allocation
<!-- Mention that JavaScript has a garbage collection - a managed memory scheme, where a developer doesn't usually need to worry about these things. -->
<!-- A couple examples of leaks in raw JS -->
2. Preparing environment
<!-- Ember has Debug code that can sometimes do funky stuff. It's recommended to have a production build with terser configured so it preserves the original object names. -->
3. What are the objects and their retainers
<!-- Brief introduction to types of data found in a snapshot e.g. regular property like 'parent' and 'context in' like here https://github.com/ember-best-practices/memory-leak-examples/blob/master/exercises/images/exercise-3/finding-the-scope-leak.gif  -->
4. What to look for
<!-- Inspecting a snapshot can be overwhelming. In a browser environment, in my opinion, your first check should be for the classses that you own yourself, such as component, model, and anything that you defined as `class SomeComponent ...` -->
<!-- Because these classes bear actual names, they make the debugging much easier. -->
<!-- Another type of information to look for would be DOM elements that are in Detached stated. In a snapshot they appear as `Detached HTMLSpanElement` -->
<!-- Memory leaks -->
<!-- I'll jump ahead and say that this is probably where most of the leaked memory will come from. -->
<!-- Add a section on capturing event listeners build up over time-->
<!-- Add a section on tricks such as simply accessing a route in a loop or playing with pagination -->
5. Iterating quickly
<!-- There's no real silver bullet to dealing with a memory leak and finding them might be a gruelsome experience. -->
<!-- You can make this much faster by leveraging your test environment e.g. rendering pages or components in a loop to quickly bloat up the memory to expose the leaking parts. -->
6. Divide and conquer
<!-- Brute forcing seems to be a good way to go about it. Once you've confirmed that a leak appears on one of your routes and not the others. Just start by disabling parts of the UI. -->
7. Testing?
<!-- #create a plug for the 4. iterating quickly. With this tool iterating would be much faster. -->

8. There's always something leaking but should it?
<!-- Research whether it's normal for websites to have Detached HTML nodes -->
