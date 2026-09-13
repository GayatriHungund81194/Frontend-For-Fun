# Book Tracker Learning Project

This folder contains a step-by-step JavaScript and CSS learning project for building a small book tracker app.

The goal is to teach core front-end ideas in a simple, visual way:

- how to create HTML elements
- how to connect JavaScript to the page
- how to add, update, and delete book entries
- how to save data in browser local storage
- how different CSS properties change the look and feel of a UI

---

## Folder structure

```text
Book_Tracker/
├── README.md
├── Basic/
│   ├── 01_book_tracker_create.html
│   ├── 02_book_tracker_add_items.html
│   ├── 03_book_tracker_delete_items.html
│   ├── 04_book_tracker_update_items.html
│   ├── 05_book_tracker_update_author.html
│   ├── 06_book_tracker_css_intro.html
│   ├── 07_book_tracker_index_update_author.html
│   ├── 08_book_tracker_add_local_storage.html
│   ├── 09_book_tracker_add_search.html
│   └── Book_Tracker_Basic_README.md
└── Styled/
    ├── 01_book_tracker_basic_layout.html
    ├── 02_book_tracker_hover_transitions.html
    └── 03_book_tracker_card_layout_hover.html
```

---

## Basic section

The files in the `Basic` folder build the app step by step.

### Progression

1. Create the basic page structure
2. Add books to the list
3. Delete books from the list
4. Update existing book entries
5. Add author and rating fields
6. Introduce CSS styling
7. Improve the update flow
8. Save books with localStorage
9. Search through books by name

This is a great way to see how one feature builds on the previous one.

---

## Styled section

The files in the `Styled` folder focus on different CSS design ideas.

### 1. Basic layout
File: `01_book_tracker_basic_layout.html`

This file teaches:
- `display: flex`
- `justify-content: space-between`
- `align-items: center`
- spacing with `padding`, `margin`, and `gap`

Why it matters:
- These rules help arrange items neatly in a row or column.
- The layout becomes cleaner and easier to read.

### 2. Hover transitions
File: `02_book_tracker_hover_transitions.html`

This file teaches:
- `transition`
- `transform: translateY(...)`
- `box-shadow`
- `border-left`
- `:hover` pseudo-class

Why it matters:
- Transitions make UI elements feel smoother and more interactive.
- Hover effects give feedback to the user when they move the mouse over an item.

### 3. Card layout with hover design
File: `03_book_tracker_card_layout_hover.html`

This file teaches:
- CSS Grid with `display: grid`
- `grid-template-columns: repeat(3, 1fr)`
- `gap` between cards
- `flex-direction: column` inside each card
- stronger shadows and rounded corners
- background and accent color styling

Why it matters:
- Grid is useful for arranging multiple cards in a clean layout.
- Card design makes each book look like a separate UI object rather than a plain list item.

---

## Key CSS style elements used

### Layout and spacing
- `margin`: space outside an element
- `padding`: space inside an element
- `gap`: space between child elements in flex/grid containers

### Positioning
- `display: flex`: arranges child elements in a row or column
- `display: grid`: creates columns and rows for structured layouts
- `justify-content: space-between`: spreads items across available space
- `align-items: center`: vertically aligns items in the container

### Visual styling
- `background-color`: fills the background of an element
- `border-radius`: rounds corners
- `box-shadow`: creates a soft depth effect
- `border-left`: adds an accent line on one side of the card

### Interaction and motion
- `transition`: smooth animation between styles
- `transform: translateY(...)`: moves an element slightly upward or downward
- `:hover`: changes styles when the mouse is over the element

---

## Suggested learning order

1. Start with the files in `Basic/`
2. Build the app logic step by step
3. Open the files in `Styled/` to see how CSS improves design
4. Compare the difference between plain layout and polished cards
5. Try changing colors, spacing, shadows, and transitions yourself

---

## Notes

These are beginner exercises, so the code is intentionally simple and easy to understand. The main idea is to learn by experimentation and by seeing how small CSS changes affect the user experience.
