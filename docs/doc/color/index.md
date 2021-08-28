---
title: Color
---

## 日期

### 快速上手

> 用于颜色转换和操作，支持 CSS 颜色字符串。

```tsx
import React from 'react';
import { Color } from '@seasonjs/tools';

export default function EchartColorExample() {
  const color = new Color('#7743CE').alpha(0.5).lighten(0.5);
  console.log(color.hsl().string()); // 'hsla(262, 59%, 81%, 0.5)'

  console.log(color.cmyk().round().array()); // [ 16, 25, 0, 8, 0.5 ]

  console.log(color.ansi256().object()); // { ansi256: 183, alpha: 0.5 }
  return (
    <>
      {color.hsl().string()}
      <br />
      {color.cmyk().round().array()}
      <br />
      {/*{color.ansi256().object()}*/}
    </>
  );
}
```

## 用法

```ts
import { Color } from '@seasonjs/tools';
```

### 调用构造函数

```tsx
import React from 'react';
import { Color } from '@seasonjs/tools';

export default () => {
  const color1 = new Color('rgb(255, 255, 255)');
  const color2 = new Color({ r: 255, g: 255, b: 255 });
  const color3 = Color.rgb(255, 255, 255);
  const color4 = Color.rgb([255, 255, 255]);
  return (
    <>
      {color1.toString()}
      <br />
      {color2.toString()}
      <br />
      {color3.toString()}
      <br />
      {color4.toString()}
    </>
  );
};
```

Set the values for individual channels with `alpha`, `red`, `green`, `blue`, `hue`, `saturationl` (hsl), `saturationv` (
hsv), `lightness`, `whiteness`, `blackness`, `cyan`, `magenta`, `yellow`, `black`

String constructors are handled by [color-string](https://www.npmjs.com/package/color-string)

### Getters

```ts
import { Color } from '@seasonjs/tools';

color.hsl();
```

Convert a color to a different space (`hsl()`, `cmyk()`, etc.).

```ts
import { Color } from '@seasonjs/tools';

color.object(); // {r: 255, g: 255, b: 255}
```

Get a hash of the color value. Reflects the color's current model (see above).

```ts
import { Color } from '@seasonjs/tools';

color.rgb().array(); // [255, 255, 255]
```

Get an array of the values with `array()`. Reflects the color's current model (see above).

```ts
import { Color } from '@seasonjs/tools';

color.rgbNumber(); // 16777215 (0xffffff)
```

Get the rgb number value.

```ts
import { Color } from '@seasonjs/tools';

color.hex(); // #ffffff
```

Get the hex value.

```ts
import { Color } from '@seasonjs/tools';

color.red(); // 255
```

Get the value for an individual channel.

### CSS Strings

```ts
import { Color } from '@seasonjs/tools';

color.hsl().string(); // 'hsl(320, 50%, 100%)'
```

Calling `.string()` with a number rounds the numbers to that decimal place. It defaults to 1.

### Luminosity

```ts
import { Color } from '@seasonjs/tools';

color.luminosity(); // 0.412
```

The [WCAG luminosity](http://www.w3.org/TR/WCAG20/#relativeluminancedef) of the color. 0 is black, 1 is white.

```ts
import { Color } from '@seasonjs/tools';

color.contrast(Color('blue')); // 12
```

The [WCAG contrast ratio](http://www.w3.org/TR/WCAG20/#contrast-ratiodef) to another color, from 1 (same color) to 21 (
contrast b/w white and black).

```ts
import { Color } from '@seasonjs/tools';

color.isLight(); // true
color.isDark(); // false
```

Get whether the color is "light" or "dark", useful for deciding text color.

### Manipulation

```ts
import { Color } from '@seasonjs/tools';

color.negate(); // rgb(0, 100, 255) -> rgb(255, 155, 0)

color.lighten(0.5); // hsl(100, 50%, 50%) -> hsl(100, 50%, 75%)
color.lighten(0.5); // hsl(100, 50%, 0)   -> hsl(100, 50%, 0)
color.darken(0.5); // hsl(100, 50%, 50%) -> hsl(100, 50%, 25%)
color.darken(0.5); // hsl(100, 50%, 0)   -> hsl(100, 50%, 0)

color.lightness(50); // hsl(100, 50%, 10%) -> hsl(100, 50%, 50%)

color.saturate(0.5); // hsl(100, 50%, 50%) -> hsl(100, 75%, 50%)
color.desaturate(0.5); // hsl(100, 50%, 50%) -> hsl(100, 25%, 50%)
color.grayscale(); // #5CBF54 -> #969696

color.whiten(0.5); // hwb(100, 50%, 50%) -> hwb(100, 75%, 50%)
color.blacken(0.5); // hwb(100, 50%, 50%) -> hwb(100, 50%, 75%)

color.fade(0.5); // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 0.4)
color.opaquer(0.5); // rgba(10, 10, 10, 0.8) -> rgba(10, 10, 10, 1.0)

color.rotate(180); // hsl(60, 20%, 20%) -> hsl(240, 20%, 20%)
color.rotate(-90); // hsl(60, 20%, 20%) -> hsl(330, 20%, 20%)

color.mix(Color('yellow')); // cyan -> rgb(128, 255, 128)
color.mix(Color('yellow'), 0.3); // cyan -> rgb(77, 255, 179)

// chaining
color.green(100).grayscale().lighten(0.6);
```

## Propers

The API was inspired by [color-js](https://github.com/brehaut/color-js). Manipulation functions by CSS tools like Sass,
LESS, and Stylus.
