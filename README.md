# Interfaces vs. Types in TypeScript
TypeScript give us two way to describe data shape: interface and type. Interface is like blueprint for object, it list property and their type. Type alias can also describe object, but also can name primitive, union, tuple or any other type. For example, you can write type Color = "red" | "green" but you cannot do same with interface.

Interfaces are “open”, you can add more propetries later by redeclare same name. Type alias is fixed, once you declare you cannot add new fields. Many documentation says use interface when possible, because interface more closely map to how JavaScript object work. But when you need fancy union or tuple, use type alias.

So in practice, if you want simple object shape that maybe extend later, use interface. If you need combination of many types or union, use type alias.





# Understanding keyof in TypeScript
The keyof operator take an object type and produce union of its keys as string (or number). For example:

```ts
interface Point {
  x: number;
  y: number;
}
type P = keyof Point; // "x" | "y"
```
Here P become "x" | "y".

A common use is with generic function to safe access property of object. Like:

```ts
function getProp<A, B extends keyof A>(obj: A, key: B): A[B] {
  return obj[key];
}
```
This way, if you call getProp(person, "age"), compiler check “age” is key of person. If you try getProp(person, "unknown"), it error at compile time.

Using keyof make your code more type-safe and less mistake. Also you can build mapped type with keyof to create new type from existing object keys.