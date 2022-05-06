import styled from 'styled-components';
import { Typography, CardContent } from '../../../components';

export const LabelStyled = styled(Typography)`
  font-weight: 500;
  font-size: 1.5rem;
`;

export const ValueStyled = styled(Typography)`
  font-weight: 500;
  font-size: 2.2rem;
`;

export const CardContentStyled = styled(CardContent)`
  border-left: 8px solid ${({ color }) => color || '#5d78ff'};
`;

export const CardPanelContentStyled = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

export const LeftSidePanelStyled = styled(CardContent)`
  display: flex;
  flex-direction: column;
`

export const RightSidePanelStyled = styled(CardContent)`
  padding: 16px;
`

export const ItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  min-width: 150px;
`;