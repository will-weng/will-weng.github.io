import { createContext, useContext, useRef } from "react";

type ScrollContextType = {
    registerScrollTarget: (ref: React.RefObject<HTMLDivElement>) => void;
    scrollToTop?: () => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<React.RefObject<HTMLDivElement> | null>(null);

    const registerScrollTarget = (ref: React.RefObject<HTMLDivElement>) => {
        scrollRef.current = ref;
    };

    const scrollToTop = () => {
        scrollRef.current?.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ScrollContext.Provider value={{ registerScrollTarget, scrollToTop }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error('useScrollContext must be used within ScrollProvider');
    return context;
};