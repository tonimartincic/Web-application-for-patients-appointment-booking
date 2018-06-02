import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import * as styles from './addEditReferral.css';

class AddEditReferral extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addReferralClicked || this.props.editReferralClicked}
          onHide={() => {
            this.props.setAddReferralClicked(false);
            this.props.setEditReferralClicked(false);
            this.props.resetState();
          }
          }
        >
          <Choose>
            <When condition={this.props.addReferralClicked || this.props.referralSelected}>
              <Modal.Header closeButton>
                <Modal.Title>{this.props.addReferralClicked ? 'Dodaj uputnicu' : 'Uredi uputnicu'}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Row>
                  <Col md={12}>
                    <FormGroup
                      validationState={this.props.referralTypeValidation}
                    >
                      <ControlLabel>Odaberi vrstu uputnice</ControlLabel>
                      <FormControl
                        componentClass='select'
                        placeholder='Odaberi'
                        onChange={this.handleChangeReferralType}
                      >
                        <option value="select">Odaberi</option>
                        {
                          this.props.referralTypes
                            .map((referralType, index) =>
                              <option key={index} value={referralType}>
                                {referralType}
                              </option>
                            )
                        }
                      </FormControl>
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.referralTypeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati vrstu uputnice.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.departmentTypeValidation}
                    >
                      <ControlLabel>Odaberi odjel</ControlLabel>
                      <FormControl
                        componentClass='select'
                        placeholder='Odaberi'
                        onChange={this.handleChangeDepartmentType}
                      >
                        <option value="select">Odaberi</option>
                        {
                          this.props.departmentTypes
                            .map((departmentType, index) =>
                              <option key={index} value={departmentType}>
                                {departmentType}
                              </option>
                            )
                        }
                      </FormControl>
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.departmentTypeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati odjel.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.patientIdValidation}
                    >
                      <ControlLabel>Odaberi pacijenta</ControlLabel>
                      <FormControl
                        componentClass='select'
                        placeholder='Odaberi'
                        onChange={this.handleChangePatientId}
                      >
                        <option value="select">Odaberi</option>
                        {
                          this.props.patients
                            .map((patient, index) =>
                              <option key={index} value={patient.id}>
                                {patient.firstName} {patient.lastName} ({patient.oib})
                              </option>
                            )
                        }
                      </FormControl>
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.patientIdValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati pacijenta.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.state.diagnosisValidation}
                    >
                      <ControlLabel>Dijagnoza</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite dijagnozu"
                        onChange={this.handleChangeDiagnosis}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.state.diagnosisValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate unijeti dijagnozu.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Napomena</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite napomenu"
                        onChange={this.handleChangeRemark}
                      />
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
                      <span className='glyphicon glyphicon-plus'/> Spremi
                    </Button>
                  </Col>
                  <Col mdOffset={2} md={4}>
                    <Button
                      className={styles.button}
                      onClick={() => {
                        this.props.setAddReferralClicked(false);
                        this.resetState();
                      }}
                    >
                      <span className='glyphicon glyphicon-share-alt'/> Odustani
                    </Button>
                  </Col>
                </Row>
              </Modal.Footer>
            </When>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default AddEditReferral;
