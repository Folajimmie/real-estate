import Head from 'next/head';
import { Box } from '@chakra-ui/react';
import { Children } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


const Layout = ({ children }) => (
    <>
        <Head>
            <title>DDK Homes and Properties</title>
        </Head>
        <Box width="" maxWidth="1300px" m="auto">
            <header>
                <Navbar />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </Box>
    </>
);

export default Layout