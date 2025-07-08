import { createContext, useContext, useRef, useState } from "react";

type ScrollContextType = {
    registerScrollTarget: (ref: HTMLDivElement | null) => void
    scrollToTop: () => void
    updateScrollPosition: () => void
    scrollPos: number

};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [scrollPos, setScrollPos] = useState(0);

    const registerScrollTarget = (ref: HTMLDivElement | null) => {
        scrollRef.current = ref;
    };

    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const updateScrollPosition = () => {
        setScrollPos(scrollRef.current?.scrollTop ?? 0);
    };


    return (
        <ScrollContext.Provider value={{ registerScrollTarget, scrollToTop, updateScrollPosition, scrollPos }}>
            {children}
        </ScrollContext.Provider>
    );
};

export const useScrollContext = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) throw new Error('useScrollContext must be used within ScrollProvider');
    return context;
};