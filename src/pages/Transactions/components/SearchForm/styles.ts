import styled from 'styled-components';

export const SearchFormContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  gap: 1rem;

  input {
    padding: 1rem;
    border: none;
    border-radius: 6px;
    background-color: ${({ theme }) => theme['gray-900']};
    color: ${({ theme }) => theme['gray-300']};
    flex-grow: 1;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }

    &:focus {
      box-shadow: 0 0 0 1px ${({ theme }) => theme['green-300']};
    }
  }

  button {
    padding: 0.875rem 1.25rem;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    background-color: transparent;
    color: ${({ theme }) => theme['green-300']};
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
    transition: all 0.1s;

    &:not(:disabled):hover {
      border-color: ${({ theme }) => theme['green-500']};
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme['white']};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`;
