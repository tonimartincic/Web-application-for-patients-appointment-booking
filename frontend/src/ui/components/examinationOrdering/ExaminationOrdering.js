import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Button} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import {addExamination} from '../../../actionCreators/examinations/examinationsActionCreators';
import * as styles from './examinationOrdering.css'
import * as dateUtil from '../../../utils/DateUtil';

class ExaminationOrdering extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examination: {},
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
  }

  resetState = () =>
    this.setState({
      examination: {},
    });

  handleSubmit() {
    const examination =
      {
        id: this.state.examination.id,
        status: this.state.examination.status,
        patientId: this.state.examination.patient.id,
        medicalSpecialistId: this.state.examination.medicalSpecialist.id,
        hospitalId: this.state.examination.hospital.id,
        referralId: this.state.examination.referral.id,
        term: dateUtil.constructDateFromDatePickerForBackend(this.state.examination.term),
        remark: this.state.examination.remark,
      };

    this.props.editExamination(examination);
    this.resetState();
  }

  handleChangeStatus = event =>
    this.setState({
      examination: {
        ...this.state.examination,
        status: event.target.value,
      },
    });

  handleChangeTerm = value =>
    this.setState({
      examination: {
        ...this.state.examination,
        term: value,
      },
    });

  handleChangeRemark = event =>
    this.setState({
      examination: {
        ...this.state.examination,
        remark: event.target.value,
      },
    });

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
        </Grid>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    examinations: state.examinations,
    examinationStatuses: state.examinationStatuses,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editExamination: examination => dispatch(editExamination(examination)),
    deleteExamination: id => dispatch(deleteExamination(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ExaminationOrdering);
