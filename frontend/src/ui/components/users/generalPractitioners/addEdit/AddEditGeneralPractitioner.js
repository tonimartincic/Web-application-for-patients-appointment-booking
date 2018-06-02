import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as styles from './addEditGeneralPractitioner.css'

class AddEditGeneralPractitioner extends React.Component {
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
            <Modal.Title>{this.props.addGeneralPractitionerClicked ? 'Dodaj specijalista obiteljske medicine' : 'Uredi specijalista obiteljske medicine'}</Modal.Title>
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
                    this.props.setEditGeneralPractitionerClicked(false);
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

export default AddEditGeneralPractitioner;
