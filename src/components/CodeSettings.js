import React from 'react';
import PropTypes from 'prop-types';
// import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

import {
  OUTPUT_PAGE,
  OUTPUT_CONSOLE,
  OUTPUT_BOTH,
  OUTPUT_NONE,
} from '../actions/session';

import * as MODES from '../lib/cm-modes';

const noop = () => {};

export default class CodeSettings extends React.Component {
  constructor(props) {
    super(props);
    this.changeSource = this.changeSource.bind(this);
    this.changeOutput = this.changeOutput.bind(this);
    this.changeEditor = this.changeEditor.bind(this);
    this.changeApp = this.changeApp.bind(this);
    this.changeBin = this.changeBin.bind(this);
    this.state = { height: 0 };
  }

  changeOutput(e) {
    this.props.changeOutput(e.target.value);
  }

  changeSource(e) {
    this.props.setSource(e.target.value);
  }

  changeApp(property, value) {
    this.props.toggleLayout(value);
  }

  changeEditor(property, value) {
    this.props.set(property, value);
  }

  changeBin(propery, value) {}

  render() {
    const {
      // updated,
      // bin,
      lineWrapping,
      lineNumbers,
      source,
      output,
      splitColumns,
    } = this.props;
    return (
      <div className="CodeSettings">
        <label className="grow">
          Source{' '}
          <select value={source} onChange={this.changeSource}>
            <option value={MODES.HTML}>HTML</option>
            <option value={MODES.JAVASCRIPT}>JavaScript</option>
            <option value={MODES.CSS}>CSS</option>
          </select>
        </label>
        <label className="output grow">
          Output{' '}
          <select value={output} onChange={this.changeOutput}>
            <option value={OUTPUT_PAGE}>Page</option>
            <option value={OUTPUT_CONSOLE}>Console</option>
            <option value={OUTPUT_BOTH}>Both</option>
            <option value={OUTPUT_NONE}>None</option>
          </select>
        </label>
        {/* <details>
          <summary>Metadata</summary>
          <label className="grow">
            Title
            <input
              name="title"
              type="text"
              onChange={e => {
                this.changeBin('title', e.target.value);
              }}
              value={bin.title}
            />{' '}
          </label>
        </details> */}
        <details>
          <summary>Quick Settings</summary>
          <label>
            <input
              name="lineNumbers"
              type="checkbox"
              onChange={e => {
                this.changeEditor('lineNumbers', e.target.checked);
              }}
              checked={lineNumbers}
            />{' '}
            Line numbers
          </label>

          <label>
            <input
              name="lineWrapping"
              type="checkbox"
              onChange={e => {
                this.changeEditor('lineWrapping', e.target.checked);
              }}
              checked={lineWrapping}
            />{' '}
            Line wrap
          </label>

          <label>
            <input
              name="splitColumns"
              type="checkbox"
              onChange={e => {
                this.changeApp('splitColumns', e.target.checked);
              }}
              checked={splitColumns}
            />{' '}
            Horizontal splitter
          </label>
        </details>

        {/* {updated &&
          `Last saved: ${distanceInWordsToNow(updated, {
            includeSeconds: true,
          })}`} */}
      </div>
    );
  }
}

CodeSettings.propTypes = {
  lineWrapping: PropTypes.bool.isRequired,
  lineNumbers: PropTypes.bool.isRequired,
  source: PropTypes.string.isRequired,
  output: PropTypes.string,
  // updated: PropTypes.string,
  splitColumns: PropTypes.bool,
  toggleOutput: PropTypes.func,
  set: PropTypes.func,
  setSource: PropTypes.func,
  changeOutput: PropTypes.func,
  onRefresh: PropTypes.func,
  toggleLayout: PropTypes.func,
};

CodeSettings.defaultProps = {
  toggleLayout: noop,
};
