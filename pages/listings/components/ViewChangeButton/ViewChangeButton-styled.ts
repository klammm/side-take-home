'use client';

import styled from 'styled-components';
import { breakpointSizes } from 'styles/breakpoints';

export const ViewChangeButton = styled.button`
  background-color: #CE87C1;
  width: 8.125rem;
  height: 3.75rem;
  text-transform: capitalize;
  position: sticky;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  border-radius: 4px;


  @media only screen and (min-width: ${breakpointSizes.tablet}) {
    display: none;
  }
`;