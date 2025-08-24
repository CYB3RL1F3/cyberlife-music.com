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
  // 👉 on ne prend que tes fichiers d’opérations
  documents: ['app/gql/**/*.{gql,graphql}'],
  generates: {
    // 1) Types de base du schéma (reste dans app/types/gql)
    'app/types/gql/types.ts': {
      plugins: ['typescript'],
      config: { useTypeImports: true },
    },

    // 2) TOUT le code par opération sous app/types/gql/** (miroir de app/gql/**)
    // ⚠️ Pas de slash final ici
    'app/types/gql': {
      preset: 'near-operation-file',
      presetConfig: {
        // fichier généré par op
        extension: '.ts', // exigé par typescript-react-apollo
        // pas de sous-dossier __generated__
        folder: '.',
        // import relatif vers les types du schéma
        baseTypesPath: 'types.ts',
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

  // on veut échouer s’il n’y a pas de documents
  ignoreNoDocuments: false,
};

export default config;
