import { AppDispatch } from "../../store";
import { BookListingData } from "../../utils/constant";
import { setBookListing, setErrorText, setLoadding, setPage, setPagingatedBookData, setTotalPage } from "./index";



const setBookInRedux = (page: 1) => {
    return async (dispatch: AppDispatch) => {
        dispatch(setLoadding(true))
        fetch('test.com').then(() => { }).catch((error) => dispatch(setErrorText(error?.message)))
        setTimeout(() => {
            if (page === 1) {
                console.log(BookListingData.slice(0, 5),"BookListingData.slice(0, 5)r");
                
                dispatch(setBookListing(BookListingData.slice(0, 8)))
                dispatch(setPage(1))
                dispatch(setTotalPage(2))
            }
            else {
                dispatch(setPagingatedBookData(BookListingData.slice(8, 10)))
                dispatch(setPage(2))
            }
            dispatch(setLoadding(false))
        }, 2000);
    };
};

const bookAction = {
    setBookInRedux,
};
export default bookAction;