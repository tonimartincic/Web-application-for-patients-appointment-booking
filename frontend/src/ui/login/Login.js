import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { Col, FormControl, Button, Collapse, Row, Grid } from 'react-bootstrap';
import validateUser from '../../actionCreators/userDataActionCreators';
import styles from './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    localStorage.removeItem('user');

    this.state = {
      userId: '',
      password: '',
      invalidUserNameAndPassword: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangeUserId = this.handleChangeUserId.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.validateUser(this.state.userId, this.state.password);
  };

  handleChangeUserId = (event) => {
    this.setState({
      userId: event.target.value,
      invalidUserNameAndPassword: false,
    });
  };

  handleChangePass = (event) => {
    this.setState({
      password: event.target.value,
      invalidUserNameAndPassword: false,
    });
  };

  handleDelete = () => {
    this.setState({
      userId: '',
      password: '',
      invalidUserNameAndPassword: false,
    });
  };

  render() {
    return (
      <section className={styles.sectionMain}>
        <Grid className={styles.container}>
          <Row>
            <Col md={4} mdOffset={4}>
              <h1 className={styles.h1ElegantShadow}>Eureka</h1>
            </Col>
          </Row>
          <form>
            <Row>
              <Col md={4} mdOffset={4}>
                <Row>
                  <Col>
                    <section className={styles.section}>
                      <FormControl
                        type="text"
                        value={this.state.userId}
                        placeholder="Korisničko ime"
                        onChange={this.handleChangeUserId}
                      />
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section className={styles.sectionSpacing}>
                      <FormControl
                        type="password"
                        value={this.state.password}
                        placeholder="Lozinka"
                        onChange={this.handleChangePass}
                      />
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section>
                      <Collapse in={this.state.invalidUserNameAndPassword}>
                        <p className={styles.pInvalid}>Uneseni podatci nisu ispravni.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section className={styles.section}>
                      <Button
                        className={styles.button}
                        bsStyle='primary'
                        type='submit'
                        onClick={this.handleSubmit}
                      ><span>Prijava</span></Button>
                    </section>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <section className={styles.section}>
                      <Button
                        className={styles.button}
                        bsStyle='warning'
                        type='button'
                        onClick={this.handleDelete}
                      ><span>Resetiraj</span></Button>
                    </section>
                  </Col>
                </Row>
              </Col>
            </Row>
          </form>
        </Grid>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    validateUser: (userId, password) => dispatch(validateUser(userId, password)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
