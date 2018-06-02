import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './addEditAdministrator.css'

class AddEditAdministrator extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addAdministratorClicked || this.props.editAdministratorClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.addAdministratorClicked || this.props.administratorSelected}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  {this.props.addAdministratorClicked ? 'Dodaj administratora' : 'Uredi administratora'}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <FormGroup
                  controlId="formBasicText"
                  validationState={this.props.firstNameValidation}
                >
                  <ControlLabel>Ime</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Unesite ime"
                    onChange={this.props.handleChangeFirstName}
                    value={this.props.administrator.firstName}
                  />
                  <Row>
                    <Col md={4}>
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
                    value={this.props.administrator.lastName}
                  />
                  <Row>
                    <Col md={4}>
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
                    value={this.props.administrator.mail}
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
                  <ControlLabel>Broj mobitela</ControlLabel>
                  <FormControl
                    type="text"
                    placeholder="Unesite broj mobitela"
                    onChange={this.props.handleChangePhoneNumber}
                    value={this.props.administrator.phoneNumber}
                  />
                  <Row>
                    <Col md={6}>
                      <section className={styles.sectionInvalid}>
                        <Collapse in={this.props.phoneNumberValidation === 'error'}>
                          <p className={styles.pInvalid}>Morate unijeti broj mobitela.</p>
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
                <p>Morate odabrati Administratora.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default AddEditAdministrator;
