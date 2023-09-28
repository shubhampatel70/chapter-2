import React from 'react';

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
  
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
    }
  
    render() {
      return (
        <div>
          <h1 style={{color: 'crimson'}}>Task-c</h1>
          <h2>Time : {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }
  
  export default Clock;



  // function Clock() {
//   const [date, setDate] = useState(new Date());
  
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setDate(new Date());
//     }, 500)

//     return () => clearInterval(intervalId);
//   }, [])

//   return (
//     <>
//         <h1 style={{ color: 'crimson'}}>Task-c</h1>
//         <p className='clock'>
//         {date.toLocaleTimeString()}
//         </p>
//     </>
//   );
// }

// export default Clock;
