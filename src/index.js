import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { WithTranslations, getCurrentLocale } from '@fishingbooker/translations';
import App from './App';
import configureStore from '../../redux/src/redux/store/configureStore';
import * as TRANSLATIONS from './translations';

const userLocale = getCurrentLocale();

window.ReduxRouterBoilerplate = {
  render: (element) => {
    const store = configureStore();
    render(
      <WithTranslations
        locale={userLocale}
        domains={Object.values(TRANSLATIONS.DOMAINS)}
      >
        <Provider store={store}>
          <Router>
            <App />
          </Router>
        </Provider>
      </WithTranslations>,
      element
    );
  }
};
