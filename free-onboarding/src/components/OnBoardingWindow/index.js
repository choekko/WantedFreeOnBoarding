import './style.css'
import OnBoardingDetail from './OnBoardingDetail'
import CloseIcon from '@material-ui/icons/Close';

const OnBoardingWindow = (props) => {

    const {isMobileSize, setIsOnBoarding} = props;
    
    const onBoardingMethod = [
        {name: '페이스북으로', logoUrl:'url(facebookLogo.png)'},
        {name: 'Apple로', logoUrl:'url(appleLogo.png)'},
        {name: 'Google로', logoUrl: 'url(googleLogo.png)'},
    ]
    const methodDefault =  {name: '이메일로', logoUrl:'url(emailLogo.png)'};

    const windowStyle = isMobileSize ? 
        {width: '100%', height: '100%'}
        :
        {width: '22em'}

    const closeStyle = isMobileSize ?
        {right: '2em', transform: 'translate(0, -21em)'}
        :
        {transform: 'translate(10em, -20.3em)'}

    const handleOutClick = (e) => {
        if (e.currentTarget !== e.target)
            return;
        setIsOnBoarding(false);
    }

    return (
        <>
        <div 
        className='onBoardingWrap'
        onClick={handleOutClick}
        >
            <div className='onBoardingWindow' style={windowStyle}>
                <div 
                onClick={()=>setIsOnBoarding(false)}
                className='close' 
                style={closeStyle}>
                    <CloseIcon/>
                </div>
                <header>
                    wanted
                </header>
                <section className='descript'>
                    <div>
                        <p>직장인을 위한</p>
                        <p>커리어 플랫폼, 원티드!</p>
                    </div>
                    <div>
                        <p>커리어 성장과 행복을 위한 여정</p>
                        <p>지금 원티드에서 시작하세요.</p>
                    </div>
                </section>
                <section className='inputWrap'>
                    <span>이메일</span>
                    <input placeholder='이메일을 입력해주세요.' />
                </section>
                <section className='buttons'>
                    <OnBoardingDetail
                    name={methodDefault.name}
                    logoUrl={methodDefault.logoUrl}
                    isDefault={true}/> 
                    or
                    {onBoardingMethod.map((e) => {
                        return (
                        <OnBoardingDetail
                        key={e.name}
                        name={e.name}
                        logoUrl={e.logoUrl}
                        isDefault={false}/>
                        )
                    })}
                </section>
                <footer>
                    걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다.
                    회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며, 동의합니다.
                </footer>
            </div>

        </div>
        </>
    )
}

export default OnBoardingWindow;