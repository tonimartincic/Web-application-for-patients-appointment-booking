import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as styles from './addEditAdministrator.css'

class AddEditAdministrator extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.editAdministratorClicked}
          onHide={() => {
            this.props.setEditAdministratorClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.addAdministratorClicked ? 'Dodaj administratora' : 'Uredi administratora'}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormGroup
              controlId="formBasicText"
              validationState={this.state.firstNameValidation}
            >
              <ControlLabel>Ime</ControlLabel>
              <FormControl
                type="text"
                placeholder="Unesite ime"
                onChange={this.handleChangeFirstName}
                value={this.state.selectedAdministrator.firstName}
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
                value={this.state.selectedAdministrator.lastName}
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
                value={this.state.selectedAdministrator.mail}
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
                value={this.state.selectedAdministrator.phoneNumber}
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
                    this.props.setEditAdministratorClicked(false);
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

export default AddEditAdministrator;
