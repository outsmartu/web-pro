import _ from 'lodash';
import '../css/styles.css';
import printMe from './print.js';


function component() {
  var el = document.createElement('div');
  var btn = document.createElement('button');



  el.innerHTML = _.join(['Hello', 'webpack'], ' ');
  el.classList.add('hello');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  el.appendChild(btn);

  return el;
}

let el = component(); // Store the element to re-render on print.js changes
document.body.appendChild(el);


if (module.hot) {
	module.hot.accept('./print.js', function() {
		console.log('Accepting the updated printMe module!');

		document.body.removeChild(el);
		el = component(); // Re-render the "component" to update the click handler
		document.body.appendChild(el);
	})
}