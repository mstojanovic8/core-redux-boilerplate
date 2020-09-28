import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { WithTranslations, getCurrentLocale } from '@fishingbooker/translations';
import App from './containers/App';
import configureStore from './redux/store/configureStore';

import * as TRANSLATIONS from './translations';

const userLocale = getCurrentLocale();

window.ReduxBoilerplate = {
  render: (element) => {
    const store = configureStore();
    render(
      <WithTranslations
        locale={userLocale}
        domains={Object.values(TRANSLATIONS.DOMAINS)}
      >
        <Provider store={store}>
          <App userId={1} />
        </Provider>
      </WithTranslations>,
      element
    );
  }
};
