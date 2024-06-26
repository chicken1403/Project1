import React, { Component } from "react";
import CalendarDays from "./calendar-days.jsx";
import "./calendar.css";

export default class Calendar extends Component {
  constructor() {
    super();

    this.weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    this.months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.state = {
      currentDay: new Date(),
    };
  }

  changeCurrentDay = (day) => {
    this.setState({ currentDay: new Date(day.year, day.month, day.number) });
  };

  render() {
    return (
      <div className="calendar">
        <div className="calendar-header">
          <h2 className="text-2xl text-center text-white font-bold">
            {this.months[this.state.currentDay.getMonth()]}{" "}
            {this.state.currentDay.getFullYear()}
          </h2>
        </div>
        <div className="calendar-body">
          <div className="table-header text-white font-bold">
            {this.weekdays.map((weekday) => {
              return (
                <div className="weekday">
                  <p>{weekday}</p>
                </div>
              );
            })}
          </div>
          <div className="text-white">
            <CalendarDays
              day={this.state.currentDay}
              changeCurrentDay={this.changeCurrentDay}
            />
          </div>
        </div>
      </div>
    );
  }
}
