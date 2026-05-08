export const MyEnum = new Proxy(
  {},
  {
    get(_, property) {
      return property
    },
  },
)
