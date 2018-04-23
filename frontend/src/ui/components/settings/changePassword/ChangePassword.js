import React from 'react';
import {Alert, Button, Col, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux'
import {changePassword} from "../../../../actionCreators/userDataActionCreators";
import * as styles from '../../users/administrators/add/addAdministrator.css';

class ChangePassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oldPassword: null,
      newPassword: null,
      newPasswordRepeated: null,

      oldPasswordValidation: null,
      newPasswordsMatchingValidation: null,
      emptyPasswordFieldsValidation: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeOldPassword = this.handleChangeOldPassword.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleChangeNewPasswordRepeated = this.handleChangeNewPasswordRepeated.bind(this);
    this.resetState = this.resetState.bind(this);
  }

  resetState() {
    this.setState({
      oldPassword: null,
      newPassword: null,
      newPasswordRepeated: null,

      oldPasswordValidation: null,
      newPasswordsMatchingValidation: null,
      emptyPasswordFieldsValidation: null,
    })
  }

  handleSubmit = () => {
    let errorExists = false;

    if (this.state.oldPassword !== this.props.userData.password) {
      this.setState({
        oldPasswordValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.oldPassword === null || this.state.oldPassword.trim() === '' ||
      this.state.newPassword === null || this.state.newPassword.trim() === '' ||
      this.state.newPasswordRepeated === null || this.state.newPasswordRepeated.trim() === '') {

      this.setState({
        emptyPasswordFieldsValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.newPassword !== this.state.newPasswordRepeated) {
      this.setState({
        newPasswordsMatchingValidation: 'error',
      });

      errorExists = true;
    }

    if (!errorExists) {
      const user = {
        id: this.props.userData.id,
        password: this.state.newPassword,
        type: this.props.userData.type,
      };

      this.props.changePassword(user);
      this.props.setChangePasswordClicked();
      this.resetState();
    }
  }

  handleChangeOldPassword = event =>
    this.setState({
      oldPassword: event.target.value,
      oldPasswordValidation: null,
      emptyPasswordFieldsValidation: null,
    });

  handleChangeNewPassword = event =>
    this.setState({
      newPassword: event.target.value,
      newPasswordsMatchingValidation: null,
      emptyPasswordFieldsValidation: null,
    });

  handleChangeNewPasswordRepeated = event =>
    this.setState({
      newPasswordRepeated: event.target.value,
      newPasswordsMatchingValidation: null,
      emptyPasswordFieldsValidation: null,
    });


  render() {
    return (
      <Modal show={this.props.changePasswordClicked}
             onHide={() => this.props.setChangePasswordClicked(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Promijeni lozinku</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <FormGroup
              controlId="formControlOldPassword"
            >
              <ControlLabel>Stara lozinka</ControlLabel>
              <FormControl
                type="password"
                placeholder="Unesite staru lozinku"
                onChange={this.handleChangeOldPassword}
                value={this.state.oldPassword}
              />
            </FormGroup>
            <FormGroup
              controlId="formControlNewPassword"
            >
              <ControlLabel>Nova lozinka</ControlLabel>
              <FormControl
                type="password"
                placeholder="Unesite novu lozinku"
                onChange={this.handleChangeNewPassword}
                value={this.state.newPassword}
              />
            </FormGroup>
            <FormGroup
              controlId="formControlNewPasswordRepeated"
            >
              <ControlLabel>Ponovljena nova lozinka</ControlLabel>
              <FormControl
                type="password"
                placeholder="Ponovite novu lozinku"
                onChange={this.handleChangeNewPasswordRepeated}
                value={this.state.newPasswordRepeated}
              />
            </FormGroup>
          </form>
          <Choose>
            <When condition={this.state.oldPasswordValidation}>
              <Alert bsStyle="danger">
                <p>Krivo unesena stara lozinka.</p>
              </Alert>
            </When>
          </Choose>
          <Choose>
            <When condition={this.state.newPasswordsMatchingValidation}>
              <Alert bsStyle="danger">
                <p>Nova lozinka se ne podudara sa ponovljenom novom lozinkom.</p>
              </Alert>
            </When>
          </Choose>
          <Choose>
            <When condition={this.state.emptyPasswordFieldsValidation}>
              <Alert bsStyle="danger">
                <p>Morate popuniti sva polja.</p>
              </Alert>
            </When>
          </Choose>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col mdOffset={1} md={4}>
              <Button
                className={styles.button}
                onClick={() => this.handleSubmit()}
              >
                <span className='glyphicon glyphicon-plus'/> Potvrdi
              </Button>
            </Col>
            <Col mdOffset={2} md={4}>
              <Button
                className={styles.button}
                onClick={() => {
                  this.props.setChangePasswordClicked(false);
                  this.resetState();
                }}
              >
                <span className='glyphicon glyphicon-share-alt'/> Odustani
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
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
    changePassword: user => dispatch(changePassword(user)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);
