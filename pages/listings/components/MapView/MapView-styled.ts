'use client';

import styled from 'styled-components';
import { breakpointSizes } from 'styles/breakpoints';

export const MapViewContainer = styled.div<{ $show: boolean}>`
    display: ${({ $show }) => $show ? 'block' : 'none'};

    @media only screen and (min-width: ${breakpointSizes.tablet}) {
        display: block;
    }
`;