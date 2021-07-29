const OnBoardingButton = (props) => {
    const {isMobileSize, setIsOnBoarding} = props;

    return (
        <>
            {isMobileSize ? 
            <div className='onBoardingM' onClick={()=>{setIsOnBoarding(true)}}>
            회원가입하기
            </div>
            :
            <span className='onBoarding' onClick={()=>{setIsOnBoarding(true)}}>
            회원가입/로그인
            </span>
            }
        </>
    )
}

export default OnBoardingButton;