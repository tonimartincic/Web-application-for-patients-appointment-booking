import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as constants from '../../../../../constants/values';
import * as styles from './addEditPatient.css'

class AddEditPatient extends React.Component {
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
            <Modal.Title>{this.props.addPatientClicked ? 'Dodaj pacijenta' : 'Uredi pacijenta'}</Modal.Title>
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
                    value={this.state.selectedPatient.firstName}
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
                    value={this.state.selectedPatient.lastName}
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
                  validationState={this.state.sexValidation}
                >
                  <ControlLabel>Spol</ControlLabel>
                  <FormControl
                    componentClass="select"
                    placeholder="select"
                    onChange={this.handleChangeSex}
                    value={this.state.selectedPatient.sex}
                  >
                    <option value="select">Odaberi</option>
                    <option value="M">M</option>
                    <option value="Ž">Ž</option>
                  </FormControl>
                  <Row>
                    <Col md={12}>
                      <section>
                        <Collapse in={this.state.sexValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate odabrati spol.</p>
                        </Collapse>
                      </section>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup
                  validationState={this.state.oibValidation}>
                  <ControlLabel>OIB</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Unesite oib"
                    onChange={this.handleChangeOIB}
                    value={this.state.selectedPatient.oib}
                  />
                  <Row>
                    <Col md={12}>
                      <section className={styles.sectionInvalid}>
                        <Collapse in={this.state.oibValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate unijeti OIB.</p>
                        </Collapse>
                      </section>
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup
                  validationState={this.state.dateOfBirthValidation}>
                  <ControlLabel>Datum rođenja</ControlLabel>
                  <DatePicker
                    value={this.state.selectedPatient.dateOfBirth}
                    dateFormat='DD-MM-YYYY'
                    weekStartsOn={1}
                    dayLabels={constants.datePickerDayNames}
                    monthLabels={constants.monthNames}
                    onChange={this.handleChangeDateOfBirth}
                  />
                  <Row>
                    <Col md={12}>
                      <section className={styles.sectionInvalid}>
                        <Collapse in={this.state.dateOfBirthValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate unijeti datum rođenja.</p>
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
              </Col>
              <Col md={6}>
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
                    <Col md={12}>
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
                    value={this.state.selectedPatient.postalCode}
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
                    value={this.state.selectedPatient.street}
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
                    value={this.state.selectedPatient.streetNumber}
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
                  <span className='glyphicon glyphicon-floppy-save'/> Spremi
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
          </Modal.Footer>
        </Modal>
      </section>
    );
  }
}

export default AddEditPatient;
