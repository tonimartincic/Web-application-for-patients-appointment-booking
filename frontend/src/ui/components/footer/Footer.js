import React from 'react';
import {connect} from 'react-redux';
import styles from './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <span className={styles.span}>
          Završni rad 2017./2018., Student: Toni Martinčić, Mentor: izv. prof. dr. sc. Mirko Randić
        </span>
      </footer>
    );
  }
}

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
