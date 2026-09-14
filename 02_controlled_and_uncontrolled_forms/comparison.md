# Controlled vs Uncontrolled Components

A closer look at how controlled and uncontrolled form components stack up — code style, validation, resetting, readability, and how each scales.

## Comparison

## Controlled components

**What's good about them:** React has direct control over every value, so real-time validation and conditional rendering are easy. Form state is trivial to share with other components, and resetting is just resetting state.

**What costs you:** State for every field, an `onChange` for every field, and more code overall once a form gets big — every keystroke triggers a state update.

## Uncontrolled components

**What's good about them:** Barely any React state to manage. Forms stay lightweight, the DOM does what it already knows how to do, and native form APIs work as-is. Good fit when you only care about the values at submission.

**What costs you:** React has no idea what's changing as the user types, so real-time validation means reaching into the DOM. Keeping values in sync with other components is harder too.

## Uncontrolled + `useRef`

Same as uncontrolled, but with a ref pointed at the form so you can grab values when you need them:

**What's good about it:** No per-field state, direct access to the form, plays nicely with `FormData`, and keeps individual inputs simple.

**What costs you:** Still no automatic change tracking, real-time validation still needs extra logic, and you now need to be comfortable with both `useRef` and native DOM APIs. Data flow is a bit less obvious than the fully controlled version.

---

## What actually stands out

**Code style** — controlled forms need more code up front, since every field is wired to state and a handler. Uncontrolled forms can be a lot leaner if all you need is the value at submit time.

**Validation** — controlled wins for real-time feedback, since React always has the current value. Uncontrolled is fine when validation only needs to happen once, on submit.

**Reset** — controlled resets by updating state. Uncontrolled gets the browser's native reset for free.

**Readability** — controlled makes state ownership obvious at the cost of more lines. Uncontrolled trims the code but hides the current values from the component itself.

**Complexity** — controlled gets more verbose as fields pile up but gives you more control. Uncontrolled keeps React state light but pulls in DOM APIs once you need more than the basics.

---

## So, which one?

There's no default winner here.

Go **controlled** when the form needs real control — validation as you type, conditional UI, keeping state in sync elsewhere.

Go **uncontrolled** when the form is simple and you mostly care about the values at submission.

**Uncontrolled + `useRef`** sits in between — direct DOM access without putting every field into state.

The actual takeaway: pick based on what the form needs to do, not out of habit.

> **Controlled = React owns the state.**
> **Uncontrolled = the DOM owns the state.**
