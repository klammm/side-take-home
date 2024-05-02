'use client';

import styled from 'styled-components';
import { breakpointSizes } from 'styles/breakpoints';

export const HeaderContainer = styled.header`
    background: #373342;
    color: #FFFFFF;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 2;
    height: 4rem;
    padding-left: 0.5rem;

    @media only screen and (min-width: ${breakpointSizes.tablet_landscape}) {
        height: 6.5rem;
        padding-left: 2rem;
    }
`;
