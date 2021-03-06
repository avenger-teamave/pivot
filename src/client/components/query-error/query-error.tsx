require('./query-error.css');

import { List } from 'immutable';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { STRINGS } from '../../config/constants';

export interface QueryErrorProps extends React.Props<any> {
  error: any;
}

export interface QueryErrorState {
}

export class QueryError extends React.Component<QueryErrorProps, QueryErrorState> {

  constructor() {
    super();
  }

  render() {
    var { error } = this.props;

    return <div className="query-error">
      <div className="whiteout"></div>
      <div className="container">
        <div className="error">{STRINGS.queryError}</div>
        <div className="message">{error.message}</div>
      </div>
    </div>;
  }
}
