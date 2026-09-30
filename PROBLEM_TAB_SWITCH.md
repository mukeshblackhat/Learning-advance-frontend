# Machine Coding Round — Contextual Tab Navigation (Compound Components)

**Time box:** 45–60 minutes
**Allowed:** React, Context API, `useState` (no external UI/tab libraries, no router)

## Problem Statement

Build a reusable **Tabs** component using the **compound component pattern**. Consumers should compose tabs declaratively, and the sub-components (`Tabs.List`, `Tabs.Tab`, `Tabs.Panel`) must share state implicitly through Context — **no prop drilling** of `activeTab` / `setActiveTab` from the parent into each child.

The target usage looks like this:

```jsx
<Tabs defaultValue="profile">
  <Tabs.List>
    <Tabs.Tab value="profile">Profile</Tabs.Tab>
    <Tabs.Tab value="settings">Settings</Tabs.Tab>
    <Tabs.Tab value="billing" disabled>Billing</Tabs.Tab>
  </Tabs.List>

  <Tabs.Panel value="profile"><ProfileForm /></Tabs.Panel>
  <Tabs.Panel value="settings"><SettingsPage /></Tabs.Panel>
  <Tabs.Panel value="billing"><BillingPage /></Tabs.Panel>
</Tabs>
```

You are free to design the file structure, but `Tabs.Tab` and `Tabs.Panel` must get their state from Context, not from props passed down by `Tabs`.

## Functional Requirements

1. `Tabs` accepts a `defaultValue` and renders the matching tab as active on first render.
2. Clicking a `Tabs.Tab` makes it active and shows **only** its matching `Tabs.Panel`.
3. The active tab is **visually distinguishable** (e.g. underline / bold / different color).
4. A tab with `disabled` cannot be selected and looks disabled.
5. Tabs and panels are matched by `value`, **not by index** — order of `Tabs.Panel` children must not matter.
6. Sub-components can be **wrapped or nested** (e.g. a `Tabs.Tab` inside a `<div>` or custom wrapper) and still work — this is why Context beats `React.Children.map` + `cloneElement`.
7. Multiple independent `<Tabs>` instances on the same page must not interfere with each other.

## Non-Functional / Engineering Constraints

- No prop drilling — sub-components read state via a custom hook (e.g. `useTabsContext`).
- Using `Tabs.Tab` / `Tabs.Panel` **outside** a `<Tabs>` must throw a clear, descriptive error (not a cryptic `undefined` crash).
- Memoize the context value so consumers don't re-render unnecessarily.
- Accessibility basics: `role="tablist"`, `role="tab"`, `role="tabpanel"`, `aria-selected`, `aria-controls` / `aria-labelledby` wired with generated ids (think `useId`).

## Deliverables

- A `Tabs` root component that owns state and provides it via Context.
- `Tabs.List`, `Tabs.Tab`, `Tabs.Panel` attached as static properties on `Tabs`.
- A custom hook `useTabsContext` with the "used outside provider" guard.
- A demo in `App.jsx` with **at least two** independent `<Tabs>` instances, one of which has a disabled tab and one where a `Tabs.Tab` is wrapped in an extra element.

## Suggested File Structure

```
context/Tabs/
  TabsContext.jsx      # createContext + useTabsContext hook (with guard)
components/Tabs/
  Tabs.jsx             # root: useState(defaultValue) + Provider; attaches List/Tab/Panel
  TabList.jsx
  Tab.jsx
  TabPanel.jsx
```

## Evaluation Criteria

- Is the consumer API clean and declarative (compound component pattern done right)?
- Does state flow purely through Context with zero prop drilling?
- Does matching by `value` work regardless of child order and nesting?
- Is the outside-provider error handled gracefully?
- Are multiple Tabs instances isolated?
- Are the ARIA roles/attributes correct?

## Bonus (only if time remains)

- **Controlled mode:** support `value` + `onValueChange` props (controlled) alongside `defaultValue` (uncontrolled), like native inputs.
- **Keyboard navigation:** ← / → move between tabs (skipping disabled ones), `Home` / `End` jump to first/last.
- **Lazy panels:** only mount a panel the first time it's activated, then keep it mounted (preserve form state when switching back).
- Sync the active tab to the URL query string (`?tab=settings`) so a refresh keeps the selection.
