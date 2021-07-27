const ExploreBackground = (props) => {
    const {exploreHover, setExploreHover} = props; 
    const backgroundStyle = exploreHover ? 
        { transform: 'translate(0, 23em)' } 
        : { transition: 'none'};

    const handleMouseOut = (e) => {
        console.log(e.clientY)
        if (e.clientY >= '26em')
            setExploreHover(false)
    }
    return (
        <div     
        className='exploreBackground'
        onMouseOut={(e)=>handleMouseOut(e)}
        style={backgroundStyle}/>
    )
}

export default ExploreBackground;