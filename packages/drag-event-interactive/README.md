React Drag Event Interactive
===

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