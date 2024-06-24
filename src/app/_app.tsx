import '@/styles/globals.css';
import RootLayout from '@/components/Layout';

export default function App({ Component, pageProps }) {
    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}