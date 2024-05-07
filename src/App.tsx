import { Navbar } from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { About, Main } from './pages';
import { Footer } from './components';

function App() {
    return (
        <div className='flex flex-col h-svh font-main text-[#FFF9F5] dark:text-dm-white bg-lm-bg-green dark:bg-dm-bg-dark-green'>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route>
                        <Route path={"about"} element={<About />} />
                        <Route path={"/"} element={<Main />} />
                        <Route path={"*"} element={<Main />} />
                    </Route>
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
