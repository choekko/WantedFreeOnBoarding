import MenuIcon from '@material-ui/icons/Menu';

const ListButton = (props) => {
    const {setIsMobileListBtnClicked} = props;

    return (
        <>
            <MenuIcon
            style={{cursor: 'pointer'}} 
            onClick={()=>{setIsMobileListBtnClicked(true)}}/>
        </>
    )
}

export default ListButton;