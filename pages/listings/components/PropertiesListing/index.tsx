import { FC } from 'react';
import { useSimplyRets } from 'api/simplyrets';
import { useCoordinateContext } from '../../providers/coordinates-provider';

import { ListingCard } from './ListingCard';
import { numberWithCommas } from '../../utils';
import * as S from './PropertiesListing-styled';

interface PropertiesListingProps {
    show: boolean;
}

export const PropertiesListings: FC<PropertiesListingProps> = ({ show }) => {
    const { coords } = useCoordinateContext();
    const { data: propertiesData, isLoading: isLoadingPropertiesData } = useSimplyRets(coords);

    console.log('===', propertiesData);

    if (isLoadingPropertiesData || !propertiesData) {
        return <p>Almost there I promise...</p>
    }

    return (
        <S.PropertiesListingContainer $show={show}>
            {Array.isArray(propertiesData) && propertiesData.map((propertyData) => {
                const { property, remarks, photos, address, listDate, listPrice, mlsId, } = propertyData;
                const { bedrooms, bathsFull, bathsHalf, area } = property;

                const formattedListPrice = numberWithCommas(listPrice);
                const formattedAddress = `${address.full}, ${address.city}, ${address.state}`
                const formattedDate = new Date(listDate);

                return (
                    <ListingCard
                        key={address.full}
                        mlsId={mlsId}
                        bedrooms={bedrooms}
                        bathrooms={bathsFull + (bathsHalf / 2)}
                        area={area}
                        listPrice={formattedListPrice}
                        listDate={formattedDate.toLocaleDateString()}
                        address={formattedAddress}
                        photo={photos[0]}
                        remarks={remarks}
                    />
                )
            })}
        </S.PropertiesListingContainer>
    )
};
