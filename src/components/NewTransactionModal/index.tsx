import { ReactNode } from 'react';
import { Controller, useForm } from 'react-hook-form';

import { useContextSelector } from 'use-context-selector';
import * as zod from 'zod';

import { TransactionsContext } from '@contexts/TransactionsContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowCircleDown, ArrowCircleUp, X } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import { Content, Overlay, TransactionTypeButton } from './styles';

type NewTransactionModalSchemaType = zod.infer<typeof newTransactionModalSchema>;

interface NewTransactionModalProps {
  children: ReactNode;
}

const newTransactionModalSchema = zod.object({
  description: zod.string().min(1, 'Digite a descrição da transação'),
  price: zod.number().min(1, 'Insira um valor maior que zero'),
  category: zod.string().min(1, 'Digite a categoria da transação'),
  type: zod.enum(['income', 'expense']),
});

export function NewTransactionModal({ children }: NewTransactionModalProps) {
  const createNewTransaction = useContextSelector(TransactionsContext, (context) => context.createNewTransaction);

  const { control, register, handleSubmit, formState, reset } = useForm<NewTransactionModalSchemaType>({
    resolver: zodResolver(newTransactionModalSchema),
    defaultValues: {
      price: 0,
      type: 'income',
    },
  });

  async function handleCreateNewTransaction(data: NewTransactionModalSchemaType) {
    await createNewTransaction(data);

    reset();
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild={true}>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Dialog.Title>Nova transação</Dialog.Title>
          <Dialog.Close className="btn-close">
            <X size={24} />
          </Dialog.Close>
          <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
            <div>
              <input placeholder="Descrição" type="text" {...register('description')} />
              <p>{formState.errors.description?.message}</p>
            </div>
            <div>
              <input placeholder="Preço" type="text" {...register('price', { valueAsNumber: true })} />
              <p>{formState.errors.price?.message}</p>
            </div>
            <div>
              <input placeholder="Categoria" type="text" {...register('category')} />
              <p>{formState.errors.category?.message}</p>
            </div>

            <Controller
              control={control}
              name="type"
              render={({ field }) => (
                <RadioGroup.Root onValueChange={field.onChange} value={field.value}>
                  <div className="transaction_type">
                    <TransactionTypeButton variant="income" value="income">
                      <ArrowCircleUp size={24} />
                      Entrada
                    </TransactionTypeButton>
                    <TransactionTypeButton variant="expense" value="expense">
                      <ArrowCircleDown size={24} />
                      Saída
                    </TransactionTypeButton>
                  </div>
                </RadioGroup.Root>
              )}
            />
            <button disabled={formState.isSubmitting} type="submit">
              Cadastrar
            </button>
          </form>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
