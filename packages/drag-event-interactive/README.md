React Drag Event Interactive
===

[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)

Interactive Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

## Install

```bash
npm i @uiw/react-drag-event-interactive
```

## Usage

```js
import Interactive from '@uiw/react-drag-event-interactive';

function Demo() {
  return (
    <Interactive hsva={{ h: 0, s: 75, v: 82, a: 1 }} />
  );
}
```

## Props

```ts
import { Interaction } from '@uiw/react-drag-event-interactive';

interface Interaction {
  left: number;
  top: number;
}

interface InteractiveProps extends React.HTMLAttributes<HTMLDivElement> {
  onMove?: (interaction: Interaction, event: MouseEvent | TouchEvent) => void;
  onDown?: (offset: Interaction, event: MouseEvent | TouchEvent) => void;
}
```

<!--footer-dividing-->

## License

Licensed under the MIT License.
