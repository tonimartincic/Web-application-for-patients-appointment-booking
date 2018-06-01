import React from 'react';
import {connect} from 'react-redux';
import {editHospital} from '../../../../actionCreators/hospitals/hospitalsActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as styles from './editHospital.css'

class EditHospital extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,

      selectedHospital: {
        id: null,
        name: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },

      nameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    };

    this.handleChangeSelectedHospital = this.handleChangeSelectedHospital.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
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

      selectedHospital: {
        id: null,
        name: null,
        mail: null,
        city: null,
        postalCode: null,
        street: null,
        streetNumber: null,
        phoneNumber: null,
      },

      nameValidation: null,
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

    if (this.state.selectedHospital.name === null || this.state.selectedHospital.name.trim() === '') {
      this.setState({
        nameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedHospital.phoneNumber === null || this.state.selectedHospital.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedHospital.city === null || this.state.selectedHospital.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedHospital.postalCode === null || this.state.selectedHospital.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedHospital.street === null || this.state.selectedHospital.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedHospital.streetNumber === null || this.state.selectedHospital.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const hospital =
        {
          id: this.state.selectedHospital.id,
          name: this.state.selectedHospital.name,
          mail: this.state.selectedHospital.mail,
          phoneNumber: this.state.selectedHospital.phoneNumber,
          city: this.state.selectedHospital.city,
          postalCode: this.state.selectedHospital.postalCode,
          street: this.state.selectedHospital.street,
          streetNumber: this.state.selectedHospital.streetNumber,
        };

      this.props.editHospital(hospital);
      this.props.setEditHospitalClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedHospital.mail === null || this.state.selectedHospital.mail.trim() === '') {
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
        if ((allEntitiesWithMail[i].type === null || allEntitiesWithMail[i].type === undefined) &&
          allEntitiesWithMail[i].id === this.state.selectedHospital.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedHospital.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedHospital.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeSelectedHospital = (event) => {
    for (let i = 0; i < this.props.hospitals.length; ++i) {
      if (this.props.hospitals[i] !== null) {
        if (this.props.hospitals[i].id == event.target.value)
          this.setState({
            selectedHospital: {
              id: this.props.hospitals[i].id,
              name: this.props.hospitals[i].name,
              mail: this.props.hospitals[i].mail,
              phoneNumber: this.props.hospitals[i].phoneNumber,
              city: this.props.hospitals[i].city,
              postalCode: this.props.hospitals[i].postalCode,
              street: this.props.hospitals[i].street,
              streetNumber: this.props.hospitals[i].streetNumber,
            }
          });
      }
    }

    this.setState({
      dropdownValue: event.target.value,
    });
  };

  handleChangeName(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        name: e.target.value,
      },

      nameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        city: e.target.value,
      },

      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        street: e.target.value,
      },

      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      selectedHospital: {
        ...this.state.selectedHospital,
        streetNumber: e.target.value,
      },

      streetNumberValidation: null,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.editHospitalClicked}
          onHide={() => {
            this.props.setEditHospitalClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Uredi bolnicu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi bolnicu</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedHospital}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.hospitals
                    .map(hospital => {
                      return (
                        <option key={hospital.id} value={hospital.id}>
                          {hospital.name}
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
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.state.nameValidation}
                  >
                    <ControlLabel>Naziv</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Unesite naziv"
                      onChange={this.handleChangeName}
                      value={this.state.selectedHospital.name}
                    />
                    <Row>
                      <Col md={4}>
                        <section className={styles.sectionInvalid}>
                          <Collapse in={this.state.nameValidation === 'error'}>
                            <p className={styles.pInvalid}>Morate unijeti naziv.</p>
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
                      value={this.state.selectedHospital.mail}
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
                    <ControlLabel>Telefonski broj</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Unesite telefonski broj"
                      onChange={this.handleChangePhoneNumber}
                      value={this.state.selectedHospital.phoneNumber}
                    />
                    <Row>
                      <Col md={6}>
                        <section className={styles.sectionInvalid}>
                          <Collapse in={this.state.phoneNumberValidation === 'error'}>
                            <p className={styles.pInvalid}>Morate unijeti telefonski broj.</p>
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
                      value={this.state.selectedHospital.city}
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
                      value={this.state.selectedHospital.postalCode}
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
                      value={this.state.selectedHospital.street}
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
                      value={this.state.selectedHospital.streetNumber}
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
                        this.props.setEditHospitalClicked(false);
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
    editHospital: hospital => dispatch(editHospital(hospital)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHospital);
