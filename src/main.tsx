import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './app/App.tsx'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import {ContextToggleTheme} from "./app/providers/theme/ui/ContextToggleTheme.tsx";
import "./shared/config/i18n/i18n.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ContextToggleTheme>
                <App/>
            </ContextToggleTheme>
        </BrowserRouter>
    </StrictMode>,
)