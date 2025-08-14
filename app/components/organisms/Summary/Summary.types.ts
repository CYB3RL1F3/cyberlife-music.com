import { SummaryQuerySummary } from '~/types/gql/SummaryQuery';

export type SummaryProps = Omit<SummaryQuerySummary, '__typename'>;
