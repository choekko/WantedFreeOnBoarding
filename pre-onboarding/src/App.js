import React, {useState} from "react";
import { useMediaQuery } from 'react-responsive';
import Navigation from './components/Navigation';
import SearchWindow from './components/SearchWindow';
import OnBoardingWindow from './components/OnBoardingWindow';
import MobileMenuList from './components/MobileMenuList';
import './App.css';

const App = () => {
    const isMobileSize = useMediaQuery({maxWidth: '1150px'})
    const [isSearchClicked, setIsSearchClicked] = useState(false);
    const [isOnBoarding, setIsOnBoarding] = useState(false);
    const [isMobileMenuBtnClicked, setIsMobileListBtnClicked] = useState(false);

    return (
        <>
            <Navigation
            isMobileSize={isMobileSize}
            setIsSearchClicked={setIsSearchClicked}
            setIsOnBoarding={setIsOnBoarding}
            setIsMobileListBtnClicked={setIsMobileListBtnClicked}/>
            <article className='testBody'>
                <img alt='자기소개'
                className={isMobileSize ? 'itIsMeM' : 'itIsMe'}
                style={{marginTop: '6em'}} src='/itIsMe.png'/>
            </article>
            {isSearchClicked ?
                <SearchWindow 
                isMobileSize={isMobileSize} 
                setIsSearchClicked={setIsSearchClicked}/>
                :
                null
            }
            {isOnBoarding ? 
                <OnBoardingWindow
                setIsOnBoarding={setIsOnBoarding}
                isMobileSize={isMobileSize}/>
                :
                null
            }
            {isMobileMenuBtnClicked ?
                <MobileMenuList setIsMobileListBtnClicked={setIsMobileListBtnClicked}/>
                :
                null
            }
        </>
    )
}

export default App