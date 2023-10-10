import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  // schema: "http://localhost:4000",
  schema: ['../schemas/**/*.graphql'],
  documents: "src/clientState/operations/**/*.ts",
  generates: {
    "src/generated/": {
      preset: "client",
      plugins: []
    },
    "./graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
