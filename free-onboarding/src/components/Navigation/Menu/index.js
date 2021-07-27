import Category from './Category'

const Menu = (props) => {
    const {
        isMobileSize,
        categories, 
        betaCategories, 
        clickedName, 
        setClickedName,
        exploreHover,
        setExploreHover
     } = props;

    return (
        <>
        <table 
        className='menu'
        style={isMobileSize ? {width: '250px'} : {width: '700px'}}>
            <tbody>
                <tr>
                    {categories.map((name) => {
                            return (
                                <Category
                                key={name}
                                isMobileSize={isMobileSize}
                                betaCategories={betaCategories}
                                name={name}
                                isClicked={clickedName === name} 
                                setClickedName={setClickedName}
                                exploreHover={exploreHover}
                                setExploreHover={setExploreHover}/>
                            )
                        })
                    }
                </tr>
            </tbody>
        </table>
        </>
    )
}

export default Menu