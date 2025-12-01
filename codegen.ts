// codegen.ts
import { maybeDependOnExistenceOfEntity } from '@apollo/client/cache/inmemory/entityStore';
import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;

const schema: CodegenConfig['schema'] = API_URL
  ? [{ [API_URL]: { headers: {} } }]
  : './graphql-schema.json';

const config: CodegenConfig = {
  schema,
  // uniquement tes documents d'opérations
  documents: ['app/gql/**/*.{gql,graphql}'],
  generates: {
    'app/types/gql.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        withHooks: true,
        avoidOptionals: false,
        useTypeImports: true,
        gqlTagName: 'gql',
        gqlImport: 'graphql-tag',
        skipTypename: true,
        omitOperationSuffix: true,
        maybeValue: 'T | null',
        arrayInputCoercion: false,
        wrapList: true,
        inputMaybeValue: 'T | null',
        namingConvention: {
          typeNames: 'change-case#pascalCase',
          enumValues: 'change-case#pascalCase',
        },
      },
    },
  },
  ignoreNoDocuments: false,
};

export default config;
