import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as styles from './addGeneralPractitioner.css';
import {addGeneralPractitioner} from "../../../../../actionCreators/users/generalPractitionersActionCreators";

class AddGeneralPractitioner extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      mail: null,
      phoneNumber: null,
      city: null,
      postalCode: null,
      street: null,
      streetNumber: null,

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

  handleSubmit() {
    let errorExists = false;
    if (this.state.firstName === null || this.state.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.lastName === null || this.state.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.phoneNumber === null || this.state.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.city === null || this.state.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.postalCode === null || this.state.postalCode.trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.street === null || this.state.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.streetNumber === null || this.state.streetNumber.trim() === '') {
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
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          mail: this.state.mail,
          phoneNumber: this.state.phoneNumber,
          city: this.state.city,
          postalCode: this.state.postalCode,
          street: this.state.street,
          streetNumber: this.state.streetNumber,
        };

      this.props.addGeneralPractitioner(generalPractitioner);
      this.props.setAddGeneralPractitionerClicked(false);

      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      firstName: null,
      lastName: null,
      mail: null,
      phoneNumber: null,
      city: null,
      postalCode: null,
      street: null,
      streetNumber: null,

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

  checkEmail() {
    if (this.state.mail === null || this.state.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].mail === this.state.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      phoneNumber: e.target.value,
      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      mail: e.target.value,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      city: e.target.value,
      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      postalCode: e.target.value,
      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      street: e.target.value,
      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      streetNumber: e.target.value,
      streetNumberValidation: null,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.addGeneralPractitionerClicked}
          onHide={() => {
            this.props.setAddGeneralPractitionerClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novog specijalista obiteljske medicine</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
          </Modal.Body>
          <Modal.Footer>
            <Row>
              <Col mdOffset={1} md={4}>
                <Button
                  className={styles.button}
                  onClick={() => this.handleSubmit()}
                >
                  <span className='glyphicon glyphicon-plus'/> Dodaj
                </Button>
              </Col>
              <Col mdOffset={2} md={4}>
                <Button
                  className={styles.button}
                  onClick={() => {
                    this.props.setAddGeneralPractitionerClicked(false);
                    this.resetState();
                  }}
                >
                  <span className='glyphicon glyphicon-share-alt'/> Odustani
                </Button>
              </Col>
            </Row>
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    administrators: state.administrators,
    generalPractitioners: state.generalPractitioners,
    medicalSpecialists: state.medicalSpecialists,
    patients: state.patients,
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGeneralPractitioner: generalPractitioner => dispatch(addGeneralPractitioner(generalPractitioner)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddGeneralPractitioner);
