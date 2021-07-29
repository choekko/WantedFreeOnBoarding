import ExploreBackground from './ExploreBackground'
import ExploreList from './ExploreList'
import './style.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';

const ExploreDetails = (props) => {
    const {exploreHover, setExploreHover} = props;
    const wrapStyle = exploreHover ?
        { animation: 'fadeIn 0.5s' } 
        : { display: 'none' };

    const categories = [
        {main: '영업', 
        sub: ['기업영업', '외부영업', '영업 관리자', '기술 영업', 
            '주요고객사 담당자', '솔루션 컨설턴트', '해외영업']},
        {main: '미디어',
        sub: ['콘텐츠 크리에이터', 'PD', '영상 편집가', '에디터',
            '비디오 제작', '작가', '출판 기획자']},
        {main: '인사',
        sub: ['인사담당', '리크루터', '조직문화', '평가·보상',
            '헤드헌터', 'HRBP', 'HRD']},
        {main: '게임 제작',
        sub: ['게임 기획자', '게임 그래픽 디자이너', '모바일 게임 개발자', '게임 클라이언트 개발자',
            '게임 아티스트', '게임 서버 개발자', '유니티 개발자']},
        {main: '엔지니어링·설계',
        sub: ['전자 엔지니어', '기계 엔지니어', '전기기계 공학자', '전기 엔지니어',
            '로봇·자동화', 'QA 엔지니어', '제품 엔지니어']}
    ]
    const remains = [
        '금융', '물류·무역', '제조·생산', '의료·제약·바이오',
        '교육', '법률·법집행기관', '식·음료', '건설·시설', '공공·복지', 
    ]

    return (
        <>
        <ExploreBackground
        exploreHover={exploreHover}
        setExploreHover={setExploreHover}/>
        <div 
        className='exploreWrap' 
        style={wrapStyle}
        onMouseLeave={()=>setExploreHover(false)}
        >
            <table className='exploreDetails'>
                <tbody>
                    <tr>
                        {categories.map((e) => {
                            return (
                                <td key={e.main}>
                                    <ExploreList mainCategory={e.main} subCategories={e.sub} />
                                </td>
                            )
                        })}
                        <td>
                            <ul className='exploreList'>
                                {remains.map((e) => {
                                    return (
                                    <li key={e} className='exploreMainCategory'>
                                        <span>{e}</span>
                                        <div className='arrowIcon'>
                                            <ArrowForwardIcon style={{fontSize: '10px'}} />
                                        </div>
                                    </li>
                                    )
                                })}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    )
}

export default ExploreDetails;