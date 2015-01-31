var Clock = React.createClass({
  clockTick: function clockTick(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    milliseconds = date.getMilliseconds();
    this.setState({hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds});
  },
  getInitialState: function getInitialState(){
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();
    milliseconds = date.getMilliseconds();
    return({hours: hours, minutes: minutes, seconds: seconds, milliseconds: milliseconds});
  },
  render: function render(){
    return <h1>
      {this.state.hours}:{this.state.minutes}:{this.state.seconds}:{this.state.milliseconds}
      </h1>
  },
  componentDidMount: function componentDidMount(){
    setInterval(this.clockTick, 1);
  }
});

React.renderComponent(<Clock />,
    document.getElementById('clock')
);
//React.renderComponent(<Clock>, document.getElementById('clock'));