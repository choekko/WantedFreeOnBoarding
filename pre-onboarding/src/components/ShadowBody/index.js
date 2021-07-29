import './style.css'

const ShadowBody = (props) => {
    const {isAll, isActivated} = props
    const shadowStyle = isActivated ?
        {animation: 'fadeIn 0.5s'}
        :
        {display: 'none'}

    return (
        <div 
        className={isAll ? 'shadowAll' : 'shadowButNotNav'}
        style={shadowStyle}
        />
    )
}

export default ShadowBody;