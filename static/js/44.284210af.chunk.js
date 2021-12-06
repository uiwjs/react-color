(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[44],{437:function(e,n,t){"use strict";t.r(n),n.default="React Color Sketch\n===\n\n[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@uiw/react-color-sketch)](https://bundlephobia.com/package/@uiw/react-color-sketch) [![npm version](https://img.shields.io/npm/v/@uiw/react-color-sketch.svg)](https://www.npmjs.com/package/@uiw/react-color-sketch) [![Open in unpkg](https://img.shields.io/badge/Open%20in-unpkg-blue)](https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color-sketch/file/README.md)\n\nSketch Component is a subcomponent of [**`@react-color`**](https://uiwjs.github.io/react-color).\n\n[![react-color-sketch](https://user-images.githubusercontent.com/1680273/125952146-290199b4-8810-4552-944b-3ee673fb4350.png)](https://uiwjs.github.io/react-color/#/sketch)\n\n## Install\n\n```bash\nnpm i @uiw/react-color-sketch\n```\n\n## Usage\n\n```js\nimport Sketch from '@uiw/react-color-sketch';\n\nfunction Demo() {\n  const [hex, setHex] = useState(\"#fff\");\n  return (\n    <Sketch\n      style={{ marginLeft: 20 }}\n      color={hex}\n      onChange={(color) => {\n        setHex(color.hex);\n      }}\n    />\n  );\n}\n```\n\n## Props\n\n```ts\nimport { ColorResult } from '@uiw/color-convert';\nexport type PresetColor = { color: string; title: string } | string;\nexport interface SketchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'color'> {\n  prefixCls?: string;\n  width?: number;\n  color?: string | HsvaColor;\n  presetColors?: false | PresetColor[];\n  editableDisable?: boolean;\n  onChange?: (newShade: ColorResult) => void;\n}\n```\n\n\x3c!--footer-dividing--\x3e\n\n## License\n\nLicensed under the MIT License.\n"}}]);
//# sourceMappingURL=44.284210af.chunk.js.map