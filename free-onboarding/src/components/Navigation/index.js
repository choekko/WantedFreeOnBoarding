import React, {useState} from 'react'
import './style.css'
import Menu from './Menu'
import BtnBundleWeb from './BtnBundleWeb'
import OnBoardingButton from './OnBoardingButton'
import SearchButton from './SearchButton'
import ListButton from './ListButton'
import ExploreDetails from './ExploreDetails' 
import ShadowBody from '../ShadowBody'

const Navigation = (props) => {
    const {
        isMobileSize, 
        setIsSearchClicked, 
        setIsOnBoarding, 
        setIsMobileListBtnClicked
    } = props;

    const categories = isMobileSize ? 
        ['홈', '탐색', '커리어 성장']
        :
        ['탐색', '커리어 성장', '직군별 연봉',
        '이력서', '매치업', '프리랜서',
        'Ai 합격예측']
    const betaCategories = ['Ai 합격예측']
    const [clickedName, setClickedName] = useState('');
    const [exploreHover, setExploreHover] = useState(false);


    return (
        <>
            {isMobileSize ? 
                <div className='navMWrap'>
                    <div className='navM' style={{}}>
                        <div> wanted </div>
                        <OnBoardingButton setIsOnBoarding={setIsOnBoarding} isMobileSize={isMobileSize}/>
                    </div>
                    <div className='navM'>
                        <Menu
                        isMobileSize={isMobileSize}
                        categories={categories}
                        betaCategories={betaCategories}
                        clickedName={clickedName}
                        setClickedName={setClickedName}
                        />
                        <div style={{marginLeft:'auto'}}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                                <SearchButton setIsSearchClicked={setIsSearchClicked}/>
                                <ListButton setIsMobileListBtnClicked={setIsMobileListBtnClicked}/>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <>
                <div className='navWrap'>
                    <nav>
                        <div
                        onClick={()=>{setExploreHover(false)}}
                        > wanted </div>
                        <Menu
                        categories={categories}
                        betaCategories={betaCategories}
                        clickedName={clickedName}
                        setClickedName={setClickedName}
                        exploreHover={exploreHover}
                        setExploreHover={setExploreHover}
                        />
                        <BtnBundleWeb setIsOnBoarding={setIsOnBoarding} setIsSearchClicked={setIsSearchClicked}/>
                    </nav>
                </div>
                <ExploreDetails
                exploreHover={exploreHover}
                setExploreHover={setExploreHover}/>
                <ShadowBody isAll={false} isActivated={exploreHover}/>
                </>
            }
        </>
    )
}

export default Navigation;