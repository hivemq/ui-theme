# @hivemq/ui-theme

This package contains the theme for all HiveMQ ChakraUI Projects.

## Setup .npmrc

To install the theme, you have to add the following line to your `.npmrc` file:

```bash
@hivemq:registry=https://npm.pkg.github.com
```

## Install Peer Dependencies

To install the peer dependencies, use the following command:

```bash
pnpm add @chakra-ui/react @emotion/react @emotion/styled framer-motion
```

## Install CLI tools

Each project has to generate the types for the theme, it cannot be exported by default.
Therefore we have to install the following dependency to our project.

```bash
pnpm add @chakra-ui/cli
```

And also include the generation to our postinstall command

```json
{
  "scripts": {
    "postinstall": "chakra-cli tokens @hivemq/ui-theme"
  }
}
```

## Install Theme

To install a theme, use the following command:

```bash
pnpm add @hivemq/ui-theme
```

## Install Font-Faces

Fonts are not being installed by the theme itself, so you have to install them per project.
For that you can use the following command to install the fonts you want to use in your project.
For example, [Roboto](https://www.npmjs.com/package/@fontsource/roboto) and [Raleway](https://www.npmjs.com/package/@fontsource/raleway) as these are also the default fonts used in the theme.

```bash
pnpm add @fontsource/roboto @fontsource/raleway
```

Then you can import these fonts ether in your `main.ts` file or `global.css` file.

```css
/* Install Roboto for general body text */
@import '../node_modules/@fontsource/roboto/100.css';
@import '../node_modules/@fontsource/roboto/300.css';
@import '../node_modules/@fontsource/roboto/400.css';
@import '../node_modules/@fontsource/roboto/500.css';
@import '../node_modules/@fontsource/roboto/700.css';
@import '../node_modules/@fontsource/roboto/900.css';

/* Install Raleway for heading text */
@import '../node_modules/@fontsource/raleway/100.css';
@import '../node_modules/@fontsource/raleway/200.css';
@import '../node_modules/@fontsource/raleway/300.css';
@import '../node_modules/@fontsource/raleway/400.css';
@import '../node_modules/@fontsource/raleway/500.css';
@import '../node_modules/@fontsource/raleway/600.css';
@import '../node_modules/@fontsource/raleway/700.css';
@import '../node_modules/@fontsource/raleway/800.css';
@import '../node_modules/@fontsource/raleway/900.css';
```
