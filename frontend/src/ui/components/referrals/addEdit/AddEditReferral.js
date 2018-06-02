import React from 'react';
import {Button, Col, Collapse, ControlLabel, FormControl, FormGroup, Modal, Row} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addReferral} from "../../../../actionCreators/referrals/referralsActionCreators";
import * as styles from './addEditReferral.css';

class EditReferral extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referralType: null,
      departmentType: null,
      patientId: null,
      diagnosis: null,
      remark: null,

      referralTypeValidation: null,
      departmentTypeValidation: null,
      patientIdValidation: null,
      diagnosisValidation: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeReferralType = this.handleChangeReferralType.bind(this);
    this.handleChangeDepartmentType = this.handleChangeDepartmentType.bind(this);
    this.handleChangePatientId = this.handleChangePatientId.bind(this);
    this.handleChangeDiagnosis = this.handleChangeDiagnosis.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
  }

  handleSubmit() {
    let errorExists = false;

    if (this.state.referralType === null || this.state.referralType === '' ||
      this.state.referralType === 'select' || this.state.referralType === 'Odaberi') {
      this.setState({
        referralTypeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.departmentType === null || this.state.departmentType === '' ||
      this.state.departmentType === 'select' || this.state.departmentType === 'Odaberi') {
      this.setState({
        departmentTypeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patientId === null || this.state.patientId === '' ||
      this.state.patientId === 'select' || this.state.patientId === 'Odaberi') {
      this.setState({
        patientIdValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.diagnosis === null || this.state.diagnosis.trim() === '') {
      this.setState({
        diagnosisValidation: 'error',
      });

      errorExists = true;
    }

    if (!errorExists) {
      const referral =
        {
          referralType: this.state.referralType,
          departmentType: this.state.departmentType,
          patientId: this.state.patientId,
          generalPractitionerId: this.props.userData.id,
          diagnosis: this.state.diagnosis,
          remark: this.state.remark,
        };

      this.props.addReferral(referral);
      this.props.setAddReferralClicked(false);

      this.resetState();
    }
  }

  resetState = () => {
    this.setState({
      referralType: null,
      departmentType: null,
      patientId: null,
      generalPractitionerId: null,
      diagnosis: null,
      remark: null,

      referralTypeValidation: null,
      departmentTypeValidation: null,
      patientIdValidation: null,
      generalPractitionerIdValidation: null,
      diagnosisValidation: null,
    });
  };

  handleChangeReferralType(e) {
    this.setState({
      referralType: e.target.value,
      referralTypeValidation: null,
    });
  }

  handleChangeDepartmentType(e) {
    this.setState({
      departmentType: e.target.value,
      departmentTypeValidation: null,
    });
  }

  handleChangePatientId(e) {
    this.setState({
      patientId: e.target.value,
      patientIdValidation: null,
    });
  }

  handleChangeDiagnosis(e) {
    this.setState({
      diagnosis: e.target.value,
      diagnosisValidation: null,
    });
  }

  handleChangeRemark(e) {
    this.setState({
      remark: e.target.value,
    });
  }

  render() {
    return (
      <section>
        <Modal
          show={this.props.addReferralClicked}
          onHide={() => {
            this.props.setAddReferralClicked(false);
            this.resetState();
          }
          }
        >
          <Modal.Header closeButton>
            <Modal.Title>Dodaj novu uputnicu</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col md={12}>
                <FormGroup
                  validationState={this.state.referralTypeValidation}
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
                  <span className='glyphicon glyphicon-plus'/> Dodaj
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
        </Modal>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    patients: state.patients,
    departmentTypes: state.departmentTypes,
    referralTypes: state.referralTypes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addReferral: referral => dispatch(addReferral(referral)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditReferral);
