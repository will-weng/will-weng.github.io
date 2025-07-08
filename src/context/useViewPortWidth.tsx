import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

const ViewportContext = createContext<number | undefined>(undefined);

const dynamicWidth = () =>
    (window.innerWidth < 1000) ? window.innerWidth : 1000;

export const ViewportProvider = ({ children }: { children: ReactNode }) => {
    const [width, setWidth] = useState(dynamicWidth);

    useEffect(() => {
        const handleResize = () => setWidth(dynamicWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <ViewportContext.Provider value={width}>
            {children}
        </ViewportContext.Provider>
    );
};

export const useViewPortWidth = () => {
    const context = useContext(ViewportContext);
    if (!context) throw new Error('useViewportWidth must be used within ViewportProvider');
    return context;
};