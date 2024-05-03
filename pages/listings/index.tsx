import { FC, useState } from 'react';

import { CoordinateProvider } from "./providers/coordinates-provider";

import { Header }  from './components/Header';
import { MapView } from "./components/MapView";
import { PropertiesListings } from "./components/PropertiesListing";
import { ViewChangeButton } from './components/ViewChangeButton';

import * as S from './listings-styled';

const Listings: FC = () => {
  const [mode, setMode] = useState('map');

  const handleModeToggleClick = () => {
    if (mode === 'map') {
      setMode('list');
    } else {
      setMode('map');
    }
  };

  return (
    <CoordinateProvider>
      <Header />
      <S.MainContainer>
        <MapView show={mode === 'map'} />
        <PropertiesListings show={mode === 'list'} />
      </S.MainContainer>
      <ViewChangeButton mode={mode} onClick={handleModeToggleClick} />
    </CoordinateProvider>
  )
};

export default Listings;
