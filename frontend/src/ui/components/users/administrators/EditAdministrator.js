import React from 'react';
import {connect} from 'react-redux';
import {editAdministrator} from '../../../../actionCreators/administratorsActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as styles from './editAdministrator.css'

class EditAdministrator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,

      selectedAdministrator: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
      },

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    };

    this.handleChangeSelectedAdministrator = this.handleChangeSelectedAdministrator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,

      selectedAdministrator: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        phoneNumber: null,
      },

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  };

  handleSubmit() {
    let errorExists = false;

    if (this.state.selectedAdministrator.firstName === null || this.state.selectedAdministrator.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedAdministrator.lastName === null || this.state.selectedAdministrator.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedAdministrator.phoneNumber === null || this.state.selectedAdministrator.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const administrator =
        {
          id: this.state.selectedAdministrator.id,
          firstName: this.state.selectedAdministrator.firstName,
          lastName: this.state.selectedAdministrator.lastName,
          mail: this.state.selectedAdministrator.mail,
          phoneNumber: this.state.selectedAdministrator.phoneNumber,
        };

      this.props.editAdministrator(administrator);
      this.props.setEditAdministratorClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedAdministrator.mail === null || this.state.selectedAdministrator.mail.trim() === '') {
      this.setState({
        mailValidationEmptyString: 'error',
      });

      return false;
    }

    const allEntitiesWithMail =
      [
        ...this.props.administrators,
        ...this.props.generalPractitioners,
        ...this.props.medicalSpecialists,
        ...this.props.patients,
        ...this.props.hospitals,
      ];

    for (let i = 0; i < allEntitiesWithMail.length; i = i + 1) {
      if (allEntitiesWithMail[i] !== null) {
        if (allEntitiesWithMail[i].type !== null &&
          allEntitiesWithMail[i].type !== undefined &&
          allEntitiesWithMail[i].type === 'Administrator' &&
          allEntitiesWithMail[i].id == this.state.selectedAdministrator.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedAdministrator.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedAdministrator.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeSelectedAdministrator = (event) => {
    for (let i = 0; i < this.props.administrators.length; ++i) {
      if (this.props.administrators[i] !== null) {
        if (this.props.administrators[i].id == event.target.value)
          this.setState({
            selectedAdministrator: {
              id: this.props.administrators[i].id,
              firstName: this.props.administrators[i].firstName,
              lastName: this.props.administrators[i].lastName,
              mail: this.props.administrators[i].mail,
              phoneNumber: this.props.administrators[i].phoneNumber,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleChangeFirstName(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.editAdministratorClicked}
          onHide={() => {
            this.props.setEditAdministratorClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Uredi administratora</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi administratora</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedAdministrator}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.administrators
                    .filter(administrator => administrator.id !== this.props.userData.id)
                    .map(administrator => {
                      const fullName = administrator.firstName + " " + administrator.lastName + " - " + administrator.mail;
                      return (
                        <option key={administrator.id} value={administrator.id}>
                          {fullName}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Choose>
                <When
                  condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}>
                  <form>
                    <FormGroup
                      controlId="formBasicText"
                      validationState={this.state.firstNameValidation}
                    >
                      <ControlLabel>Ime</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite ime"
                        onChange={this.handleChangeFirstName}
                        value={this.state.selectedAdministrator.firstName}
                      />
                      <Row>
                        <Col md={4}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.firstNameValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti ime.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.lastNameValidation}>
                      <ControlLabel>Prezime</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite prezime"
                        onChange={this.handleChangeLastName}
                        value={this.state.selectedAdministrator.lastName}
                      />
                      <Row>
                        <Col md={4}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.lastNameValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti prezime.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.mailValidationAlreadyExists || this.state.mailValidationNotCorrectFormat || this.state.mailValidationEmptyString}>
                      <ControlLabel>Mail</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite mail"
                        onChange={this.handleChangeMail}
                        value={this.state.selectedAdministrator.mail}
                      />
                      <Row>
                        <Col md={7}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.mailValidationEmptyString === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti mail adresu.</p>
                            </Collapse>
                            <Collapse in={this.state.mailValidationNotCorrectFormat === 'error'}>
                              <p className={styles.pInvalid}>Format unesene mail adrese nije ispravan.</p>
                            </Collapse>
                            <Collapse in={this.state.mailValidationAlreadyExists === 'error'}>
                              <p className={styles.pInvalid}>Unesena mail adresa već postoji.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.phoneNumberValidation}>
                      <ControlLabel>Broj mobitela</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite broj mobitela"
                        onChange={this.handleChangePhoneNumber}
                        value={this.state.selectedAdministrator.phoneNumber}
                      />
                      <Row>
                        <Col md={6}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.phoneNumberValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti broj mobitela.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                  </form>
                  <Row>
                    <Col mdOffset={1} md={4}>
                      <Button
                        className={styles.button}
                        onClick={() => this.handleSubmit()}
                      >
                        <span className='glyphicon glyphicon-floppy-save'/> Spremi promjene
                      </Button>
                    </Col>
                    <Col mdOffset={2} md={4}>
                      <Button
                        className={styles.button}
                        onClick={() => {
                          this.props.setEditAdministratorClicked(false);
                          this.resetState();
                        }}
                      >
                        <span className='glyphicon glyphicon-share-alt'/> Odustani
                      </Button>
                    </Col>
                  </Row>
                </When>
              </Choose>
            </FormGroup>
          </Modal.Body>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    administrators: state.administrators,
    generalPractitioners: state.generalPractitioners,
    medicalSpecialists: state.medicalSpecialists,
    patients: state.patients,
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editAdministrator: administrator => dispatch(editAdministrator(administrator)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditAdministrator);
