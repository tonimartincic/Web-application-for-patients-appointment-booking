import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import ViewExamination from './view/ViewExamination';
import ViewReferral from '../referrals/view/ViewReferral';
import EditExamination from './edit/EditExamination';
import DeleteExamination from './delete/DeleteExamination';
import Buttons from './buttons/Buttons';
import {editExamination, deleteExamination} from '../../../actionCreators/examinations/examinationsActionCreators';
import * as styles from './examinations.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';
import * as dateUtil from '../../../utils/DateUtil';

class Examinations extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      examination: {},
      examinationSelected: false,

      viewExaminationClicked: false,
      viewReferralClicked: false,
      editExaminationClicked: false,
      deleteExaminationClicked: false,
    };

    this.setExamination = this.setExamination.bind(this);

    this.setViewExaminationClicked = this.setViewExaminationClicked.bind(this);
    this.setViewReferralClicked = this.setViewReferralClicked.bind(this);
    this.setEditExaminationClicked = this.setEditExaminationClicked.bind(this);
    this.setDeleteExaminationClicked = this.setDeleteExaminationClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeStatus = this.handleChangeStatus.bind(this);
    this.handleChangeTerm = this.handleChangeTerm.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
  }

  resetState = () =>
    this.setState({
      examination: {},
      examinationSelected: false,

      viewExaminationClicked: false,
      viewReferralClicked: false,
      editExaminationClicked: false,
      deleteExaminationClicked: false,
    });

  setExamination = row => {
    const examination =
      {
        id: row.id,
        status: row.status,
        patient: row.patient,
        medicalSpecialist: row.medicalSpecialist,
        hospital: row.hospital,
        referral: row.referral,
        term: dateUtil.createDateForDatePickerFromDateFromBackend(row.term),
        remark: row.remark,
      };

    this.setState({
      examination,
      examinationSelected: true,
    });
  };

  setViewExaminationClicked = value =>
    this.setState({
      viewExaminationClicked: value,
    });

  setViewReferralClicked = value =>
    this.setState({
      viewReferralClicked: value,
    });

  setEditExaminationClicked = value =>
    this.setState({
      editExaminationClicked: value,
    });

  setDeleteExaminationClicked = value =>
    this.setState({
      deleteExaminationClicked: value,
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

  handleDelete = () => {
    this.props.deleteExamination(this.state.examination.id);
    this.setDeleteExaminationClicked(false);
    this.resetState();
  };

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
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'status',
      text: 'Status',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'patient.firstName',
      text: 'Ime pacijenta',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'patient.lastName',
      text: 'Prezime pacijenta',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'term',
      text: 'Termin',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: colors.SELECTED_ROW,

      onSelect: this.setExamination,
      selected: this.state.examination === null ? null : [this.state.examination.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <ViewExamination
            referral={this.state.examination}
            referralSelected={this.state.examinationSelected}

            viewReferralClicked={this.state.viewExaminationClicked}
            resetState={() => this.resetState()}
          />
          <ViewReferral
            referral={this.state.examination.referral}
            referralSelected={this.state.examinationSelected}

            viewReferralClicked={this.state.viewReferralClicked}
            resetState={() => this.resetState()}
          />
          <EditExamination
            examination={this.state.examination}
            examinationSelected={this.state.examinationSelected}

            editExaminationClicked={this.state.editExaminationClicked}

            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeStatus={event => this.handleChangeStatus(event)}
            handleChangeTerm={value => this.handleChangeTerm(value)}
            handleChangeRemark={event => this.handleChangeRemark(event)}

            examinationStatuses={this.props.examinationStatuses}
          />
          <DeleteExamination
            examination={this.state.examination}
            examinationSelected={this.state.examinationSelected}

            deleteExaminationClicked={this.state.deleteExaminationClicked}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Pregledi</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.examinations}
                columns={columns}
                striped hover condensed bordered
                pagination={paginationFactory(tables.PAGINATION_OPTIONS)}
                selectRow={selectRow}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Buttons
                setViewExaminationClicked={value => this.setViewExaminationClicked(value)}
                setViewReferralClicked={value => this.setViewReferralClicked(value)}
                setEditClicked={value => this.setEditExaminationClicked(value)}
                setDeleteClicked={value => this.setDeleteExaminationClicked(value)}
              />
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

export default connect(mapStateToProps, mapDispatchToProps)(Examinations);
