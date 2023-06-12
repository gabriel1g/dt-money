import { ReactNode, useCallback, useEffect, useState } from 'react';

import { createContext } from 'use-context-selector';

import { TransactionDTO } from '@dtos/TransactionDTO';
import { api } from '@lib/axios';

interface CreateNewTransactionType {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'expense';
}

interface TransactionsContextType {
  transactions: TransactionDTO[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: CreateNewTransactionType) => Promise<void>;
}

interface TransactionsContextProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionsContextType);

export function TransactionsContextProvider({ children }: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<TransactionDTO[]>([]);

  const fetchTransactions = useCallback(async (query?: string) => {
    const { data } = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    });

    setTransactions(data);
  }, []);

  const createNewTransaction = useCallback(async (data: CreateNewTransactionType) => {
    const formattedData = { ...data, createdAt: new Date() };

    await api.post('/transactions', formattedData);
    await fetchTransactions();
  }, []);

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createNewTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
