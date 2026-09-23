# Machine Coding Round — Toast / Notification System

**Time box:** 45–60 minutes
**Allowed:** React, Context API, plain `useState` (no external toast libraries, no `useReducer` — that's the next round)

## Problem Statement

Build a global toast/notification system for a React application. Any component in the tree — regardless of nesting depth — should be able to trigger a toast notification without prop drilling. Toasts should stack, auto-dismiss after a fixed duration, and support manual dismissal.

You are free to design the component/file structure, but it must not rely on prop drilling to pass the trigger function down.

## Functional Requirements

1. Expose a way for **any component** to call something like `showToast(message, type)` and have a toast appear in a fixed position on screen (e.g. top-right corner).
2. Support at least three toast types: `success`, `error`, `info` — each should be visually distinguishable (color/icon).
3. Multiple toasts triggered in quick succession must **stack**, not overwrite each other.
4. Each toast **auto-dismisses** after ~3 seconds.
5. Each toast has a **manual close ("×") button** that removes it immediately, independent of its timer.
6. Rendering of the toast stack must be **decoupled** from the component that triggers it — i.e. a `ToastContainer` mounted once near the root handles all rendering; other components only ever call the trigger function.

## Non-Functional / Engineering Constraints

- No external state library, no `useReducer`. Plain `useState` + Context only.
- No prop drilling — the trigger function must be accessible via a custom hook from anywhere in the tree.
- Each toast needs a **unique id**. Think about why `Date.now()` alone isn't safe if two toasts can fire in the same millisecond.
- Timers must be **cleaned up correctly** — no dismissing the wrong toast, no memory leaks/dangling timers if a toast is removed manually before its timer fires.
- State updates on the toast list must be done **immutably**.

## Deliverables

- A `ToastProvider` wrapping the app (wire it up in `main.jsx`).
- A custom hook (e.g. `useToast`) that any component can call to get `showToast` (and optionally `removeToast`).
- A `ToastContainer` component that renders the active toasts.
- At least one demo component, nested at least 2–3 levels deep from the provider, with a button that triggers a toast — proving there's no prop drilling.

## Suggested File Structure

```
Hooks/Toast Context/
  ToastContext.jsx       # createContext
  ToastProvider.jsx      # useState([]) + showToast + removeToast + renders ToastContainer
  useToastContext.jsx    # custom hook wrapping useContext
src/
  components/
    ToastContainer.jsx   # (or co-located in the provider — your call)
```

## Evaluation Criteria

- Does triggering a toast from a deeply nested component work with zero prop drilling?
- Do toasts stack correctly instead of clobbering each other?
- Does auto-dismiss work without dismissing the wrong toast when multiple are active?
- Does manual close work independently of the timer, and does it clean up the pending timeout?
- Is state updated immutably throughout?
- Is the API ergonomic — would you want to call `showToast(...)` in a real app?

## Bonus (only if time remains)

- Configurable duration per toast (`showToast(message, type, duration)`).
- Pause auto-dismiss timer on hover, resume on mouse leave.
- Limit max visible toasts (e.g. 3) and queue the rest.
