import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Button, Col, Collapse, FormControl, Grid, Row} from 'react-bootstrap';
import {validateUser} from '../../../actionCreators/userData/userDataActionCreators';
import {setInvalidUserNameAndPasswordValue} from '../../../actions/userData/userDataActions';
import styles from './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    localStorage.removeItem('user');

    this.state = {
      mail: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChangeUserId = this.handleChangeUserId.bind(this);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.validateUser(
      {
        mail: this.state.mail,
        password: this.state.password,
      }
    );
  };

  handleChangeUserId = (event) => {
    this.setState({
      mail: event.target.value,
    });

    this.props.setInvalidUserNameAndPasswordValue(false);
  };

  handleChangePass = (event) => {
    this.setState({
      password: event.target.value,
    });

    this.props.setInvalidUserNameAndPasswordValue(false);
  };

  handleDelete = () => {
    this.setState({
      mail: '',
      password: '',
    });

    this.props.setInvalidUserNameAndPasswordValue(false);
  };

  render() {
    return (
      <section className={styles.sectionMain}>
        <Grid className={styles.container}>
          <Row>
            <Col md={12}>
              <section className={styles.sectionTitle}>
                <span className={styles.letter} data-letter="S">S</span>
                <span className={styles.letter} data-letter="N">N</span>
                <span className={styles.letter} data-letter="A">A</span>
                <span className={styles.letter} data-letter="R">R</span>
                <span className={styles.letter} data-letter="P">P</span>
              </section>
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
                        value={this.state.mail}
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
                      <Collapse in={this.props.userData.invalidUserNameAndPassword}>
                        <p className={styles.pInvalid}>Uneseni podatci nisu ispravni.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
                <section className={styles.section}>
                  <Row>
                    <Col>
                      <Button
                        className={styles.button}
                        type='submit'
                        onClick={this.handleSubmit}
                      >
                        <span>
                          <span className='glyphicon glyphicon-log-in'/> Prijava
                        </span>
                      </Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button
                        className={styles.button}
                        type='button'
                        onClick={this.handleDelete}
                      >
                        <span>
                          <span className='glyphicon glyphicon-remove'/> Resetiraj
                        </span>
                      </Button>
                    </Col>
                  </Row>
                </section>
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
    validateUser: user => dispatch(validateUser(user)),
    setInvalidUserNameAndPasswordValue: value => dispatch(setInvalidUserNameAndPasswordValue(value)),
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
