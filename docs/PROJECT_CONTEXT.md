# Business OS - Project Context

_Last Updated: 31 July / 1 August 2026_

---

# Project Status

## Current Sprint

**Sprint Zero – Foundation & Application Shell**

Progress:

```
████████████████░░░░ 80%
```

---

# Completed

## Repository

- Git repository initialized inside `~/business-os`
- Initial foundation committed
- Business OS is now the canonical project
- Legacy project remains archived separately

---

## Application Shell

Completed:

- Reusable Card component
- Dashboard component
- Header
- Sidebar
- Layout
- AppContext
- Application shell integration
- Shared module navigation state

The application now has a permanent shell architecture instead of a prototype page.

---

## Processor

Operational.

Current modules:

- Inventory
- StrainBrain

Processor state updates continue to function correctly.

---

## Dashboard

Dashboard is now componentized.

Current widgets:

- Inventory
- Stock Weight
- Low Stock
- Cash Flow (placeholder)
- Sales (placeholder)
- Oracle (placeholder)

---

## Inventory

Current state:

- InventoryService operational
- Test asset creation operational
- Live totals operational
- Processor synchronization operational

Current data displayed:

- Assets
- Total Weight
- Inventory Value
- Low Stock Alerts

---

# Architecture Decision

Business OS uses a feature-based architecture.

```
src/
    app/
    components/
    context/
    modules/
    processor/
    services/
```

Each future feature will live inside its own folder.

Example:

```
modules/
    Inventory/
    Sales/
    CashFlow/
    Oracle/
```

---

# Outstanding Cleanup

Current duplicate module structure:

```
src/modules/
    Inventory.jsx
    Inventory/
        Inventory.jsx
```

Decision:

- Keep `modules/Inventory/Inventory.jsx`
- Remove the duplicate top-level `Inventory.jsx` after verifying it is unused.

---

# Next Milestone

Complete Sprint Zero by implementing Inventory CRUD.

Planned functionality:

- Create inventory items
- Read inventory
- Update inventory
- Delete inventory
- Search
- Filtering
- Firestore persistence

After Inventory CRUD:

Sprint One begins.

---

# Git Checkpoints

## Checkpoint 1

Initial Business OS foundation

Completed.

## Checkpoint 2 (Current)

Application Shell Complete

Includes:

- Card
- Header
- Sidebar
- Layout
- Dashboard
- AppContext
- Navigation foundation

Ready to commit.
