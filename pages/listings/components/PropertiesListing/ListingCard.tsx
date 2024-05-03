import { FC, useState } from 'react';
import Image from 'next/image';

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
    mlsId: number;
}

export const ListingCard: FC<ListingCardProps> = ({ bedrooms, mlsId, bathrooms, area, listPrice, listDate, address, photo, remarks }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const  handleSetFavorite= () => {
        const favoritesCache = localStorage.getItem('favorites');
        const favoritesList: number[] = JSON.parse(`${favoritesCache}`);
        const set = new Set(favoritesList);
        if (isFavorite) {
            set.delete(mlsId);
        } else if (!isFavorite) {
            set.add(mlsId);
        }

        localStorage.setItem('favorites', JSON.stringify([...set]));
        setIsFavorite(!isFavorite)
    }

    return (
    <S.ListingCardContainer>
        <Image
            src={photo}
            width={315}
            height={280}
            alt={remarks}
        />
        <S.ListingCardFavoritesHeart
            src={isFavorite ? "/heart-fill.svg" : "/heart-stroke.svg"}
            onClick={handleSetFavorite}
            className="App-logo"
            alt="unfavorite icon"
            width="24"
            height="24"
        />
        <S.ListingCardBedRoomBathRoom>{bedrooms} BR | {bathrooms} Bath | {area} Sq Ft</S.ListingCardBedRoomBathRoom>
        <S.ListingCardPrice>${listPrice}</S.ListingCardPrice>
        <S.ListingCardAddress>{address}</S.ListingCardAddress>
        <S.ListingCardListDate>Listed: {listDate}</S.ListingCardListDate>
    </S.ListingCardContainer>
);

}