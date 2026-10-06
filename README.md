# Fragment documents miss the fragments they spread (graphQLTag)

With `documentMode: graphQLTag`, `UserFieldsFragmentDoc` spreads `...AddressFields` but does not include `${AddressFieldsFragmentDoc}`. Apollo Client then fails when you use the fragment document on its own.

```sh
npm install
npm start
```

Output:

```
UserFieldsFragmentDoc:

fragment UserFields on User {
  id
  name
  address {
    ...AddressFields
  }
}

writeFragment failed: No fragment named AddressFields
```

See `types.ts` for the generated code.
