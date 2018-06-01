import React from 'react';
import {connect} from 'react-redux';
import {editGeneralPractitioner} from '../../../../../actionCreators/users/generalPractitionersActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as constants from '../../../../../constants/values';
import * as styles from './editGeneralPractitioner.css'

class EditGeneralPractitioner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,

      selectedGeneralPractitioner: {
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

    this.handleChangeSelectedGeneralPractitioner = this.handleChangeSelectedGeneralPractitioner.bind(this);
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

      selectedGeneralPractitioner: {
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

    if (this.state.selectedGeneralPractitioner.firstName === null || this.state.selectedGeneralPractitioner.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.lastName === null || this.state.selectedGeneralPractitioner.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.phoneNumber === null || this.state.selectedGeneralPractitioner.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.city === null || this.state.selectedGeneralPractitioner.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.postalCode === null || this.state.selectedGeneralPractitioner.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.street === null || this.state.selectedGeneralPractitioner.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.streetNumber === null || this.state.selectedGeneralPractitioner.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const generalPractitioner =
        {
          id: this.state.selectedGeneralPractitioner.id,
          firstName: this.state.selectedGeneralPractitioner.firstName,
          lastName: this.state.selectedGeneralPractitioner.lastName,
          mail: this.state.selectedGeneralPractitioner.mail,
          phoneNumber: this.state.selectedGeneralPractitioner.phoneNumber,
          city: this.state.selectedGeneralPractitioner.city,
          postalCode: this.state.selectedGeneralPractitioner.postalCode,
          street: this.state.selectedGeneralPractitioner.street,
          streetNumber: this.state.selectedGeneralPractitioner.streetNumber,
        };

      this.props.editGeneralPractitioner(generalPractitioner);
      this.props.setEditGeneralPractitionerClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedGeneralPractitioner.mail === null || this.state.selectedGeneralPractitioner.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.GENERAL_PRACTITIONER &&
          allEntitiesWithMail[i].id === this.state.selectedGeneralPractitioner.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedGeneralPractitioner.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedGeneralPractitioner.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeSelectedGeneralPractitioner = (event) => {
    for (let i = 0; i < this.props.generalPractitioners.length; ++i) {
      if (this.props.generalPractitioners[i] !== null) {
        if (this.props.generalPractitioners[i].id == event.target.value)
          this.setState({
            selectedGeneralPractitioner: {
              id: this.props.generalPractitioners[i].id,
              firstName: this.props.generalPractitioners[i].firstName,
              lastName: this.props.generalPractitioners[i].lastName,
              mail: this.props.generalPractitioners[i].mail,
              phoneNumber: this.props.generalPractitioners[i].phoneNumber,
              city: this.props.generalPractitioners[i].city,
              postalCode: this.props.generalPractitioners[i].postalCode,
              street: this.props.generalPractitioners[i].street,
              streetNumber: this.props.generalPractitioners[i].streetNumber,
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
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        city: e.target.value,
      },

      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        street: e.target.value,
      },

      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        streetNumber: e.target.value,
      },

      streetNumberValidation: null,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.editGeneralPractitionerClicked}
          onHide={() => {
            this.props.setEditGeneralPractitionerClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Uredi specijalista obiteljske medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi specijalista obiteljske medicine</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedGeneralPractitioner}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.generalPractitioners
                    .map(generalPractitioner => {
                      const fullName = generalPractitioner.firstName + " " + generalPractitioner.lastName + " - " + generalPractitioner.mail;
                      return (
                        <option key={generalPractitioner.id} value={generalPractitioner.id}>
                          {fullName}
                        </option>)
                    })
                }
              </FormControl>
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <Choose>
                <When
                  condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}
                >
                  <Row>
                    <Col md={6}>
                      <FormGroup
                        controlId="formBasicText"
                        validationState={this.state.firstNameValidation}
                      >
                        <ControlLabel>Ime</ControlLabel>
                        <FormControl
                          type="text"
                          placeholder="Unesite ime"
                          onChange={this.handleChangeFirstName}
                          value={this.state.selectedGeneralPractitioner.firstName}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.lastName}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.mail}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.phoneNumber}
                        />
                        <Row>
                          <Col md={12}>
                            <section className={styles.sectionInvalid}>
                              <Collapse in={this.state.phoneNumberValidation === 'error'}>
                                <p className={styles.pInvalid}>Morate unijeti broj mobitela.</p>
                              </Collapse>
                            </section>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup
                        validationState={this.state.cityValidation}>
                        <ControlLabel>Grad</ControlLabel>
                        <FormControl
                          type="text"
                          placeholder="Unesite grad"
                          onChange={this.handleChangeCity}
                          value={this.state.selectedGeneralPractitioner.city}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.postalCode}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.street}
                        />
                        <Row>
                          <Col md={12}>
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
                          value={this.state.selectedGeneralPractitioner.streetNumber}
                        />
                        <Row>
                          <Col md={12}>
                            <section className={styles.sectionInvalid}>
                              <Collapse in={this.state.streetNumberValidation === 'error'}>
                                <p className={styles.pInvalid}>Morate unijeti kućni broj.</p>
                              </Collapse>
                            </section>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Col>
                  </Row>
                </When>
              </Choose>
            </FormGroup>
          </Modal.Body>
          <Choose>
            <When
              condition={this.state.dropdownValue !== null && this.state.dropdownValue !== 'select' && this.state.dropdownValue !== 'Odaberi'}
            >
              <Modal.Footer>
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
                        this.props.setEditGeneralPractitionerClicked(false);
                        this.resetState();
                      }}
                    >
                      <span className='glyphicon glyphicon-share-alt'/> Odustani
                    </Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </When>
          </Choose>
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
    editGeneralPractitioner: generalPractitioner => dispatch(editGeneralPractitioner(generalPractitioner)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGeneralPractitioner);
