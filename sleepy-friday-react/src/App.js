import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      daysTil: 4 - new Date().getDay(),
      hoursTil: 23 - new Date().getHours(),
      minutesTil: 60 - new Date().getMinutes(),
      secondsTil: 60 - new Date().getSeconds()
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        daysTil: 4 - new Date().getDay(),
        hoursTil: 23 - new Date().getHours(),
        minutesTil: 60 - new Date().getMinutes(),
        secondsTil: 60 - new Date().getSeconds()
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div className="App">
        <div className="Countdown">
          <div className="CountdownItem">
            <span className="counter">{this.state.daysTil}</span>
            <span className="date-type">Days</span>
          </div>

          <div className="CountdownItem">
            <span className="counter">{this.state.hoursTil}</span>
            <span className="date-type">Hours</span>
          </div>

          <div className="CountdownItem">
            <span className="counter">{this.state.minutesTil}</span>
            <span className="date-type">Minutes</span>
          </div>

          <div className="CountdownItem">
            <span className="counter">{this.state.secondsTil}</span>
            <span className="date-type">Seconds</span>
          </div>
        </div>
        <h1>Until Sleepy Friday!</h1>
      </div>
    );
  }
}

export default App;
