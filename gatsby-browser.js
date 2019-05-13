import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from '@sentry/browser';
import numeral from 'numeral';

import 'typeface-poppins';
import 'typeface-notosans-kor';
import 'typeface-noto-sans';

import '@fortawesome/fontawesome-free/css/fontawesome.css';
import '@fortawesome/fontawesome-free/css/all.css';

import './src/scss/theme.scss';

numeral.register('locale', 'fs', {
  abbreviations: {
    thousand: 'K',
    million: 'M',
    billion: 'B',
    trillion: 'T',
  },
});

numeral.locale('fs');

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, eventId: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo);
      const eventId = Sentry.captureException(error);
      this.setState({ eventId });
    });
  }

  render() {
    const { error, eventId } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <div
          onClick={() => {}}
          onKeyPress={() => Sentry.showReportDialog({ eventId })}
          role="button"
          tabIndex="0"
        >
          Report feedback
        </div>
      );
    }
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.shape,
};

export default ErrorBoundary;
