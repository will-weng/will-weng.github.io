import { createContext, useContext, useRef } from "react";

type ScrollContextType = {
    registerScrollTarget: (ref: HTMLDivElement | null) => void;
    scrollToTop?: () => void;
    scrollPosition?: () => number;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const registerScrollTarget = (ref: HTMLDivElement | null) => {
        scrollRef.current = ref;
    };

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollPosition = () => {
        const scrollPos = scrollRef.current?.scrollTop ?? 0;
        console.log(scrollPos);
        return scrollPos;
    };

    return (
        <ScrollContext.Provider value={{ registerScrollTarget, scrollToTop, scrollPosition }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error('useScrollContext must be used within ScrollProvider');
    return context;
};