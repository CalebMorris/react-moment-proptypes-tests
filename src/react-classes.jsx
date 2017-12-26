class Greetings extends React.Component
{
    render() {
        return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
    }
}

Greetings.propTypes = {
  name: PropTypes.string
};
// 
// window.onload = function() {
//   console.log('sinon: ' + !!sinon)
//     ReactDOM.render(
//         React.createElement(Greetings, { name : 123 }),
//         document.getElementById('render-root')
//     );
//
//     ReactDOM.render(
//         React.createElement(Greetings, { name : '2' }),
//         document.getElementById('render-root')
//     );
// };
