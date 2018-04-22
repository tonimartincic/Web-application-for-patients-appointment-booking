import React from 'react';
import {connect} from 'react-redux';
import {editMedicalSpecialist} from '../../../../../actionCreators/medicalSpecialistsActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as constants from '../../../../../constants/values';
import * as styles from './editMedicalSpecialist.css'

class EditMedicalSpecialist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownValue: null,

      selectedMedicalSpecialist: {
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

    this.handleChangeSelectedMedicalSpecialist = this.handleChangeSelectedMedicalSpecialist.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }

  resetState = () => {
    this.setState({
      dropdownValue: null,

      selectedMedicalSpecialist: {
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

    if (this.state.selectedMedicalSpecialist.firstName === null || this.state.selectedMedicalSpecialist.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedMedicalSpecialist.lastName === null || this.state.selectedMedicalSpecialist.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedMedicalSpecialist.phoneNumber === null || this.state.selectedMedicalSpecialist.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const medicalSpecialist =
        {
          id: this.state.selectedMedicalSpecialist.id,
          firstName: this.state.selectedMedicalSpecialist.firstName,
          lastName: this.state.selectedMedicalSpecialist.lastName,
          mail: this.state.selectedMedicalSpecialist.mail,
          phoneNumber: this.state.selectedMedicalSpecialist.phoneNumber,
        };

      this.props.editMedicalSpecialist(medicalSpecialist);
      this.props.setEditMedicalSpecialistClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedMedicalSpecialist.mail === null || this.state.selectedMedicalSpecialist.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.MEDICAL_SPECIALIST &&
          allEntitiesWithMail[i].id === this.state.selectedMedicalSpecialist.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedMedicalSpecialist.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedMedicalSpecialist.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeSelectedMedicalSpecialist = (event) => {
    for (let i = 0; i < this.props.medicalSpecialists.length; ++i) {
      if (this.props.medicalSpecialists[i] !== null) {
        if (this.props.medicalSpecialists[i].id == event.target.value)
          this.setState({
            selectedMedicalSpecialist: {
              id: this.props.medicalSpecialists[i].id,
              firstName: this.props.medicalSpecialists[i].firstName,
              lastName: this.props.medicalSpecialists[i].lastName,
              mail: this.props.medicalSpecialists[i].mail,
              phoneNumber: this.props.medicalSpecialists[i].phoneNumber,
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
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
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
          show={this.props.editMedicalSpecialistClicked}
          onHide={() => {
            this.props.setEditMedicalSpecialistClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Uredi liječnika specijalista</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ControlLabel>Odaberi liječnika specijalista</ControlLabel>
            <FormGroup controlId="formControlsSelect">
              <FormControl
                componentClass='select'
                placeholder='Odaberi'
                onChange={this.handleChangeSelectedMedicalSpecialist}
              >
                <option value="select">Odaberi</option>
                {
                  this.props.medicalSpecialists
                    .map(medicalSpecialist => {
                      const fullName = medicalSpecialist.firstName + " " + medicalSpecialist.lastName + " - " + medicalSpecialist.mail;
                      return (
                        <option key={medicalSpecialist.id} value={medicalSpecialist.id}>
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
                        value={this.state.selectedMedicalSpecialist.firstName}
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
                        value={this.state.selectedMedicalSpecialist.lastName}
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
                        value={this.state.selectedMedicalSpecialist.mail}
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
                        value={this.state.selectedMedicalSpecialist.phoneNumber}
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
                          this.props.setEditMedicalSpecialistClicked(false);
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
    editMedicalSpecialist: medicalSpecialist => dispatch(editMedicalSpecialist(medicalSpecialist)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMedicalSpecialist);
