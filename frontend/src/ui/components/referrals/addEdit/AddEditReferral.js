import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row, Alert} from 'react-bootstrap';
import * as styles from './addEditReferral.css';

class AddEditReferral extends React.Component {
  render() {
    return (
      <section>
        <Modal
          show={this.props.addReferralClicked || this.props.editReferralClicked}
          onHide={() => this.props.resetState()}
        >
          <Choose>
            <When condition={this.props.addReferralClicked || (this.props.editReferralClicked && this.props.referralSelected)}>
              <Modal.Header closeButton>
                <Modal.Title className={styles.modalTitle}>
                  {this.props.addReferralClicked ? 'Dodaj uputnicu' : 'Uredi uputnicu'}
                  </Modal.Title>
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
                        onChange={this.props.handleChangeReferralType}
                        value={this.props.referral.referralType}
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
                            <Collapse in={this.props.referralTypeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati vrstu uputnice.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.departmentTypeValidation}
                    >
                      <ControlLabel>Odaberi odjel</ControlLabel>
                      <FormControl
                        componentClass='select'
                        placeholder='Odaberi'
                        onChange={this.props.handleChangeDepartmentType}
                        value={this.props.referral.departmentType}
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
                            <Collapse in={this.props.departmentTypeValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati odjel.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.patientIdValidation}
                    >
                      <ControlLabel>Odaberi pacijenta</ControlLabel>
                      <FormControl
                        componentClass='select'
                        placeholder='Odaberi'
                        onChange={this.props.handleChangePatientId}
                        value={this.props.referral.patientId}
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
                            <Collapse in={this.props.patientIdValidation === 'error'}>
                              <p className={styles.pInvalid}>Morate odabrati pacijenta.</p>
                            </Collapse>
                          </section>
                        </Col>
                      </Row>
                    </FormGroup>
                    <FormGroup
                      validationState={this.props.diagnosisValidation}
                    >
                      <ControlLabel>Dijagnoza</ControlLabel>
                      <FormControl
                        type="text"
                        placeholder="Unesite dijagnozu"
                        onChange={this.props.handleChangeDiagnosis}
                        value={this.props.referral.diagnosis}
                      />
                      <Row>
                        <Col md={12}>
                          <section className={styles.sectionInvalid}>
                            <Collapse in={this.props.diagnosisValidation === 'error'}>
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
                        onChange={this.props.handleChangeRemark}
                        value={this.props.referral.remark}
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
                      onClick={() => this.props.handleSubmit()}
                    >
                      <span className='glyphicon glyphicon-plus'/> Spremi
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
                <p>Morate odabrati uputnicu.</p>
              </Alert>
            </Otherwise>
          </Choose>
        </Modal>
      </section>
    );
  }
}

export default AddEditReferral;
