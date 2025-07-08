import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/Global";
import theme from "../styles/Theme";
import { ScrollProvider } from "./ScrollContext";
import { ViewportProvider } from "./useViewPortWidth";

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <ViewportProvider>
                <ScrollProvider>
                    {children}
                </ScrollProvider>
            </ViewportProvider>
        </ThemeProvider>
    );
};