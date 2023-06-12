import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2.5rem 0rem 7.5rem;
  background-color: ${({ theme }) => theme['gray-900']};

  .layout {
    max-width: 70rem;
    padding: 0 1.5rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 6px;
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['white']};
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.1s;

  &:hover {
    background-color: ${({ theme }) => theme['green-300']};
  }
`;
