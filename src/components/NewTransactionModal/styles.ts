import styled, { css } from 'styled-components';

import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  inset: 0;
`;

export const Content = styled(Dialog.Content)`
  width: 32rem;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .btn-close {
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme['gray-500']};
    line-height: 0;
    cursor: pointer;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  .transaction_type {
    display: flex;
    gap: 1rem;
  }

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      input {
        width: 100%;
        padding: 1rem;
        border: none;
        border-radius: 6px;
        background-color: ${({ theme }) => theme['gray-900']};
        color: ${({ theme }) => theme['gray-300']};

        &::placeholder {
          color: ${({ theme }) => theme['gray-500']};
        }

        &:focus {
          box-shadow: 0 0 0 1px ${({ theme }) => theme['green-300']};
        }
      }

      p {
        margin-top: 0.3rem;
        color: ${({ theme }) => theme['red-500']};
        font-size: 0.85rem;
      }
    }

    button[type='submit'] {
      padding: 1rem 2rem;
      border: none;
      border-radius: 6px;
      margin-top: 2rem;
      background-color: ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme['white']};
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.1s;

      &:hover {
        background-color: ${({ theme }) => theme['green-700']};
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

interface TransactionTypeButtonProps {
  variant: 'income' | 'expense';
}

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  width: 50%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 6px;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.1s;
  ${({ theme, variant }) => {
    switch (variant) {
      case 'income':
        return css`
          &[data-state='unchecked'] {
            background-color: ${({ theme }) => theme['gray-700']};
            color: ${({ theme }) => theme['gray-300']};

            svg {
              color: ${theme['green-300']};
            }
          }

          &[data-state='checked'] {
            background-color: ${theme['green-700']};
            color: ${theme['white']};

            &:hover {
              background-color: ${theme['green-700']};
            }
          }
        `;
      case 'expense':
        return css`
          &[data-state='unchecked'] {
            background-color: ${({ theme }) => theme['gray-700']};
            color: ${({ theme }) => theme['gray-300']};

            svg {
              color: ${theme['red-300']};
            }
          }

          &[data-state='checked'] {
            background-color: ${theme['red-700']};
            color: ${theme['white']};

            &:hover {
              background-color: ${theme['red-700']};
            }
          }
        `;
    }
  }}

  &[data-state="unchecked"]:hover {
    background-color: ${({ theme }) => theme['gray-600']};
  }
`;
