const OnBoardingDetail = (props) => {
    const {name, logoUrl, isDefault} = props;

    return (
        <>
            <button 
            className='onBoardingDetail'
            style={isDefault ? {backgroundColor: 'rgb(60, 78, 246)', color: 'rgba(240,240,240)'} : null}
            >
                <div className='methodLogo' style={{backgroundImage: logoUrl}}/>
                {name} 시작하기
            </button>
        </>
    )
}

export default OnBoardingDetail