React Drag Event Interactive
===

[![Buy me a coffee](https://img.shields.io/badge/Buy%20me%20a%20coffee-048754?logo=buymeacoffee)](https://jaywcjlove.github.io/#/sponsor)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-drag-event-interactive)](https://bundlephobia.com/package/@uiw/react-drag-event-interactive) [![npm version](https://img.shields.io/npm/v/@uiw/react-drag-event-interactive.svg)](https://www.npmjs.com/package/@uiw/react-drag-event-interactive) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-drag-event-interactive/file/README.md)

Interactive Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).

## Install

```bash
npm i @uiw/react-drag-event-interactive
```

## Usage

```jsx mdx:preview
import React, { useState } from 'react';
import Interactive from '@uiw/react-drag-event-interactive';

const pointStyle = { width: 5, height: 5, backgroundColor: '#fff', position: 'absolute', borderRadius: 3, border: '1px solid rgb(51, 51, 51)' }
const wrapper = { width: 120, height: 120, background: 'red', position: 'relative' }

function Demo() {
  const [data, setData] = useState({
    left: 0.10,
    top: 0.10,
  })
  const handleChange = (interaction, event) => setData(interaction);
  const point = { left: `${data.left * 100}%`, top: `${data.top * 100}%`, ...pointStyle }
  return (
    <div>
      <Interactive
        style={wrapper}
        onMove={handleChange}
        onDown={handleChange}
      >
        <div style={point} />
      </Interactive>
      <pre>
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}

export default Demo;
```

## Props

```ts
import React from 'react';
export declare function useEventCallback<T, K>(handler?: (value: T, event: K) => void): (value: T, event: K) => void;
export declare const isTouch: (event: MouseEvent | TouchEvent) => event is TouchEvent;
export declare const preventDefaultMove: (event: MouseEvent | TouchEvent) => void;
export declare const clamp: (number: number, min?: number, max?: number) => number;
export interface Interaction {
  left: number;
  top: number;
  width: number;
  height: number;
  x: number;
  y: number;
}
export declare const getRelativePosition: (node: HTMLDivElement, event: MouseEvent | TouchEvent) => Interaction;
export interface InteractiveProps extends React.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  onMove?: (interaction: Interaction, event: MouseEvent | TouchEvent) => void;
  onDown?: (offset: Interaction, event: MouseEvent | TouchEvent) => void;
}
```

<!--footer-dividing-->

## Contributors

As always, thanks to our amazing contributors!

<a href="https://uiwjs.github.io/react-color/graphs/contributors">
  <img src="https://uiwjs.github.io/react-color/coverage/CONTRIBUTORS.svg" />
</a>

Made with [contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
