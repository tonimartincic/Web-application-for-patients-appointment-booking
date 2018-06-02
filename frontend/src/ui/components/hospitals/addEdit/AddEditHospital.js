import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './addEditHospital.css'

class AddEditHospital extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addHospitalClicked || this.props.editHospitalClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.addHospitalClicked || this.props.hospitalSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  {this.props.addHospitalClicked ? 'Dodaj bolnicu' : 'Uredi bolnicu'}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.props.nameValidation}
                >
                  <ControlLabel>Naziv</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Unesite naziv"
                    onChange={this.props.handleChangeName}
                    value={this.props.hospital.name}
                  />
                  <Row>
                    <Col md={4}>
                      <section className={styles.sectionInvalid}>
                        <Collapse in={this.props.nameValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate unijeti naziv.</p>
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
                    value={this.props.hospital.mail}
                  />
                  <Row>
                    <Col md={7}>
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
                  <ControlLabel>Telefonski broj</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Unesite telefonski broj"
                    onChange={this.props.handleChangePhoneNumber}
                    value={this.props.hospital.phoneNumber}
                  />
                  <Row>
                    <Col md={6}>
                      <section className={styles.sectionInvalid}>
                        <Collapse in={this.props.phoneNumberValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate unijeti telefonski broj.</p>
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
                    value={this.props.hospital.city}
                  />
                  <Row>
                    <Col md={6}>
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
                    value={this.props.hospital.postalCode}
                  />
                  <Row>
                    <Col md={6}>
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
                    value={this.props.hospital.street}
                  />
                  <Row>
                    <Col md={6}>
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
                    value={this.props.hospital.streetNumber}
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
                      onClick={() => {
                        this.props.resetState();
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

export default AddEditHospital;
