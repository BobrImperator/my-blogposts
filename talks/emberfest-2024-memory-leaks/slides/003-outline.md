# Outline

<!-- 1. Recap on JavaScript memory allocation -->
<!-- Mention that JavaScript has a garbage collection - a managed memory scheme, where a developer doesn't usually need to worry about these things. -->
<!-- A couple examples of leaks in raw JS -->
1. Preparing environment
2. What to look for
3. What are the objects and their retainers
4. Iterating quickly
<!-- There's no real silver bullet to dealing with a memory leak and finding them might be a gruelsome experience. -->
<!-- You can make this much faster by leveraging your test environment e.g. rendering pages or components in a loop to quickly bloat up the memory to expose the leaking parts. -->
<!-- 6. Divide and conquer -->
<!-- Brute forcing seems to be a good way to go about it. Once you've confirmed that a leak appears on one of your routes and not the others. Just start by disabling parts of the UI. -->
5. Testing
<!-- #create a plug for the 4. iterating quickly. With this tool iterating would be much faster. -->

<!-- I'll jump ahead and say that this is probably where most of the leaked memory will come from. -->
<!-- Add a section on capturing event listeners build up over time-->
<!-- Add a section on tricks such as simply accessing a route in a loop or playing with pagination -->
<!-- Add a section on the motivation behind the talk, ember-in-viewport leaking, getting it fixed and how -->
