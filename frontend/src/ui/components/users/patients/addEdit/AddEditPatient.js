import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as constants from '../../../../../constants/values';
import * as styles from './addEditPatient.css'

class AddEditPatient extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addPatientClicked || this.props.editPatientClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.addPatientClicked || this.props.patientSelected}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.addPatientClicked ? 'Dodaj pacijenta' : 'Uredi pacijenta'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={6}>
                    <FormGroup
                      controlId="formBasicText"
                      validationState={this.props.firstNameValidation}
                    >
                      <ControlLabel>Ime</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite ime"
                        onChange={this.props.handleChangeFirstName}
                        value={this.props.patient.firstName}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.firstNameValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti ime.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.lastNameValidation}>
                      <ControlLabel>Prezime</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite prezime"
                        onChange={this.props.handleChangeLastName}
                        value={this.props.patient.lastName}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.lastNameValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti prezime.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.sexValidation}
                    >
                      <ControlLabel>Spol</ControlLabel>
                      <FormControl
                        componentClass="select"
                        placeholder="select"
                        onChange={this.props.handleChangeSex}
                        value={this.props.patient.sex}
                      >
                        <option value="select">Odaberi</option>
                        <option value="M">M</option>
                        <option value="Ž">Ž</option>
                      </FormControl>
                      <Row>
                        <Col md={12}>
                          <section>
                            <Collapse in={this.props.sexValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati spol.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.oibValidation}>
                      <ControlLabel>OIB</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite oib"
                        onChange={this.props.handleChangeOIB}
                        value={this.props.patient.oib}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.oibValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti OIB.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.dateOfBirthValidation}>
                      <ControlLabel>Datum rođenja</ControlLabel>
                      <DatePicker
                        value={this.props.patient.dateOfBirth}
                        dateFormat='DD-MM-YYYY'
                        weekStartsOn={1}
                        dayLabels={constants.datePickerDayNames}
                        monthLabels={constants.monthNames}
                        onChange={this.props.handleChangeDateOfBirth}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.dateOfBirthValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti datum rođenja.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.mailValidationAlreadyExists || this.props.mailValidationNotCorrectFormat || this.props.mailValidationEmptyString}>
                      <ControlLabel>Mail</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite mail"
                        onChange={this.props.handleChangeMail}
                        value={this.props.patient.mail}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.mailValidationEmptyString === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti mail adresu.</p>
                            </Collapse>
                            <Collapse in={this.props.mailValidationNotCorrectFormat === 'error'}>
                              <p className={styles.pInvalid}>Format unesene mail adrese nije ispravan.</p>
                            </Collapse>
                            <Collapse in={this.props.mailValidationAlreadyExists === 'error'}>
                              <p className={styles.pInvalid}>Unesena mail adresa već postoji.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                  <Col md={6}>
                    <FormGroup
                      validationState={this.props.phoneNumberValidation}>
                      <ControlLabel>Broj mobitela</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite broj mobitela"
                        onChange={this.props.handleChangePhoneNumber}
                        value={this.props.patient.phoneNumber}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.phoneNumberValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti broj mobitela.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.cityValidation}>
                      <ControlLabel>Grad</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite grad"
                        onChange={this.props.handleChangeCity}
                        value={this.props.patient.city}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.cityValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti grad.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.postalCodeValidation}>
                      <ControlLabel>Poštanski broj</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite poštanski broj"
                        onChange={this.props.handleChangePostalCode}
                        value={this.props.patient.postalCode}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.postalCodeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti poštanski broj.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.streetValidation}>
                      <ControlLabel>Ulica</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite ulicu"
                        onChange={this.props.handleChangeStreet}
                        value={this.props.patient.street}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.streetValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti ulicu.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.streetNumberValidation}>
                      <ControlLabel>Kućni broj</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite kućni broj"
                        onChange={this.props.handleChangeStreetNumber}
                        value={this.props.patient.streetNumber}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.streetNumberValidation === 'error'}>
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
                      onClick={() => this.props.handleSubmit()}
                    >
                      <span className='glyphicon glyphicon-floppy-save'/> Spremi
                    </Button>
                  </Col>
                  <Col mdOffset={2} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => this.props.resetState()}
                    >
                      <span className='glyphicon glyphicon-share-alt'/> Odustani
                    </Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </When>
            <Otherwise>
              <Alert className={styles.alert} bsStyle="danger">
                <p>Morate odabrati pacijenta.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default AddEditPatient;
