import { FC, ReactNode, createContext, useContext, useState, Dispatch, SetStateAction } from "react";

const DEFAULT_COORDS = {
    lat: 37.769722,
    lng: -122.476944,
};

type CoordinateProviderProps = {
    children?: ReactNode;
};

export interface CoordinateContextValue {
    coords: {
        lat: number;
        lng: number;
    };
    setCoords: Dispatch<SetStateAction<{
        lat: number;
        lng: number;
    }>>,
}

const CoordinateContext = createContext<CoordinateContextValue>({
    coords: DEFAULT_COORDS,
    setCoords: () => {},
});

export const useCoordinateContext = (): CoordinateContextValue => useContext(CoordinateContext);

export const CoordinateProvider: FC<CoordinateProviderProps> = ({ children }) => {
    const [coords, setCoords] = useState(DEFAULT_COORDS);

    const contextValue: CoordinateContextValue = {
        coords,
        setCoords,
    }

    return <CoordinateContext.Provider value={contextValue}>{children}</CoordinateContext.Provider>
}

