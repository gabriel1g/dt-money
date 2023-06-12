import { useForm } from 'react-hook-form';

import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';

import { TransactionsContext } from '@contexts/TransactionsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { MagnifyingGlass } from '@phosphor-icons/react';

import { SearchFormContainer } from './styles';

type SearchFormSchemaType = zod.infer<typeof searchFormScheme>;

const searchFormScheme = zod.object({
  query: zod.string(),
});

export function SearchForm() {
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => context.fetchTransactions);

  const { register, handleSubmit, formState } = useForm<SearchFormSchemaType>({
    resolver: zodResolver(searchFormScheme),
  });

  async function handleSearchTransactions(data: SearchFormSchemaType) {
    await fetchTransactions(data.query);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input placeholder="Busque por transações" type="text" {...register('query')} />
      <button disabled={formState.isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  );
}
