import { createSlice } from "@reduxjs/toolkit";
import { BookProps, initalStateProps, } from "../../types";
import { BookListingData } from "../../utils/constant";

const initialState: initalStateProps = {
    bookData: [],
    selectedBook: null,
    page: 0,
    totalPage: 0,
    search: null,
    isLoading: false,
    error: null
}
const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBookListing: (state, action: { payload: BookProps[] }) => {
            state.bookData = action.payload
        },
        setLoadding: (state, action: { payload: boolean }) => {
            state.isLoading = action.payload
        },
        setErrorText: (state, action: { payload: string | null }) => {
            state.error = action.payload
        },
        setPage: (state, action: { payload: number }) => {
            state.page = action.payload
        },
        setTotalPage: (state, action: { payload: number }) => {
            state.totalPage = action.payload
        },
        setPagingatedBookData: (state, action: { payload: BookProps[] }) => {
            state.bookData = [...state.bookData, ...action.payload]
        },
        setBookDetail: (state, action: { payload: BookProps | null }) => {
            state.selectedBook = action.payload
        },
        sortBooksByType: (state, action: { payload: number }) => {
            const temp = state.bookData = BookListingData?.filter((item) => {
                if (action.payload === item?.genre) {
                    return item
                }
            })
            state.bookData = temp
        },
        sortByYear: (state, action: { payload: number }) => {
            state.bookData = BookListingData.sort((a, b) => a.year - b.year); // b - a for reverse sort
        },
        // addProduct: (state: any, action: { payload: BookProps }) => {
        //     state.productList.unshift(action.payload)
        // },
        // addCateogry: (state: any, action: { payload: Category }) => {
        //     state.categoryList.push(action.payload)
        // },
        // addProductCateogry: (state: any, action: { payload: ProductCategory }) => {
        //     state.productCategoryList.push(action.payload)
        // },
        // deleteProduct: (state: any, action: { payload: { index: number } }) => {
        //     let temp = [...state.productList]
        //     temp.splice(action.payload.index, 1)
        //     state.productList = temp
        // },
        // updateProduct: (state: any, action: { payload: { index: number, item: Product } }) => {
        //     let temp = [...state.productList]
        //     temp[action.payload.index] = action.payload.item
        //     state.productList = temp
        // },
        // deleteCategory: (state: any, action: { payload: { index: number } }) => {
        //     let temp = [...state.categoryList]
        //     temp.splice(action.payload.index, 1)
        //     state.categoryList = temp
        // },
        // updateCategory: (state: any, action: { payload: { index: number, item: Category } }) => {
        //     let temp = [...state.categoryList]
        //     temp[action.payload.index] = action.payload.item
        //     state.categoryList = temp
        // },
    }
})

export default bookSlice