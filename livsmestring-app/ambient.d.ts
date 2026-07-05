// Ambient module declaration for importing SCSS modules in TypeScript.
// This tells the TypeScript compiler that importing `*.scss` files
// returns an object mapping class names to generated CSS class strings.
// Keeping this declaration avoids TS errors when using CSS modules.
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}