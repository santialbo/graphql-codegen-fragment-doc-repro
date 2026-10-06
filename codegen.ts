import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "schema.graphql",
  documents: "document.graphql",
  generates: {
    "types.ts": {
      plugins: ["typescript", "typescript-operations", "typed-document-node"],
      config: {
        documentMode: "graphQLTag",
        gqlImport: "@apollo/client#gql",
      },
    },
  },
};

export default config;
