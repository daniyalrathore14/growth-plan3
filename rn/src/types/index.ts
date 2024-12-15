
export interface BookProps {
    id: number,
    title: string,
    author: string,
    year: number,
    detail: string,
    genre: number
}

export interface initalStateProps {
    bookData: BookProps[],
    page: number,
    totalPage: number,
    search: null | string,
    isLoading: boolean,
    selectedBook: null | BookProps,
    error: null | string

}