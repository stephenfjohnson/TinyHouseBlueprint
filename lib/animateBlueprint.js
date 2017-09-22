// import React from 'react'
import anime from 'animejs'


// class Person extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { mode: undefined } ;
//   }
//
//   componentWillMount() {
//     let mode;
//     if (this.props.age > 70) {
//       mode = 'old';
//     } else if (this.props.age < 18) {
//       mode = 'young';
//     } else {
//       mode = 'middle';
//     }
//     this.setState({ mode });
//   }
//
//   render() {
//     return (
//       <div className={ classNames('person', this.state.mode) }>
//         { this.props.name } (age: { this.props.age })
//       </div>
//     );
//   }
// }
//
// Person.defaultProps = { age: 'unknown' };
//
// export default Person;

// export default () => (`
//   const Animate = anime({
//     targets: '#blueprint path, #blueprint circle, .logo path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });
//   render () {
//     return (
//       <Animate />
//     )
//   }
// `)
//
// export default () => {
//   const Animate = anime({
//     targets: '#blueprint path, #blueprint circle, .logo path',
//     strokeDashoffset: [anime.setDashoffset, 0],
//     easing: 'easeInOutSine',
//     duration: 500,
//     delay: function(el, i) { return i * 250 },
//     direction: 'alternate',
//     loop: true
//   });
//   render () {
//     return (
//       {Animate}
//     )
//   }
// }
