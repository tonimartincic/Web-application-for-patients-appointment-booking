import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import AddEditExamination from './addEdit/AddEditExamination';
import DeleteExamination from './delete/DeleteExamination';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addExamination, editExamination, deleteExamination} from '../../../actionCreators/examinations/examinationsActionCreators';
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

      addExaminationClicked: false,
      editExaminationClicked: false,
      deleteExaminationClicked: false,

      termValidation: null,
      remarkValidation: null,
    };

    this.setExamination = this.setExamination.bind(this);

    this.setAddExaminationClicked = this.setAddExaminationClicked.bind(this);
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

      addExaminationClicked: false,
      editExaminationClicked: false,
      deleteExaminationClicked: false,

      termValidation: null,
      remarkValidation: null,
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

  setAddExaminationClicked = value =>
    this.setState({
      addExaminationClicked: value,
      examination: {},
      examinationSelected: false,
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
    let errorExists = false;

    if (this.state.examination.term == null || this.state.examination.term.trim() === '') {
      this.setState({
        termValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.examination.remark == null || this.state.examination.remark.trim() === '') {
      this.setState({
        remarkValidation: 'error',
      });

      errorExists = true;
    }

    if (!errorExists) {
      const examination =
        {
          id: this.state.examination.id,
          status: this.state.examination.status,
          patient: this.state.examination.patient,
          medicalSpecialist: this.state.examination.medicalSpecialist,
          hospital: this.state.examination.hospital,
          referral: this.state.examination.referral,
          term: dateUtil.constructDateFromDatePickerForBackend(this.state.examination.term),
          remark: this.state.examination.remark,
        };

      if(this.state.addExaminationClicked) {
        this.props.addExamination(examination);
      } else {
        this.props.editExamination(examination);
      }

      this.resetState();
    }
  }

  handleDelete = () => {
    this.props.deleteExamination(this.state.hospital.id);
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

      termValidation: null,
    });

  handleChangeRemark = event =>
    this.setState({
      examination: {
        ...this.state.examination,
        remark: event.target.value,
      },

      remarkValidation: null,
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
          <AddEditExamination
            examination={this.state.examination}
            hospitalSelected={this.state.hospitalSelected}

            addExaminationClicked={this.state.addExaminationClicked}
            editExaminationClicked={this.state.editExaminationClicked}

            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeName={event => this.handleChangeStatus(event)}
            handleChangePhoneNumber={value => this.handleChangeTerm(value)}
            handleChangeMail={event => this.handleChangeRemark(event)}

            termValidation={this.state.termValidation}
            remarkValidation={this.state.remarkValidation}
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
              <AddEditDeleteButtons
                setAddClicked={value => this.setAddExaminationClicked(value)}
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
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addExamination: examination => dispatch(addExamination(examination)),
    editExamination: examination => dispatch(editExamination(examination)),
    deleteExamination: id => dispatch(deleteExamination(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Examinations);
