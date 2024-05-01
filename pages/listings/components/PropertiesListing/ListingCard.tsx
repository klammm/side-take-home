import { FC } from 'react';
import Image from 'next/image';

import HeartFill from 'public/heart-fill.svg';
import HeartStroke from 'public/heart-stroke.svg';
import * as S from './PropertiesListing-styled';

interface ListingCardProps {
    bedrooms: number;
    bathrooms: number;
    area: number;
    listPrice: string;
    address: string;
    listDate: string;
    photo: string;
    remarks: string;
}

export const ListingCard: FC<ListingCardProps> = ({ bedrooms, bathrooms, area, listPrice, listDate, address, photo, remarks }) => (
    <S.ListingCardContainer>
        <Image
            src={photo}
            width={315}
            height={280}
            alt={remarks}
        />
        <HeartStroke />
        <S.ListingCardBedRoomBathRoom>{bedrooms} BR | {bathrooms} Bath | {area} Sq Ft</S.ListingCardBedRoomBathRoom>
        <S.ListingCardPrice>${listPrice}</S.ListingCardPrice>
        <S.ListingCardAddress>{address}</S.ListingCardAddress>
        <S.ListingCardListDate>Listed: {listDate}</S.ListingCardListDate>
    </S.ListingCardContainer>
);
