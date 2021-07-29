import SearchIcon from '@material-ui/icons/Search';

const SearchButton = (props) => {
    const {setIsSearchClicked} = props;

    return (
        <>
            <div 
            className='search'
            onClick={()=>{setIsSearchClicked(true)}}>
                <SearchIcon/>
            </div>
        </>
    )
}

export default SearchButton;