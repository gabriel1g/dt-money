import Logo from '@assets/logo.svg';
import { NewTransactionModal } from '@components/NewTransactionModal';

import { HeaderContainer, NewTransactionButton } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <div className="layout">
        <img src={Logo} />

        <NewTransactionModal>
          <NewTransactionButton>Nova transação</NewTransactionButton>
        </NewTransactionModal>
      </div>
    </HeaderContainer>
  );
}
