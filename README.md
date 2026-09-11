# react-design-patterns

I kept running into the same problem: I could build components, but I couldn't always explain *why* I'd structured them the way I had. This repo is me fixing that — a set of small React projects, each one built around a single design pattern, each one pushed until I actually understand the trade-off, not just the syntax.

---

## Patterns

| Pattern                                                   | What it does                                    | Status         |
| ---------------------------------------------              | ------------------------------------------------ | -------------- |
| [Container-Presenter](./container-presenter)               | Splits data logic from UI rendering               | Done           |
| [Controlled-&-Uncontrolled-forms](./compound-components)   | Lets components share state implicitly            | Coming         |
| [Render Props](./render-props)                             | Shares behavior via a function prop               | Coming         |
| [Custom Hooks](./custom-hooks)                             | Pulls stateful logic out of components            | Coming         |
| [Context](./context)                                       | Passes data down a tree without prop drilling     | Coming         |

---

## Why bother

Knowing how to write a component isn't the same as knowing where it should live, what it should own, or how it should talk to everything around it. That's the gap this repo is for — questions like:

- Where should this piece of logic actually sit?
- Is this abstraction earning its keep, or just adding a layer?
- What happens to this component six months from now, when someone else touches it?

Each project comes with a short write-up covering:

1. What problem the pattern is solving
2. How it actually works, mechanically
3. A working implementation
4. Where it falls short
5. When I'd reach for it again — and when I wouldn't
6. What else I could've done instead

---

## What I'm actually learning here

Composition. Where logic should live. State management that doesn't turn into spaghetti. Inversion of control. Component APIs that don't make the next person hate you. Mostly, though: trade-offs. Every pattern here fixes one problem and introduces a different one, and the interesting part is figuring out which trade you're willing to make.

---

## Stack

React, TypeScript, Vite, plain CSS. A few projects pull in an extra library if it helps make the point — nothing heavier than that.

---

## Use of AI

I've used AI tools here and there — mostly for styling, layout, and general UI polish. That's it. It frees me up to spend my actual attention on the parts I'm here to learn:

Understanding the patterns themselves
Structuring components
Separating logic from presentation
Working out reusable component APIs
Weighing the trade-offs of each approach
Figuring out where each pattern breaks down

The implementations, the architectural calls, the actual learning — that's all mine. AI just took some of the CSS grunt work off my plate.

## Repo layout

```text
react-design-patterns/
│
├── README.md
│
├── container-presenter/
│   ├── README.md
│   ├── package.json
│   └── src/
│
├── controlled-&-uncontrolled-forms/
│   ├── README.md
│   ├── package.json
│   └── src/
│
├── compound-components/
│   ├── README.md
│   ├── package.json
│   └── src/
│
├── render-props/
│   ├── README.md
│   ├── package.json
│   └── src/
│
├── custom-hooks/
│   ├── README.md
│   ├── package.json
│   └── src/
│
└── context/
    ├── README.md
    ├── package.json
    └── src/
```

Every folder is its own standalone project.

---

## Running one

```bash
git clone https://github.com/YOUR_USERNAME/react-design-patterns.git
cd react-design-patterns
cd container-presenter    # or whichever pattern you're after
npm install
npm run dev
```

Each project's own README has the specifics.

---

## The projects

### Container-Presenter

Separates "getting the data" from "showing the data." The container fetches and manages state; the presenter just renders what it's handed. Useful once a component starts doing too much at once.

[Look inside →](./container-presenter)

---

## One caveat

None of these patterns are rules. A pattern that makes one codebase easier to work in can make another one worse. Before reaching for any of these, the actual question is: *does my app have the problem this pattern solves?* If not, skip it — the pattern isn't the goal, understanding when to use it is.

---

## Progress

- [x] Container-Presenter
- [ ] Controlled-&-Uncontrolled-forms
- [ ] Compound Components
- [ ] Render Props
- [ ] Custom Hooks
- [ ] Context
- [ ] More patterns as I get to them

---

## About

Part of my own dig into React architecture and component design — less about shipping features, more about understanding why a codebase stays sane (or doesn't) as it grows.

If any of this is useful to you, feel free to poke around the individual projects.
