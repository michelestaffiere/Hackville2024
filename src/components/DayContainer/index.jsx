import './dayContainer.css';

const DayContainer = (day) => {
  const dayData = day.day;
  const allMainLiftNames = Object.getOwnPropertyNames(dayData.mainLifts);
  const allAuxLiftNames = dayData.auxLifts.map(auxLifts => auxLifts.name);

  return (
  <div className="day-container">
    <h2>Day {dayData.dayNumber}</h2>
    {allMainLiftNames.map((mainLiftName, index) => <h4 key={index}>{mainLiftName}</h4>)}
    {allAuxLiftNames.map((auxLiftName, index) => <p key={index}>{auxLiftName}</p>)}
  </div>
  );
}

export default DayContainer;