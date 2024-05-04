import { FC } from 'react';

import * as S from './ViewChangeButton-styled';

interface ViewChangeButtonProps {
  onClick: () => void;
  mode: string;
}

export const ViewChangeButton: FC<ViewChangeButtonProps> = ({ onClick, mode }) => (
  <S.ViewChangeButton onClick={onClick} type="button" data-testid="ViewChangeButton">
    {mode} View
  </S.ViewChangeButton>
);
