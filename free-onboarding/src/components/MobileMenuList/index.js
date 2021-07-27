import './style.css';
import CloseIcon from '@material-ui/icons/Close';

const MobileMenuList = (props) => {

    const {setIsMobileListBtnClicked} = props;

    const items = ['로그인', '/', '이력서', '매치업', '추천', '프리랜서', '/',
                    '직군별 연봉', '커리어 성장', '/', '기업 서비스'];

    const handleOutClick = (e) => {
        if (e.target !== e.currentTarget)
            return ;
        setIsMobileListBtnClicked(false);
    }

    return (
        <>
        <div
        className='MobileMenuListWrap'
        onClick={handleOutClick}>
            <div className='MobileMenuList'>
                <header
                onClick={handleOutClick}
                >
                    <div className='logo' style={{backgroundImage: 'url(/wantedLogo.png)'}}/>
                    <div 
                    style={{float:'right'}}
                    onClick={() => {setIsMobileListBtnClicked(false)}}
                    >
                        <CloseIcon style={{cursor: 'pointer', color: 'gray', fontSize: '1.7em'}}/>
                    </div>
                </header>
                <section>
                    {items.map((e, i) => {
                        if (e === '/') 
                            return <div key={e + i.toString()} className='divider'/>
                        else
                            return <p key={e} style={{cursor: 'pointer'}}>{e}</p>
                    })}
                </section>
            </div>
        </div>
        </>
    )
}

export default MobileMenuList;