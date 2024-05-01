import { CoordinateProvider } from "./providers/coordinates-provider";

import { Header }  from './components/Header';
import { MapView } from "./components/MapView";
import { PropertiesListings } from "./components/PropertiesListing";

import * as S from './listings-styled';

export default function Listings() {
  return (
    <CoordinateProvider>
      <Header />
      <S.MainContainer>
        <MapView />
        <PropertiesListings />
      </S.MainContainer>
    </CoordinateProvider>
  )
}
