(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[36],{448:function(n,t,e){"use strict";e.r(t),t.default="React Color Editable Input RGBA\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-editable-input-rgba)](https://bundlephobia.com/package/@uiw/react-color-editable-input-rgba) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-editable-input-rgba.svg)](https://www.npmjs.com/package/@uiw/react-color-editable-input-rgba) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-editable-input-rgba/file/README.md)\n\nEditableInputRGBA Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-editable-input-rgba](https://user-images.githubusercontent.com/1680273/125950920-96bbfc1e-031a-4ea2-bfa2-28fab4d3c9d3.png)](https://uiwjs.github.io/react-color/#/editable-input-rgba)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-editable-input-rgba\n```\n\n## Usage\n\n```js\nimport { useState } from 'react';\nimport { hsvaToHex } from '@uiw/color-convert';\nimport EditableInputRGBA from '@uiw/react-color-editable-input-rgba';\n\nfunction Demo() {\n  const [hsva, setHsva] = useState({ h: 209, s: 36, v: 90, a: 1 });\n  return (\n    <div style={{ padding: '0 10px 0 20px' }}>\n      <EditableInputRGBA\n        hsva={hsva}\n        onChange={(color) => {\n          setHsva({ ...hsva, ...color.hsva });\n        }}\n      />\n    </div>\n  );\n}\n```\n\n## Props\n\n```ts\nimport { EditableInputProps } from '@uiw/react-color-editable-input';\n\ninterface EditableInputRGBAProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {\n  prefixCls?: string;\n  hsva: HsvaColor;\n  placement?: 'top' | 'left' | 'bottom' | 'right';\n  rProps?: EditableInputProps;\n  gProps?: EditableInputProps;\n  bProps?: EditableInputProps;\n  aProps?: EditableInputProps;\n  onChange?: (color: ColorResult) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=36.d50455ef.chunk.js.map