import { useSimplyRets } from "api/simplyrets";

import { Header }  from './components/Header';
import { MapView } from "./components/MapView";

import * as S from './listings-styled';

export default function Listings() {
  const { data: propertiesData, isLoading: isLoadingPropertiesData } = useSimplyRets();

  console.log('===', propertiesData);

  if (isLoadingPropertiesData) {
    return <p>Almost there I promise...</p>
  }

  return (
    <>
      <Header />
      <S.MainContainer>
        <MapView />
      </S.MainContainer>
    </>
  )
}
