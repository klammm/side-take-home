'use client';

import styled from 'styled-components';
import { breakpointSizes } from 'styles/breakpoints';

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding-top: 4rem;

    @media only screen and (min-width: ${breakpointSizes.tablet}) {
        grid-template-columns: 1fr 1fr;
    }

    @media only screen and (min-width: ${breakpointSizes.tablet_landscape}) {
        padding-top: 6.5rem;
    }
`;