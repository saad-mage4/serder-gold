import './bootstrap';
import '../css/app.scss';
// import '../css/custom.css'
import '../css/custom.scss'

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import 'react-loading-skeleton/dist/skeleton.css';


import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';


// Create a client
const queryClient = new QueryClient()

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title}${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <QueryClientProvider client={queryClient}>
                <App {...props} />
            </QueryClientProvider>);
    },
    progress: {
        color: '#4B5563',
    },
});
