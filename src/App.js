import Layout from './layouts/mobile';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import AddPost from './pages/AddPost';
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum, chain.polygonMumbai],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_API_URL }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


function App() {
  return (
    <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider chains={chains} theme={darkTheme({
            accentColor: 'linear-gradient(to right, #FE8900, #EBFF00)',
            accentColorForeground: 'white',
            borderRadius: 'medium',
        })}>
    <div className='App'>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='post' element={<AddPost />} />
                <Route path='profile' element={<Profile />} />
            </Route>
        </Routes>
        </BrowserRouter>
    </div>
    </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default App;
