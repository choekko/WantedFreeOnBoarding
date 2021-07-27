import './style.css'
import RecommendTag from './RecomendTag'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

const SearchWindow = (props) => {
    const {isMobileSize, setIsSearchClicked} = props;
    const recommendTags = ['주차', '생일선물', '퇴사율5%이하', '연봉상위2~5%', '안마의자'];


    const handleOutClick = (e) => {
        if (e.target !== e.currentTarget)
            return;
        setIsSearchClicked(false);
    }

    return (
        <>
        <div 
        className={isMobileSize ? 'searchWindowM' : 'searchWindow'}
        onClick={handleOutClick}>
            <div className='searchWrap'>
                <div className='searchInputWrap'
                onClick={handleOutClick}>
                    <input
                    className='searchInput'
                    placeholder='#태그, 회사, 포지션 검색'
                    />
                    <SearchIcon style={{position: 'absolute', transform: 'translate(1em, 0)'}}/>
                    <CloseIcon className='close'
                    onClick={()=>{setIsSearchClicked(false)}} />
                </div>
                <div
                onClick={handleOutClick}>
                    <span style={{fontWeight: 'bold'}}>추천 태그로 검색해보세요 </span>
                    <div style={{float: 'right'}}>
                        <span style={{cursor: 'pointer'}}>기업태그 홈 이동하기 </span>
                        <ArrowForwardIcon style={{fontSize:'10px'}}/>
                    </div>   
                </div>
                <div 
                style={{marginTop: '15px'}}
                onClick={handleOutClick}>
                    {recommendTags.map((e, i) => {
                        return <RecommendTag key={e} isMobileSize={isMobileSize} tagName={e} keyForColor={i}/>
                    })}
                </div>
            </div>
        </div>
        {!isMobileSize ? 
        <div 
        className='searchShadow'
        onClick={()=>{setIsSearchClicked(false)}}/>
        :
        null
        }
        </>
    )
}

export default SearchWindow