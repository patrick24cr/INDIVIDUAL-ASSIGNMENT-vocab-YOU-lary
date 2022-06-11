import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';

const startApp = (user) => {
  domBuilder(user);
  domEvents();
  navigationEvents();
  // formEvents();
  // logoutButton();
  // do something for the dom
};

export default startApp;
