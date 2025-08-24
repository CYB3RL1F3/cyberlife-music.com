// codegen.ts
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
      plugins: [
        'typescript', // types du schéma
        'typescript-operations', // types par opération
        'typescript-react-apollo', // hooks React (useQuery/useMutation…)
      ],
      config: {
        withHooks: true,
        avoidOptionals: true,
        useTypeImports: true,
        gqlTagName: 'gql',
        gqlImport: 'graphql-tag',
        skipTypename: true,
      },
    },
  },
  ignoreNoDocuments: false,
};

export default config;
