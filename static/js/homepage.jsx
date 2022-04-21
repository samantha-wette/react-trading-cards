'use strict';

function Homepage() {
  return (
    <React.Fragment>
      <l>Hey there!</l>
      <a href='/cards'>The cards are here!</a>
      <img src='/static/img/balloonicorn.jpg'></img>      
    </React.Fragment>
  )
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
