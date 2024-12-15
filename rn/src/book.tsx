import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Modal, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { bookDeatil, bookRecordList, errorText, getBookRecord, isLoading, pageNumber, setBookDetail, sortBooksByType, sortByYear, totalPage } from './redux/books';
import { AppColors } from './utils';
import { height, width } from './utils/dimensions';
import { BookTile, MediumText, SmallText } from './component';
import Button from './component/button';
import { GenreList } from './utils/constant';



const BookListing = () => {
  const loadingState = useSelector(isLoading)
  const errorMessage = useSelector(errorText)
  const bookData = useSelector(bookRecordList)
  const page = useSelector(pageNumber)
  const tPage = useSelector(totalPage)
  const detail = useSelector(bookDeatil)
  const [selectype, setSelectedType] = useState<number | null>(null)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBookRecord(1))
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SmallText fontWeight='bold' >Filter by genre:</SmallText>
        <View style={styles.filter}>

          {
            GenreList.map((item: { id: number, type: string }, index: number) => {
              return (
                <TouchableOpacity style={selectype === item.id ? styles.selected : styles.notSelected} onPress={() => {
                  setSelectedType(item?.id === selectype ? null : item?.id)
                  dispatch(sortBooksByType(item?.id))

                }}>
                  <SmallText color={selectype === item.id ? AppColors.white : AppColors.black}>{item?.type}</SmallText>
                </TouchableOpacity>
              )
            })
          }
        </View>
        <View>
          <TouchableOpacity style={{}} onPress={() => { dispatch(sortByYear()) }}>
            <SmallText >Sort By Year</SmallText>
          </TouchableOpacity>
          
        </View>
        <FlatList
          data={bookData}
          renderItem={({ item, index }) => {
            return (
              <BookTile
                title={item.title}
                author={item.author}
                year={item.year}
                onPress={() => {
                  dispatch(setBookDetail(item))
                }}
              />
            )
          }}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            if (tPage != page) {
              dispatch(getBookRecord(page + 1))
            }
          }}
          contentContainerStyle={{ paddingBottom: height(10) }}
          ListEmptyComponent={
            loadingState ? <ActivityIndicator size={'large'} color={AppColors.green5} /> : <View />
          }

        />
      </View>
      <Modal visible={detail !== null}>
        <View style={styles.container}>
          <MediumText color={AppColors.primary} size={8}>{detail?.title}</MediumText>
          <SmallText>{detail?.author}</SmallText>
          <SmallText>{detail?.year}</SmallText>
          <View style={styles.detail}>
            <SmallText>{detail?.detail}</SmallText>
          </View>
          <Button containerStyle={styles.close} onPress={() => { dispatch(setBookDetail(null)) }}>Close</Button>

        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
    marginTop: height(1),
    alignItems: "center"
  },
  detail: {
    paddingHorizontal: width(8),
    marginTop: height(4)
  },
  close: {
    marginTop: height(2)
  },
  filter: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: width(90),
    marginBottom: height(2),
    marginTop: height(2)
  },
  selected: {
    paddingHorizontal: width(2),
    paddingVertical: height(0.1),
    borderWidth: width(0.2),
    borderRadius: width(100),
    backgroundColor: AppColors.primary
  },
  notSelected: {
    paddingHorizontal: width(2),
    paddingVertical: height(0.1),
    borderWidth: width(0.2),
    borderRadius: width(100),
  }
});

export default BookListing;
