import React from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';
import { AppColors } from '../../utils';
import { MediumText, SmallText } from '../text';
import styles from './styles';
interface BookTileProps {
  title: string
  author: string
  year: string,
  onPress: ()=>void
}

const BookTile: React.FC<BookTileProps> = ({ title, author, year, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <MediumText color={AppColors.primary} size={6}>{title}</MediumText>
      <View style={styles.row}>
        <SmallText size={4.5} >Author:</SmallText>
        <SmallText fontWeight='bold' size={5}> {author}</SmallText>
      </View>
      <SmallText size={4.5} >Published: {year}</SmallText>
    </TouchableOpacity>
  );
};

export default BookTile;
