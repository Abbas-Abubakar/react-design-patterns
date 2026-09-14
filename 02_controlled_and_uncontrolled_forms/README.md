# Controlled & Uncontrolled Components

A hands-on look at controlled vs. uncontrolled form components in React — basically, the question of who's actually holding onto the form's state.

## Overview

Depending on where you store a form's state, React forms can behave pretty differently. This project walks through three ways to handle it:

1. **Controlled** — React owns the state.
2. **Uncontrolled** — the DOM owns the state.
3. **Uncontrolled with `useRef`** — the DOM still owns the state, but React grabs it via a ref when it actually needs it.

The point isn't just to build all three, but to get a feel for when each one makes sense.

---

## Project structure

```text
controlled-uncontrolled/
│
├── README.md
│
├── controlled/
│   └── ...
│
├── uncontrolled/
│   └── ...
│
└── uncontrolled-use-ref/
    └── ...
```

### `controlled`

Form values live in React state via `useState`.

```text
User input
    ↓
onChange
    ↓
React state
    ↓
value prop
    ↓
Input
```

React is the source of truth here, which makes things like validation, conditional rendering, and reacting to every keystroke pretty straightforward.

### `uncontrolled`

The DOM handles the form values directly — no React state involved. Values only get pulled out when the form is submitted, using the browser's native form APIs. The DOM stays the source of truth the whole time.

### `uncontrolled-use-ref`

Same idea, but with a `useRef` pointed at the form:

```tsx
const formRef = useRef<HTMLFormElement>(null)
```

When it's time to read the values, the ref gives direct access to the DOM form:

```tsx
const formData = new FormData(formRef.current)
const data = Object.fromEntries(formData.entries())
```

No per-field state, no tracking every change — just reach in and grab what's there when you need it.

---

## Comparison

| Approach                | Source of truth | Main tool              | React tracks changes? |
| ------------------------ | ---------------- | ----------------------- | ----------------------- |
| Controlled               | React state       | `useState`               | Yes                      |
| Uncontrolled              | DOM                | Native form APIs         | No                       |
| Uncontrolled + `useRef`  | DOM                | `useRef` + `FormData`    | No                       |

---

## What I took away from this

Working through all three, I got a much clearer picture of:

- Controlled vs. uncontrolled form handling
- Managing state with `useState`
- Reading the DOM directly with `useRef`
- The native `FormData` API
- Pulling data out on submit
- Who actually "owns" state in a given component
- The trade-offs between letting React track everything vs. letting the DOM handle it

It really comes down to one distinction: **controlled means React owns the state, uncontrolled means the DOM does.** Everything else follows from that.

---

## Picking one

Neither is the "correct" choice — it depends on what the form needs to do.

Reach for **controlled** when you need to react to every change: live validation, conditional UI, keeping form state in sync with the rest of the app.

Reach for **uncontrolled** when the form is simple and you only care about the values at one moment — usually submission — without React needing to track every keystroke along the way.

---

## Tech

React, TypeScript, Vite, React Hooks

---

## Running it

```bash
cd 02_controlled_and_uncontrolled_forms
npm install
npm run dev
```

---

## Part of a bigger set

This is one piece of my [React Design Patterns](https://github.com/Abbas-Abubakar/react-design-patterns) repo, where I'm working through different approaches to component architecture, state, and reuse.

[← Back to React Design Patterns](https://github.com/Abbas-Abubakar/react-design-patterns)
