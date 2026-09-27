# Compound Components Pattern

A working example of the Compound Components pattern, built around a reusable Card component — components that are designed to work together, while letting the consumer decide how they're arranged.

## Overview

As a component grows, it's tempting to add a prop for every new thing it needs to do. A Card component can end up needing props for the title, description, image, image position, footer, buttons, metadata, style variants — and it just keeps growing.

Compound components take a different route: break the Card into smaller pieces that are meant to be used together, and let the consumer assemble them instead of configuring one giant component.

```tsx
<Card>
  <Card.Image />
  <Card.Content>
    <Card.Title />
    <Card.Description />
  </Card.Content>
  <Card.Actions />
</Card>
```

That reads more like a description of the UI than a config object.

---

## What compound components actually are

A set of components designed to work as one system — think `<select>` and `<option>` in plain HTML. Each piece has its own job, but they're built to be used together.

In React, this pattern tends to show up when:

- several components belong to the same feature
- those components need to coordinate with each other
- the consumer should have real control over structure
- one component would otherwise need a pile of configuration props

When the pieces need to share state, Context usually comes along for the ride — it lets the parent and its sub-components talk without threading props through every layer.

---

## Traditional Card vs. Compound Card

**The traditional way:**

```tsx
<Card
  image="..."
  title="Product"
  description="Product description"
  showActions={true}
  primaryAction="Buy"
  secondaryAction="Save"
/>
```

Every new use case tends to mean another prop, and the API gets harder to reason about over time.

**The compound way:**

```tsx
<Card>
  <Card.Image />
  <Card.Content>
    <Card.Title />
    <Card.Description />
  </Card.Content>

  <Card.Actions>
    <button>Buy</button>
    <button>Save</button>
  </Card.Actions>
</Card>
```

The Card provides the system. The consumer decides which pieces to use and where they go.

---

## Project structure

```text
03-compound-components/
│
├── README.md
│
└── src/
    ├── messy/
    │   └── ...
    │
    └── with-pattern
        └── ...
```

**`messy/`** — the traditional Card, prop-driven, showing how it starts to strain once it's handling too much layout logic through configuration.

**`compound/`** — the same Card broken into smaller, focused pieces that compose together.

---

## Composing the card

```tsx
<Card>
  <Card.Image />
  <Card.Content>
    <Card.Title />
    <Card.Description />
  </Card.Content>
  <Card.Actions />
</Card>
```

Each sub-component owns its own slice of the UI, so the structure can change without the parent `Card` needing yet another prop.

Just the content, no image or actions:

```tsx
<Card>
  <Card.Content>
    <Card.Title />
    <Card.Description />
  </Card.Content>
</Card>
```

Or skip the description entirely:

```tsx
<Card>
  <Card.Image />
  <Card.Content>
    <Card.Title />
  </Card.Content>
  <Card.Actions />
</Card>
```

The API stays composable instead of turning into a wall of boolean flags.

---

## The core ideas

**Composition over configuration.** Instead of one component with a growing prop list, the UI gets assembled from smaller pieces — the consumer decides the final shape.

**Clear responsibilities.** Each part of the Card does one thing:

```text
Card
├── Image
├── Content
│   ├── Title
│   └── Description
└── Actions
```

**A declarative API.** Instead of

```tsx
<Card
  showImage
  showDescription
  showActions
  imagePosition="top"
/>
```

you just write what you want:

```tsx
<Card>
  <Card.Image />
  <Card.Description />
  <Card.Actions />
</Card>
```

**Shared context, when needed.** If the sub-components need to coordinate state, Context lets them do it without every level of the tree having to pass props down manually.

---

## What it gets you

- More flexible composition
- A cleaner, less prop-heavy API
- Clear separation between the pieces
- More control over markup and layout
- Sub-components that can be reused on their own
- Easy to extend with new Card sections later

---

## Where it falls short

Compound components aren't automatically the right call. They mean more components to manage, and if state needs to be shared, probably Context on top of that — more moving parts overall.

They earn their keep when several pieces genuinely belong together and need a flexible way to combine. For a Card that's genuinely simple, a single component with a couple of props is still probably the better call.

---

## What I took away from this

- Designing around composition instead of configuration
- How splitting a big component into pieces makes the API more flexible
- Letting the consumer control structure instead of hiding it behind props
- Recognizing when a growing prop list is a sign to switch approaches
- Organizing related components under one shared API
- Using Context when compound components need to share state
- That this, like every pattern here, is about trade-offs — not a default answer

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

React, TypeScript, Vite, React Context API, CSS.

---

## Related concepts

Component composition, props, children, Context, reusable components, component API design, separation of concerns.

---

[← Back to React Design Patterns](https://github.com/Abbas-Abubakar/react-design-patterns)
