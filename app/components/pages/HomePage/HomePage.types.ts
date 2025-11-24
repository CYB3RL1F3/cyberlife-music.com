import type { SummaryQuery } from '~/types/gql/SummaryQuery';

export type HomePageProps = {
  data?: SummaryQuery;
  loading?: boolean;
};
