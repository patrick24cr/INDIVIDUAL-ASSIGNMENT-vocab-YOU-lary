import domBuilder from '../components/domBuilder';
import navigationEvents from '../events/navigationEvents';
import domEvents from '../events/domEvents';
import formEvents from '../events/formEvents';

const startApp = (user) => {
  domBuilder(user.uid);
  domEvents(user.uid);
  navigationEvents(user.uid);
  formEvents(user.uid);
};

export default startApp;
