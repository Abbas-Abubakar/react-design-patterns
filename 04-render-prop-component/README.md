# Render Props Pattern

A working example of the Render Props pattern — sharing stateful behavior between components while letting the consumer decide how it gets rendered.

## Overview

Render props are about sharing logic by passing a function as a prop. Instead of a component deciding exactly what its UI looks like, it manages the state or behavior and hands that off to a function the consumer provides. The consumer takes it from there.

Here, the pattern shows up as a `ToggleComponent` that manages toggle state and exposes it through a function passed as `children`.

```tsx
<ToggleComponent>
  {({ isOpen, handleToggle }) => (
    <>
      <span>
        Status: {isOpen ? 'Active' : 'Not Active'}
      </span>

      <button onClick={handleToggle}>
        Toggle
      </button>
    </>
  )}
</ToggleComponent>
```

`ToggleComponent` owns the behavior. The consumer owns the presentation.

---

## What's a render prop, exactly

A function passed to a component, which the component calls to figure out what to render — the function gets handed whatever data or behavior the component is managing. It doesn't have to be named `render`; in this project it's just `children`:

```tsx
<ToggleComponent>
  {({ isOpen, handleToggle }) => (
    // consumer controls the UI
  )}
</ToggleComponent>
```

This particular flavor — function passed as `children` — usually gets called "function-as-children."

---

## The problem it's solving

Say several components need toggle behavior. Without something reusable, each one ends up writing the same state and handler:

```tsx
const [isOpen, setIsOpen] = useState(false)

const handleToggle = () => {
  setIsOpen(prev => !prev)
}
```

It works, but you're copy-pasting the same logic everywhere it's needed. Render props split the behavior from the presentation instead:

```text
ToggleComponent
      │
      ├── manages state
      ├── manages toggle behavior
      │
      ▼
  Render Function
      │
      └── decides what UI to display
```

Same toggle logic, completely different interfaces.

---

## Project structure

```text
render-props/
│
├── README.md
│
└── messy/
      |__ components/
|
└── with-pattern/
      ├── ToggleComponent.tsx
      └── components/
            └── AccordionItem.tsx
```

**`ToggleComponent`** owns `isOpen` and `handleToggle`. It has no idea how the consumer plans to display any of it.

**`AccordionItem`** takes the toggle state `ToggleComponent` hands it and builds an accordion out of it — the same toggle logic, wearing a different UI.

---

## How it works

`ToggleComponent` manages the state:

```tsx
const [isOpen, setIsOpen] = useState(false)

const handleToggle = () => {
  setIsOpen(prev => !prev)
}
```

Then it passes that state and behavior into the render function:

```tsx
{children({
  isOpen,
  handleToggle
})}
```

And the consumer decides what to do with it:

```tsx
<ToggleComponent>
  {({ isOpen, handleToggle }) => (
    <>
      <span>
        Status: {isOpen ? 'Active' : 'Not Active'}
      </span>

      <button onClick={handleToggle}>
        Toggle
      </button>
    </>
  )}
</ToggleComponent>
```

The chain looks like:

```text
ToggleComponent
    ↓
Behavior
    ↓
isOpen + handleToggle
    ↓
Consumer
    ↓
UI
```

---

## Reusing the same behavior elsewhere

The same `ToggleComponent` slots straight into an accordion:

```tsx
<ToggleComponent>
  {({ isOpen, handleToggle }) => (
    <AccordionItem
      isOpen={isOpen}
      onToggle={handleToggle}
    />
  )}
</ToggleComponent>
```

`ToggleComponent` has no idea `AccordionItem` even exists — it just hands over the behavior. The same logic could drive a button, a dropdown, a menu, a modal, an expandable section, whatever. The consumer decides what it actually looks like.

---

## Behavior vs. presentation

The core idea here is keeping those two things apart.

**Behavior** — owned by `ToggleComponent`: the `isOpen` state, the `handleToggle` interaction.

**Presentation** — owned by the consumer: a status indicator, a button, an accordion, whatever else.

`ToggleComponent` genuinely doesn't care which of those it ends up being.

---

## Traditional approach vs. render props

The usual way bundles state, handlers, and UI into one component:

```text
Component
├── State
├── Event handlers
└── UI
```

Which makes the behavior hard to pull out and reuse on its own. Render props split it:

```text
Render Prop Component
├── State
└── Behavior
        │
        ▼
   Render Function
        │
        ▼
       UI
```

The component provides behavior. The consumer decides what happens with it.

---

## What it gets you

- Reusable stateful behavior
- A real split between behavior and presentation
- The consumer gets full control over rendering
- No duplicated state logic across components
- One piece of behavior, many possible UIs
- The shared behavior stays explicit instead of hidden

The key thing: the component handing out the render prop never needs to know what the consumer is going to do with it.

---

## Where it falls short

**More nesting.** Function-as-children adds a layer of JSX nesting that isn't always fun to read:

```tsx
<ToggleComponent>
  {({ isOpen, handleToggle }) => (
    // ...
  )}
</ToggleComponent>
```

**Messier types.** The render function needs its own type signature:

```tsx
{
  ({ isOpen, handleToggle }: {
    isOpen: boolean
    handleToggle: () => void
  }) => (
    // ...
  )
}
```

**Hooks might just be simpler.** Custom hooks solve a lot of the same "share this logic" problems with less ceremony. Render props still earn their place when the consumer specifically needs to control how the behavior-providing component renders.

---

## What I took away from this

- A render prop is really just a function that controls what a component renders
- It can come through any prop — `render`, `children`, whatever name fits
- A component can own state and behavior without owning any UI
- Using `children` as a function is a practical way to implement this
- Render props draw a clean line between behavior and presentation
- The same behavior can drive completely different UIs
- The consumer decides what to do with what it's given
- Like every pattern here, it's a trade-off — hooks are often the simpler answer for reusing logic

---

## Running it

```bash
git clone https://github.com/Abbas-Abubakar/react-design-patterns.git
cd react-design-patterns
npm install
npm run dev
```

---

## Tech

React, TypeScript, Vite, React Hooks, CSS.

---

## Related concepts

Function as children, component composition, state management, separation of concerns, reusable behavior, custom hooks, higher-order components.

---

[← Back to React Design Patterns](https://github.com/Abbas-Abubakar/react-design-patterns)
