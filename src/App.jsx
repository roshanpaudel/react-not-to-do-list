import { useRef, useState } from "react";
import "./App.css";
import { UserInput } from "./UserInput";
import { Table } from "./Table";

function App() {
  const [habitData, setHabitData] = useState([]);
  const habitRef = useRef();
  const hourRef = useRef();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    const inputObj = {
      habitName: habitRef.current.value,
      hours: hourRef.current.value,
      isBadHabit: false,
    };
    setHabitData((prevData) => [...prevData, inputObj]);
  };
  const deleteData = (objIndex) => {
    setHabitData((prev) => prev.filter((_, index) => index !== objIndex));
  };
  const toggleBadHabit = (index) => {
    setHabitData((prevHabitData) =>
      prevHabitData.map((habit, i) =>
        i === index ? { ...habit, isBadHabit: !habit.isBadHabit } : habit
      )
    );
  };

  return (
    <>
      <div className="wrapper pt-5">
        <div className="container">
          <h1 className="text-center">Not To Do List</h1>
          <UserInput
            habitRef={habitRef}
            hourRef={hourRef}
            handleOnSubmit={handleOnSubmit}
          />
          <div>
            <div class="row mt-5">
              <div class="col-md">
                <h3 class="text-center">Entry List</h3>
                <hr />

                <table class="table table-striped table-hover border">
                  {habitData.map(
                    (habitData, index) =>
                      habitData.isBadHabit === false && (
                        <Table
                          toggleBadHabit={toggleBadHabit}
                          deleteData={deleteData}
                          habitData={habitData}
                          index={index}
                        />
                      )
                  )}
                </table>
              </div>
              <div class="col-md">
                <h3 class="text-center">Bad List</h3>
                <hr />

                <table class="table table-striped table-hover border">
                  {habitData.map(
                    (habitData, index) =>
                      habitData.isBadHabit === true && (
                        <Table
                          toggleBadHabit={toggleBadHabit}
                          deleteData={deleteData}
                          habitData={habitData}
                          index={index}
                        />
                      )
                  )}
                </table>

                <div class="alert alert-success">
                  You could have saved = <span id="savedHrsElm"></span> hr
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
