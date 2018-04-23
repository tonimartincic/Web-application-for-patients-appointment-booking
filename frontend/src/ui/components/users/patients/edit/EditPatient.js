import React from 'react';
import {connect} from 'react-redux';
import {editPatient} from '../../../../../actionCreators/patientsActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as constants from '../../../../../constants/values';
import * as styles from './editPatient.css'

class EditPatient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,

      selectedPatient: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    };

    this.handleChangeSelectedPatient = this.handleChangeSelectedPatient.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeStreetNumber = this.handleChangeStreetNumber.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,

      selectedPatient: {
        id: null,
        firstName: null,
        lastName: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    });
  };

  handleSubmit() {
    let errorExists = false;

    if (this.state.selectedPatient.firstName === null || this.state.selectedPatient.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.lastName === null || this.state.selectedPatient.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.phoneNumber === null || this.state.selectedPatient.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.city === null || this.state.selectedPatient.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.postalCode === null || this.state.selectedPatient.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.street === null || this.state.selectedPatient.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.streetNumber === null || this.state.selectedPatient.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const patient =
        {
          id: this.state.selectedPatient.id,
          firstName: this.state.selectedPatient.firstName,
          lastName: this.state.selectedPatient.lastName,
          mail: this.state.selectedPatient.mail,
          phoneNumber: this.state.selectedPatient.phoneNumber,
          city: this.state.selectedPatient.city,
          postalCode: this.state.selectedPatient.postalCode,
          street: this.state.selectedPatient.street,
          streetNumber: this.state.selectedPatient.streetNumber,
        };

      this.props.editPatient(patient);
      this.props.setEditPatientClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedPatient.mail === null || this.state.selectedPatient.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.PATIENT &&
          allEntitiesWithMail[i].id === this.state.selectedPatient.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedPatient.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedPatient.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeSelectedPatient = (event) => {
    for (let i = 0; i < this.props.patients.length; ++i) {
      if (this.props.patients[i] !== null) {
        if (this.props.patients[i].id == event.target.value)
          this.setState({
            selectedPatient: {
              id: this.props.patients[i].id,
              firstName: this.props.patients[i].firstName,
              lastName: this.props.patients[i].lastName,
              mail: this.props.patients[i].mail,
              phoneNumber: this.props.patients[i].phoneNumber,
              city: this.props.patients[i].city,
              postalCode: this.props.patients[i].postalCode,
              street: this.props.patients[i].street,
              streetNumber: this.props.patients[i].streetNumber,
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
      selectedPatient: {
        ...this.state.selectedPatient,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        city: e.target.value,
      },

      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        street: e.target.value,
      },

      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        streetNumber: e.target.value,
      },

      streetNumberValidation: null,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.editPatientClicked}
          onHide={() => {
            this.props.setEditPatientClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Uredi pacijenta</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi pacijenta</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedPatient}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.patients
                    .map(patient => {
                      const fullName = patient.firstName + " " + patient.lastName + " - " + patient.mail;
                      return (
                        <option key={patient.id} value={patient.id}>
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
                        value={this.state.selectedPatient.firstName}
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
                        value={this.state.selectedPatient.lastName}
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
                        value={this.state.selectedPatient.mail}
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
                        value={this.state.selectedPatient.phoneNumber}
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
                    <FormGroup
                      validationState={this.state.cityValidation}>
                      <ControlLabel>Grad</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite grad"
                        onChange={this.handleChangeCity}
                        value={this.state.selectedPatient.city}
                      />
                      <Row>
                        <Col md={6}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.cityValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti grad.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.postalCodeValidation}>
                      <ControlLabel>Poštanski broj</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite poštanski broj"
                        onChange={this.handleChangePostalCode}
                        value={this.state.selectedPatient.postalCode}
                      />
                      <Row>
                        <Col md={6}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.postalCodeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti poštanski broj.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.streetValidation}>
                      <ControlLabel>Ulica</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite ulicu"
                        onChange={this.handleChangeStreet}
                        value={this.state.selectedPatient.street}
                      />
                      <Row>
                        <Col md={6}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.streetValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti ulicu.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.streetNumberValidation}>
                      <ControlLabel>Kućni broj</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite kućni broj"
                        onChange={this.handleChangeStreetNumber}
                        value={this.state.selectedPatient.streetNumber}
                      />
                      <Row>
                        <Col md={6}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.streetNumberValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti kućni broj.</p>
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
                          this.props.setEditPatientClicked(false);
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
    editPatient: patient => dispatch(editPatient(patient)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPatient);