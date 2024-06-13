import {createRoot} from 'react-dom/client';

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import {App} from "./App";
import ThemeProvider from "./providers/themeProvider/ui/ThemeProvider";

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const queryClient = new QueryClient();
import "../shared/config/i18n/i18n";

root.render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </BrowserRouter>
    </QueryClientProvider>
);
