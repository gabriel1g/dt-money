import styled, { css } from 'styled-components';

export const SummaryContainer = styled.section`
  max-width: 70rem;
  padding: 0 1.5rem;
  margin: -5rem auto 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

interface SummaryCardProps {
  variantColor?: 'green';
}

export const SummaryCard = styled.div<SummaryCardProps>`
  padding: 1.5rem;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['gray-600']};
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  ${({ variantColor }) =>
    variantColor === 'green' &&
    css`
      background-color: ${({ theme }) => theme['green-700']};
    `}

  &:nth-child(1) {
    svg {
      color: ${({ theme }) => theme['green-300']};
    }
  }

  &:nth-child(2) {
    svg {
      color: ${({ theme }) => theme['red-300']};
    }
  }

  &:nth-child(3) {
    svg {
      color: ${({ theme }) => theme['white']};
    }
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme['gray-300']};
  }

  strong {
    font-size: 2rem;
  }
`;
