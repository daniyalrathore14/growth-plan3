


import { BookProps, initalStateProps } from '../../types';
import bookAction from './action';
import bookSlice from './slices';
export const bookSliceReducer = bookSlice.reducer;
export const getBookRecord = bookAction.setBookInRedux;
export const { setBookListing, setErrorText, setLoadding, setPage, setTotalPage, setPagingatedBookData, setBookDetail, sortBooksByType,sortByYear } = bookSlice.actions;
export const bookRecordList = (state: { book: { bookData: BookProps[]; }; }) => state.book.bookData
export const isLoading = (state: { book: { isLoading: boolean }; }) => state.book.isLoading
export const errorText = (state: { book: { errorText: null | string }; }) => state.book.errorText
export const pageNumber = (state: { book: { page: number }; }) => state.book.page
export const totalPage = (state: { book: { totalPage: number }; }) => state.book.totalPage
export const bookDeatil = (state: { book: { selectedBook: BookProps }; }) => state.book.selectedBook



