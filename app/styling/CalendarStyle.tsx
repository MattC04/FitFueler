import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  calendarContainer: {
    paddingTop: 60,
    alignItems: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'raleway-bold',
  },
  todayButton: {
    backgroundColor: 'transparent',
    padding: 5,
  },
  todayText: {
    color: '#3ddc84',
    fontSize: 16,
    fontFamily: 'raleway-bold',
  },
  weekContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 10,
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
