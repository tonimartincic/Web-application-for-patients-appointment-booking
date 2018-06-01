import React from 'react';
import {connect} from 'react-redux';
import {editHospital} from '../../../../actionCreators/hospitals/hospitalsActionCreators';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './editHospital.css'

class EditHospital extends React.Component {
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
          <Choose>
            <When condition={this.props.hospital !== null}>
              <Modal.Header closeButton>
                <Modal.Title>Uredi bolnicu</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup controlId="formControlsSelect">
                  <FormGroup
                    controlId="formBasicText"
                    validationState={this.props.nameValidation}
                  >
                    <ControlLabel>Naziv</ControlLabel>
                    <FormControl
                      type="text"
                      placeholder="Unesite naziv"
                      onChange={this.handleChangeName}
                      value={this.props.hospital.name}
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
                          <Collapse in={this.props.streetNumberValidation === 'error'}>
                            <p className={styles.pInvalid}>Morate unijeti kućni broj.</p>
                          </Collapse>
                        </section>
                      </Col>
                    </Row>
                  </FormGroup>
                </FormGroup>
              </Modal.Body>
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
            <Otherwise>
              <Alert className={styles.alert} bsStyle="danger">
                <p>Morate odabrati bolnicu.</p>
              </Alert>
            </Otherwise>
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
