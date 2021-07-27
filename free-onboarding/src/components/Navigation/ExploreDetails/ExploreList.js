import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

const ExploreList = (props) => {
    const {mainCategory, subCategories} = props;

    return (
        <ul className='exploreList'>
            <li className='exploreMainCategory'>
                <span>{mainCategory}</span>
                <div className='arrowIcon'>
                    <ArrowForwardIcon style={{fontSize: '10px'}} />
                </div>
            </li>
            {subCategories.map((e) => {
                return (
                <li key={e} className='exploreSubCategories'>
                    <span>{e}</span>
                </li>
                )
            })}
            <li className='exploreSubCategories'>
                <span>더보기</span>
                <div className='arrowIcon'>
                    <ArrowForwardIcon style={{fontSize: '10px'}} />
                </div>
            </li>
        </ul>
    )
}

export default ExploreList