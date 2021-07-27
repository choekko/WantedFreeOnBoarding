import './style.css'
import {useState} from 'react';

const Category = (props) => {
    const {
        isMobileSize,
        betaCategories, 
        isClicked, 
        setClickedName,
        exploreHover,
        setExploreHover,
        name} = props
    const [isHovering, setIsHovering] = useState(false);
    const isBeta = betaCategories.includes(name);

    const confirmTdBotderBottom = () => {
        if (isHovering && !isMobileSize) {
            return 'rgba(128, 128, 128, 0.4)';
        }
        else if (isClicked)
            return 'rgb(15, 124, 250)';
        else 
            return 'rgba(0, 0, 0, 0)';
    }

    const handleMouseOver = () => {
        setIsHovering(true); 
        if (!isMobileSize && name === '탐색')
            setExploreHover(true);
        else if (!isMobileSize && exploreHover === true)
            setExploreHover(false);
    }

    return (
        <>
        <td
        className='category'
        style={{borderBottomColor: confirmTdBotderBottom()}} 
        onClick={()=>setClickedName(name)}
        onMouseOver={handleMouseOver}
        onMouseOut={()=>setIsHovering(false)}
        >
            <span>{props.name}</span>
            {isBeta ?
                <span
                className='beta'
                > Beta </span>
            :
                null
            }
        </td>
        </>
    )
}

export default Category