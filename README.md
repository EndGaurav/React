# React Fiber (The Boss)
React Fiber is like a fancy upgrade to React, the popular JavaScript library. It's designed to make React better at handling things like animations, page layouts, and user gestures. The cool thing about it is that it can break up the work it needs to do into smaller pieces and spread it out over time, which makes your apps feel smoother.

With React Fiber, it can also stop or change its work when new stuff comes in, and it can decide which things are more important to do first. It also comes with some new tools to make everything work more efficiently. So, in simple terms, it's like a more powerful and smarter React that can make your web apps run better and look cooler.

What is reconciliation?
## reconciliation
The algorithm React uses to diff one tree with another to determine which parts need to be changed.
## update
A change in the data used to render a React app. Usually the result of `setState`. Eventually results in a re-render.

Reconciliation is the algorithm behind what is popularly understood as the "virtual DOM." A high-level description goes something like this: when you render a React application, a tree of nodes that describes the app is generated and saved in memory. This tree is then flushed to the rendering environment — for example, in the case of a browser application, it's translated to a set of DOM operations. When the app is updated (usually via setState), a new tree is generated. The new tree is diffed with the previous tree to compute which operations are needed to update the rendered app.

Although Fiber is a ground-up rewrite of the reconciler, the high-level algorithm described in the React docs will be largely the same. The key points are:

- Different component types are assumed to generate substantially different trees. React will not attempt to diff them, but rather replace the old tree completely.
- Diffing of lists is performed(Increase the performance of the any list) using keys. Keys should be "stable, predictable, and unique."

# Reconciliation versus rendering
The DOM is just one of the rendering environments React can render to, the other major targets being native iOS and Android views via React Native. (This is why "virtual DOM" is a bit of a misnomer.)

The reason it can support so many targets is because React is designed so that reconciliation and rendering are separate phases. The reconciler does the work of computing which parts of a tree have changed; the renderer then uses that information to actually update the rendered app.

This separation means that React DOM and React Native can use their own renderers while sharing the same reconciler, provided by React core.

# Scheduling
## scheduling
the process of determining when work should be performed.
## work
any computations that must be performed. Work is usually the result of an update (e.g. setState).

## React's Design Principles document is so good on this subject that I'll just quote it here:
Right now, React does all its work in one go, like finishing a puzzle all at once. But in the future, it might start doing some work only when it's needed, like solving the puzzle piece by piece as you go.

The reason is that React is made for building user interfaces, not for general computing tasks. It's really good at knowing what's on the screen and what's not. So, if something isn't on the screen, it can wait to do the work for it. And if there's a lot of work to do, React can group it together to make things smoother, and it can prioritize things you're interacting with over things happening in the background to make sure your apps don't slow down or drop frames.

## Application of fiber
We've established that a primary goal of Fiber is to enable React to take advantage of scheduling. Specifically, we need to be able to

- pause work and come back to it later.
- assign priority to different types of work.
- reuse previously completed work.
- abort work if it's no longer needed.

""A fiber represents a unit of work.""

It follows that rendering a React app is akin to calling a function whose body contains calls to other functions, and so on. This analogy is useful when thinking about fibers.

The way computers typically track a program's execution is using the call stack. When a function is executed, a new stack frame is added to the stack. That stack frame represents the work that is performed by that function.

When dealing with UIs, the problem is that if too much work is executed all at once, it can cause animations to drop frames and look choppy. What's more, some of that work may be unnecessary if it's superseded by a more recent update. This is where the comparison between UI components and function breaks down, because components have more specific concerns than functions in general.

Newer web browsers and React Native have special tools like "requestIdleCallback" and "requestAnimationFrame" to help manage when functions should run.

"requestIdleCallback" schedules less important work to run when the device is not too busy.
"requestAnimationFrame" schedules important work to run just before the next animation frame.
However, to use these tools effectively, you need a way to break your tasks into smaller parts. If you rely only on the normal way of doing things (the call stack), it will keep going until it's completely done, potentially causing delays in important tasks like animations. So, breaking work into smaller pieces helps you use these tools more efficiently.

Wouldn't it be great if we could customize the behavior of the call stack to optimize for rendering UIs? Wouldn't it be great if we could interrupt the call stack at will and manipulate stack frames manually?

That's the purpose of React Fiber. Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame.

The advantage of reimplementing the stack is that you can keep stack frames in memory and execute them however (and whenever) you want. This is crucial for accomplishing the goals we have for scheduling.

# Structure of a fiber
In concrete terms, a fiber is a JavaScript object that contains information about a component, its input, and its output.

A fiber corresponds to a stack frame, but it also corresponds to an instance of a component.

Here are some of the important fields that belong to a fiber. (This list is not exhaustive.)

type and key