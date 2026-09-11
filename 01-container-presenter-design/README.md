# Container-Presenter Pattern

A working React example of the Container-Presenter pattern — splitting what a component *does* from what it *shows*.

## Overview

As a React app grows, it's easy for one component to end up doing everything: fetching data, tracking loading and error states, managing app state, filtering and sorting, handling clicks, and rendering the UI — all in the same file.

The Container-Presenter pattern is one way to pull those apart. This project shows both sides: the original version where everything is tangled together, and the refactor where it isn't.

For product data, I used the [Fake APIs](https://github.com/tapascript/fake-apis) project by Tapas Adhikary, so I could work with real async fetching, loading states, and error handling without standing up my own backend.

## The pattern

Two pieces, two jobs.

### Container

Handles the logic side: fetching data, managing state, business rules, event handlers, transforming data, tracking loading and error states. It doesn't need to know or care how any of that ends up looking on screen.

### Presenter

Handles the display side: takes data as props, renders it, shows loading and error states, and passes user actions back up through callbacks. Ideally it holds almost no logic of its own.

### How they connect

```text
              Container
                  │
       ┌──────────┼──────────┐
       │          │          │
     Data       State      Logic
       │          │          │
       └──────────┼──────────┘
                  ↓
              Presenter
                  │
                  ↓
              User Interface
```

## Project structure

```text
container-presenter/
│
├── README.md
│
├── messy/
│   └── ...
│
└── container-presenter/
    └── ...
```

**`messy`** — the original version, before the split. One component doing several unrelated jobs at once.

**`container-presenter`** — the refactor, with logic and presentation pulled apart.

## The problem, before

In the original version, a bunch of responsibilities that have nothing to do with each other all live in the same component:

```text
Component
├── Fetch products
├── Manage loading state
├── Handle errors
├── Filter products
├── Sort products
├── Manage cart interactions
└── Render the interface
```

That makes the component harder to read, harder to test, harder to reuse, and harder to change without breaking something else — because everything is welded to everything else.

## After the split

```text
Container
├── Fetch data
├── Manage state
├── Handle logic
└── Prepare props
        │
        ↓
Presenter
├── Display data
├── Display loading state
├── Display errors
└── Render UI
```

The container decides what *should happen*. The presenter decides what *gets shown*. Neither one needs to know much about the other.

## API

Product data comes from [Fake APIs](https://github.com/tapascript/fake-apis) by Tapas Adhikary — a solid way to simulate real API behavior (async requests, loading states, errors) without writing a backend just for a demo.

## Why bother with this

The short version: separation of concerns. Once logic and presentation are split, each side has one job. Tweak the UI, and you probably don't need to touch how data gets fetched. Change how data is fetched or processed, and you probably don't need to restructure the UI.

## What it gets you

**Separation of concerns** — logic and presentation each have a clear, single job.

**Easier maintenance** — a bloated component becomes a few smaller, more focused ones.

**Easier testing** — logic and rendering can be tested apart from each other.

**Reusability** — the same presenter could work with a different container or data source.

**Clarity** — it's easier to tell what a component is actually responsible for just by reading it.

## Where it falls short

This isn't automatically the right call for every component. For something small, splitting it into a container and a presenter can add more files and more abstraction than the component actually needs — plus more plumbing to pass data and callbacks back and forth.

So the real question isn't *"can I use this pattern here?"* — it's *"is there enough going on in this component for the split to actually pay off?"*

## What I took away from this

Working through this, I got hands-on with:

- Separating concerns on purpose, not by accident
- What a container should own vs. what a presenter should own
- Communicating through props instead of tangled state
- State and data flow between components
- Composition
- Untangling a component that was doing too much
- Async data fetching, and handling loading/error states properly
- Where abstraction helps and where it just adds weight

The main lesson: patterns are for solving a problem you actually have — not something to bolt on because it's a known pattern.

## Running it

```bash
cd container-presenter
npm install
npm run dev
```

The terminal will give you the local URL once it's up.

## Tech

React, TypeScript, Vite, CSS, React Hooks, Fake APIs.

## Part of a bigger set

This is one piece of my [React Design Patterns](https://github.com/Abbas-Abubakar/react-design-patterns) repo, where I'm working through different approaches to component architecture, reuse, and state — less focused on memorizing patterns, more on understanding when each one actually earns its place.
