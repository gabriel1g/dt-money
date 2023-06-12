import { useSummary } from '@hooks/useSummary';
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from '@phosphor-icons/react';

import { SummaryCard, SummaryContainer } from './styles';

export function Summary() {
  const summary = useSummary();

  return (
    <SummaryContainer>
      <SummaryCard>
        <div className="top">
          <span>Entradas</span>
          <ArrowCircleUp size={32} />
        </div>
        <strong>{summary.income}</strong>
      </SummaryCard>

      <SummaryCard>
        <div className="top">
          <span>Saídas</span>
          <ArrowCircleDown size={32} />
        </div>
        <strong>{summary.expense}</strong>
      </SummaryCard>

      <SummaryCard variantColor="green">
        <div className="top">
          <span>Total</span>
          <CurrencyDollar size={32} />
        </div>
        <strong>{summary.total}</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}
