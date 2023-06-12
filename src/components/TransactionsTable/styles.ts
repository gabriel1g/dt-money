import styled from 'styled-components';

export const TransactionsTableContainer = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  tbody {
    td {
      padding: 1.25rem 2rem;
      background-color: ${({ theme }) => theme['gray-700']};

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;

interface PriceHighlightProps {
  variant: 'income' | 'expense';
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ theme, variant }) => {
    switch (variant) {
      case 'income':
        return theme['green-300'];
      case 'expense':
        return theme['red-300'];
    }
  }};
`;
