import React, { useEffect, useState } from "react";
import styles from "../styles/DailyView.module.css";

const DailyView = ({ liftData, dayNumber, weekNumber }) => {
  const mainLiftData = liftData.mainLifts;
  const mainLiftNames = Object.getOwnPropertyNames(mainLiftData);
  const mainLifts = mainLiftNames.map((mainLiftName, index) => mainLiftData[mainLiftName]);
  const weightUnit = mainLifts[0].weightUnits;
  const auxiliaries = liftData.auxLifts;


  const [dataLogged, setDataLogged] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className={styles.mainContainer}>
      <p>{`Day ${liftData.dayNumber}`}</p>
      <div className={styles.subContainer}>
        <form onSubmit={handleFormSubmit}>
          {/* Main / Compound Lifts. */}
          {mainLifts.map((mainLift, index) => {
            let arrayFromSets = Array.from(Array(mainLift.sets).keys());
            return (
              <div className={styles.liftTrackContainer} key={index}>
                <p>
                  <strong>
                    {mainLift.movement}: {mainLift.targetWeight} {mainLift.sets}
                    x{mainLift.reps} @ RPE {mainLift.targetRPE}
                  </strong>
                </p>
                {arrayFromSets.map((set, index) => {
                  return (
                    <div
                      key={index + 1}
                      className={styles.liftTrackContainer__inputContainer}
                    >
                      <label 
                        className={styles.sr}
                        htmlFor={`set${set + 1}`}
                        >
                        Set {set + 1}
                      </label>
                      <input
                        type="number"
                        id={`set${set + 1}`}
                        name="setInput"
                        disabled={dataLogged}
                        placeholder="Set Weight"
                        required
                      />
                      <label 
                        className={styles.sr}
                        htmlFor={`rpeSet${set + 1}`}
                        >
                        Actual RPE
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={10}
                        id={`rpeSet${set + 1}`}
                        name="rpeInput"
                        disabled={dataLogged}
                        placeholder="Set RPE"
                        required
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
          {/* Auxilary lifts. */}
          {auxiliaries.map((auxiliary, index) => (
            <p key={index}>
              <strong>{auxiliary.name}:</strong> {auxiliary.sets}x{auxiliary.reps} @ RPE{" "}{auxiliary.rpe}
            </p>
          ))}

          <button type="submit">Log Session</button>
        </form>
      </div>
    </div>
  );
};

export default DailyView;
