import { FC, useState } from 'react';

import { CoordinateProvider } from "./providers/coordinates-provider";

import { Header }  from './components/Header';
import { MapView } from "./components/MapView";
import { PropertiesListings } from "./components/PropertiesListing";

import * as S from './listings-styled';

const Listings: FC = () => {
  const [mode, setMode] = useState('map');

  return (
    <CoordinateProvider>
      <Header />
      <S.MainContainer>
        <MapView show={mode === 'map'} />
        <PropertiesListings show={mode === 'list'} />
      </S.MainContainer>
      {/* Add map/listings view button for mobile */}
    </CoordinateProvider>
  )
};

export default Listings;
