var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  css,
  theme,
  styled,
  config,
  globalCss,
  keyframes,
  getCssText,
  createTheme
} = createStitches({
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space"
  }),
  theme: {
    space: void 0,
    fonts: void 0,
    radii: void 0,
    colors: void 0,
    fontSizes: void 0,
    fontWeights: void 0,
    lineHeights: void 0
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray600"
});
export {
  Box
};
