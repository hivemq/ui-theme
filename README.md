# Gotchas

Each project has to generate the types for the theme, it cannot be exported by default

```bash
pnpm install @chakra-ui/cli
```

And then set as a postinstall command in the `package.json`

```json
{
  "scripts": {
    "postinstall": "chakra-cli tokens ../theme/src/main.ts"
  }
}
```
