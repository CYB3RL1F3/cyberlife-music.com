// codegen.ts
import type { CodegenConfig } from '@graphql-codegen/cli';
import * as dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.API_URL;
const API_TOKEN = process.env.API_TOKEN;

const schema: CodegenConfig['schema'] = API_URL
  ? [
      {
        [API_URL]: {
          headers: API_TOKEN ? { Authorization: `Bearer ${API_TOKEN}` } : {},
        },
      },
    ]
  : './graphql-schema.json';

const config: CodegenConfig = {
  schema,
  documents: ['app/gql/**/*.{gql,graphql}'],
  generates: {
    'app/types/gql/types.ts': {
      plugins: ['typescript'],
      config: { useTypeImports: true },
    },

    'app/types/gql/': {
      preset: 'near-operation-file',
      presetConfig: {
        extension: '.ts',
        baseTypesPath: './types.ts',
        folder: '.',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
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

  pluckConfig: {
    modules: [
      { name: '@apollo/client', identifier: 'gql' },
      { name: 'graphql-tag', identifier: 'gql' },
    ],
  },
};

export default config;
