import {useState} from 'react';

const RecommendTag = (props) => {
    const {tagName, keyForColor, isMobileSize} = props;

    const addValue = keyForColor * 30;
    const [backOpacity, setBackOpacity] = useState(0.3);
    const rgb = 'rgba(' + String(170 - addValue) + ',' + String(0 + addValue) + ',250,' + backOpacity + ')';


    return (
        <div 
        className={isMobileSize ? 'recommendTagM' : 'recommendTag'}
        style={{backgroundColor: rgb}}
        onMouseOver={() => {setBackOpacity(0.4)}}
        onMouseOut={() => {setBackOpacity(0.3)}}
        >
            <div>#{tagName}</div>
        </div>
    )
}

export default RecommendTag;