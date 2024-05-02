'use client';

import styled from 'styled-components';
import { breakpointSizes } from 'styles/breakpoints';

export const PropertiesListingContainer = styled.div<{ $show: boolean}>`
    display: ${({ $show }) => $show ? 'grid' : 'none'};
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    padding-top: 2rem;

    @media only screen and (min-width: ${breakpointSizes.tablet}) {
        display: grid;
    }

    @media only screen and (min-width: ${breakpointSizes.tablet_landscape}) {
        grid-template-columns: 1fr 1fr;
    }
`;

export const ListingCardContainer = styled.div`
    width: 315px;
    display: flex;
    flex-direction: column;
    justify-self: center;
`;

export const ListingCardBedRoomBathRoom = styled.p`
    font-size: 20px;
    font-weight: 600;
    line-height: 32px;
`;

export const ListingCardPrice = styled.p`
    font-size: 26px;
    font-weight: 700;
    line-height: 24px; 
`;

export const ListingCardAddress = styled.p`
    font-size: 15px;
    font-weight: 400;
    line-height: 32px; 
`;

export const ListingCardListDate = styled.p`
    font-size: 14px;
    font-weight: 400;
    line-height: 32px;
    color: #979797;
`;
