import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './addEditGeneralPractitioner.css'

class AddEditGeneralPractitioner extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addGeneralPractitionerClicked || this.props.editGeneralPractitionerClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.addGeneralPractitionerClicked || this.props.generalPractitionerSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  {this.props.addGeneralPractitionerClicked ? 'Dodaj specijalista obiteljske medicine' : 'Uredi specijalista obiteljske medicine'}
                </Modal.Title>
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
                        value={this.props.generalPractitioner.firstName}
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
                        value={this.props.generalPractitioner.lastName}
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
                      validationState={this.props.mailValidationAlreadyExists || this.props.mailValidationNotCorrectFormat || this.props.mailValidationEmptyString}>
                      <ControlLabel>Mail</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite mail"
                        onChange={this.props.handleChangeMail}
                        value={this.props.generalPractitioner.mail}
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
                    <FormGroup
                      validationState={this.props.phoneNumberValidation}>
                      <ControlLabel>Broj mobitela</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite broj mobitela"
                        onChange={this.props.handleChangePhoneNumber}
                        value={this.props.generalPractitioner.phoneNumber}
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
                  </Col>
                  <Col md={6}>
                    <FormGroup
                      validationState={this.props.cityValidation}>
                      <ControlLabel>Grad</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite grad"
                        onChange={this.props.handleChangeCity}
                        value={this.props.generalPractitioner.city}
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
                        value={this.props.generalPractitioner.postalCode}
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
                        value={this.props.generalPractitioner.street}
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
                        value={this.props.generalPractitioner.streetNumber}
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
                <p>Morate odabrati specijalista obiteljske medicine.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default AddEditGeneralPractitioner;
