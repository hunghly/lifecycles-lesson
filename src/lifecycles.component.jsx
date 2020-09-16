import React from 'react';

class Lifecycles extends React.Component {
  constructor() {
    super();
    console.log('constructor!');
  }

  // once the component mounts, it executes the componentDidMount method
  componentDidMount() {
    console.log('componentDidMount!');
  }


  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    console.log('====================================');
    console.log(nextProps.text !== this.props.text);
    console.log('====================================');
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }
}

export default Lifecycles;
