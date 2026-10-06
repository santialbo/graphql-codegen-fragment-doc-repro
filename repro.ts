import { InMemoryCache } from "@apollo/client";
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import { print } from "graphql";
import { UserFieldsFragmentDoc } from "./types";

console.log("UserFieldsFragmentDoc:\n");
console.log(print(UserFieldsFragmentDoc));

loadDevMessages();
loadErrorMessages();

const cache = new InMemoryCache();

try {
  cache.writeFragment({
    fragment: UserFieldsFragmentDoc,
    id: "User:1",
    data: {
      __typename: "User",
      id: "1",
      name: "Ann",
      address: { __typename: "Address", street: "Main St", zip: "08001" },
    },
  });
  console.log("\nwriteFragment: OK");
} catch (error) {
  console.log("\nwriteFragment failed:", (error as Error).message);
}
