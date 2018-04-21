import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import * as styles from './addMedicalSpecialist.css';
import {addMedicalSpecialist} from "../../../../actionCreators/medicalSpecialistsActionCreators";

class AddMedicalSpecialist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: null,
      lastName: null,
      mail: null,
      phoneNumber: null,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
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

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const medicalSpecialist =
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          mail: this.state.mail,
          phoneNumber: this.state.phoneNumber,
        };

      this.props.addMedicalSpecialist(medicalSpecialist);
      this.props.setAddMedicalSpecialistClicked(false);

      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      firstName: null,
      lastName: null,
      mail: null,
      phoneNumber: null,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
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

  render() {
    return (
      <section>
        <Modal
          show={this.props.addMedicalSpecialistClicked}
          onHide={() => {
            this.props.setAddMedicalSpecialistClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novog liječnika specijalista</Modal.Title>
          </Modal.Header>
          <Modal.Body>
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
                    this.props.setAddMedicalSpecialistClicked(false);
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
    addMedicalSpecialist: medicalSpecialist => dispatch(addMedicalSpecialist(medicalSpecialist)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMedicalSpecialist);
