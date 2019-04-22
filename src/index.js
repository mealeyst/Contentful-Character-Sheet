import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { init } from 'contentful-ui-extensions-sdk';
import '@contentful/forma-36-react-components/dist/styles.css';
import {
  CharacterName,
  CharacterTraits,
  Combat,
  Details,
  Stats
} from './components';

class App extends React.Component {
  static propTypes = {
    sdk: PropTypes.object.isRequired,
  };

  detachExternalChangeHandler = null;

  constructor(props) {
    super(props);
    console.log(props.sdk.space.getEntries({content_type: 'character_class'}))
    this.state = {
      values: props.sdk.field.getValue()
    };
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.setValue = this.setValue.bind(this);
  }

  componentDidMount() {
    this.props.sdk.window.startAutoResizer();

    // Handler for external field value changes (e.g. when multiple authors are working on the same entry).
    this.detachExternalChangeHandler = this.props.sdk.field.onValueChanged(
      this.onExternalChange
    );
  }

  componentWillUnmount() {
    if (this.detachExternalChangeHandler) {
      this.detachExternalChangeHandler();
    }
  }

  toggleDropdown (key) {
    const { toggle } = this.state
    this.setState({
      toggle: {
        ...toggle,
        [key]: !toggle[key]
      }
    })
  }

  setValue (key) {
    return ({target: { value } }) => {
      const values = {
        ...this.state.values,
        [key]: value
      }
      this.setState({
        values: values
      })
      this.props.sdk.field.setValue(values);
    }
  }

  onExternalChange = value => {
    this.setState({ value });
  };

  onChange = e => {
    const value = e.currentTarget.value;
    this.setState({ value });
    if (value) {
      this.props.sdk.field.setValue(value);
    } else {
      this.props.sdk.field.removeValue();
    }
  };

  render() {
    const { className } = this.props
    const { values } = this.state
    return (
      <form className={className}>
        <h1>Character Sheet</h1>
        <Details setValue={this.setValue} values={values} {...this.props} />
        <Stats setValue={this.setValue} values={values} {...this.props} />
        <Combat setValue={this.setValue} values={values} {...this.props} />
      </form>
    );
  }
}

const StyledApp = styled(App)`
  display: flex;
  flex-wrap: wrap;
  h1 {
    flex-basis: 100%;
  }
  @media (min-width: 769px) {
    .stats {
      flex-basis: 33%;
      display: flex;
      > * {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
  input[name="inspiration"] {
    height: 30px;
    width: 30px;
  }
`
init(sdk => {
  ReactDOM.render(<App sdk={sdk} />, document.getElementById('root'));
});

// Enabling hot reload
if (module.hot) {
  module.hot.accept();
}
