import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Button, ControlLabel, FormControl, FormGroup, Collapse, Alert} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import {addExamination} from '../../../actionCreators/examinations/examinationsActionCreators';
import * as styles from './examinationOrdering.css'

class ExaminationOrdering extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examination: {},

      hospitalValidation: null,
      referralValidation: null,

      success: false,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeHospital = this.handleChangeHospital.bind(this);
    this.handleChangeReferral = this.handleChangeReferral.bind(this);
  }

  resetState = () =>
    this.setState({
      examination: {},

      hospitalValidation: null,
      referralValidation: null,

      success: false,
    });

  handleSubmit() {
    let errorExists = false;

    if (this.state.examination.hospitalId == null || this.state.examination.hospitalId === '' ||
      this.state.examination.hospitalId === 'select' || this.state.examination.hospitalId === 'Odaberi') {
      this.setState({
        hospitalValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.examination.referralId == null || this.state.examination.referralId === '' ||
      this.state.examination.referralId === 'select' || this.state.examination.referralId === 'Odaberi') {
      this.setState({
        referralValidation: 'error',
      });

      errorExists = true;
    }

    if (!errorExists) {
      const examination =
        {
          patientId: this.props.userData.id,
          hospitalId: this.state.examination.hospitalId,
          referralId: this.state.examination.referralId,
        };

      this.props.addExamination(examination);
      this.resetState();

      this.setState({
        success: true,
      });
    }
  }

  handleChangeHospital = event =>
    this.setState({
      examination: {
        ...this.state.examination,
        hospitalId: event.target.value,
      },

      hospitalValidation: null,
    });

  handleChangeReferral = event =>
    this.setState({
      examination: {
        ...this.state.examination,
        referralId: event.target.value,
      },

      referralValidation: null,
    });

  handleAlertDismiss() {
    this.setState({ success: false });
  }

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Naručivanje</h2>
            </Col>
          </Row>
          <Row>
            <Col md={6} mdOffset={3}>
              <FormGroup
                validationState={this.state.hospitalValidation}
              >
                <ControlLabel>Bolnica</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  onChange={this.handleChangeHospital}
                  value={this.state.examination.hospitalId}
                >
                  <option value="select">Odaberi</option>
                  {
                    this.props.hospitals
                      .map((hospital, index) =>
                        <option key={index} value={hospital.id}>
                          {hospital.name}
                        </option>
                      )
                  }
                </FormControl>
                <Row>
                  <Col>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.hospitalValidation === 'error'}>
                        <p className={styles.pInvalid}>Morate odabrati bolnicu.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
              <FormGroup
                validationState={this.state.referralValidation}
              >
                <ControlLabel>Uputnica</ControlLabel>
                <FormControl
                  componentClass="select"
                  placeholder="select"
                  onChange={this.handleChangeReferral}
                  value={this.state.examination.referralId}
                >
                  <option value="select">Odaberi</option>
                  {
                    this.props.referrals
                      .map((referral, index) => {
                        const record =
                          referral.referralGroup + " / " + referral.referralName + " / "
                          + referral.departmentType + " / " + referral.createdOn

                        return (
                          <option key={index} value={referral.id}>
                            {record}
                          </option>)
                      })
                  }
                </FormControl>
                <Row>
                  <Col>
                    <section className={styles.sectionInvalid}>
                      <Collapse in={this.state.referralValidation === 'error'}>
                        <p className={styles.pInvalid}>Morate odabrati uputnicu.</p>
                      </Collapse>
                    </section>
                  </Col>
                </Row>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <section className={styles.sectionButton}>
                <Button
                  className={styles.button}
                  onClick={() => this.handleSubmit()}
                >
                  <span className='	glyphicon glyphicon-send'/> Naruči se
                </Button>
              </section>
            </Col>
          </Row>
          <Choose>
            <When condition={this.state.success}>
              <Row>
                <Col md={6} mdOffset={3}>
                  <section className={styles.sectionSuccess}>
                    <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
                      <p className={styles.pSuccess}>Naručivanje izvršeno uspješno.</p>
                    </Alert>
                  </section>
                </Col>
              </Row>
            </When>
          </Choose>
        </Grid>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData,
    hospitals: state.hospitals,
    referrals: state.referrals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExamination: examination => dispatch(addExamination(examination)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationOrdering);
