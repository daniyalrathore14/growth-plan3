import { StyleSheet } from 'react-native';
import { AppColors } from '../../utils';
import { height, width } from '../../utils/dimensions';
const styles = StyleSheet.create({
  container: {
    width: width(90),
    marginBottom: height(2),
    backgroundColor: AppColors.white,
    overflow: "hidden",
    paddingVertical: height(1),
    paddingHorizontal: height(2),
    borderRadius: width(3),
    borderWidth: width(0.2),
    borderColor: AppColors.wihte5
  },
  row: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default styles;