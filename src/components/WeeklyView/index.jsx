import * as data from './hardCodedWeeklyView.json';
import './weeklyView.css';
import DayContainer from '../DayContainer';

const weeklyData = data.week;

const WeeklyView = () => {
  return (
    <div className="week-container">
      {weeklyData.map((day, index) => <DayContainer day={day} key={index} />)}
    </div>
  );
};

export default WeeklyView;