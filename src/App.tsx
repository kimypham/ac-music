import { HashRouter, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { About, Main } from './pages';

function App() {
    return (
        <div className='flex flex-col h-svh px-0 lg:px-[96px] font-main text-[#FFF9F5] dark:text-dm-white bg-lm-bg-green dark:bg-dm-bg-dark-green'>
            <HashRouter>
                <Navbar />
                <Routes>
                    <Route path={"/"} element={<Main />} />
                    <Route path={"*"} element={<Main />} />
                    <Route path={"/about"} element={<About />} />
                </Routes>
                <Footer />
            </HashRouter>
        </div >
    )
}

export default App
