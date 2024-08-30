import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calendarContainer: {
    paddingTop: 50,
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontFamily: 'raleway-bold',
    marginBottom: 10,
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  dayContainer: {
    alignItems: 'center',
  },
  dayText: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'raleway-bold',
  },
  dateText: {
    color: '#ffffff',
    fontSize: 16,
  },
  currentDateText: {
    backgroundColor: 'green',
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    color: '#000',
  },
});

export default styles;
