# Toast Node Library

[![npm shield](https://img.shields.io/npm/v/@fern-api/toast)](https://www.npmjs.com/package/@fern-api/toast)

This Node.js library provides access to the Toast API from JavaScript/TypeScript.

## Usage

[![Try it out](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/typescript-example-using-sdk-built-with-fern-thhxc9?file=app.ts)

```typescript
const toast = new HotschedulesToastClient({
  token: "MY_TOKEN",
});

const response = await toast.menus.getAll({
  toastRestaurantExternalId: "external-id"
});

for (const menu of response.menus ?? []) {
  console.log(menu.name)
  console.log(menu.description)
  console.log(menu.image)
}
```

