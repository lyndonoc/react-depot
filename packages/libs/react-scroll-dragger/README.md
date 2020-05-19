# React Scroll Dragger

Simple drop-in container for enabling horizontal drag scrolling.

```jsx
import DragScroll from 'react-scroll-dragger'

<DragScroll
  componentsOrder={["prev_button", "children", "next_button"]}
>
  {items.map((item) => {
    return (
      <Item item={item} />
    );
  }}
</DragScroll>
```

Check out the [live demo](https://lyndonoc.github.io/react-depot/react-scroll-dragger?app=react-scroll-dragger).

## Install

```bash
npm install react-scroll-dragger
```

## API

### Props

#### `componentsMap: Array<string>`

An array of strings that will determine the order in which components (buttons and items to be scrolled) are rendered. Available options are `prev_button`, `children`, and `next_button`.

Default value: `["prev_button", "children", "next_button"]`
