import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Button, Col, Grid, Row} from 'react-bootstrap';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import NavigationBar from '../navigationBar/NavigationBar';
import ViewReferral from './view/ViewReferral';
import AddEditReferral from './addEdit/AddEditReferral';
import DeleteReferral from './delete/DeleteReferral';
import {addReferral, editReferral, deleteReferral} from '../../../actionCreators/referrals/referralsActionCreators';
import * as styles from './referrals.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';

class Referrals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      referral: {},
      referralSelected: false,

      addReferralClicked: false,
      viewReferralClicked: false,
      editReferralClicked: false,
      deleteReferralClicked: false,

      referralTypeValidation: null,
      departmentTypeValidation: null,
      patientIdValidation: null,
      diagnosisValidation: null,
    };

    this.setReferral = this.setReferral.bind(this);

    this.setAddReferralClicked = this.setAddReferralClicked.bind(this);
    this.setViewReferralClicked = this.setViewReferralClicked.bind(this);
    this.setEditReferralClicked = this.setEditReferralClicked.bind(this);
    this.setDeleteReferralClicked = this.setDeleteReferralClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeReferralType = this.handleChangeReferralType.bind(this);
    this.handleChangeDepartmentType = this.handleChangeDepartmentType.bind(this);
    this.handleChangePatientId = this.handleChangePatientId.bind(this);
    this.handleChangeDiagnosis = this.handleChangeDiagnosis.bind(this);
    this.handleChangeRemark = this.handleChangeRemark.bind(this);
  }

  resetState = () =>
    this.setState({
      referral: {},
      referralSelected: false,

      addReferralClicked: false,
      viewReferralClicked: false,
      editReferralClicked: false,
      deleteReferralClicked: false,

      referralTypeValidation: null,
      departmentTypeValidation: null,
      patientIdValidation: null,
      diagnosisValidation: null,
    });

  setReferral = row =>
    this.setState({
      referral: row,
      referralSelected: true,
    });

  setAddReferralClicked = value =>
    this.setState({
      addReferralClicked: value,
      referral: {},
      referralSelected: false,
    });

  setViewReferralClicked = value =>
    this.setState({
      viewReferralClicked: value,
    });

  setEditReferralClicked = value =>
    this.setState({
      editReferralClicked: value,
    });

  setDeleteReferralClicked = value =>
    this.setState({
      deleteReferralClicked: value,
    });

  handleSubmit() {
    let errorExists = false;

    if (this.state.referral.referralType == null || this.state.referral.referralType === '' ||
      this.state.referral.referralType === 'select' || this.state.referral.referralType === 'Odaberi') {
      this.setState({
        referralTypeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.referral.departmentType == null || this.state.referral.departmentType === '' ||
      this.state.referral.departmentType === 'select' || this.state.referral.departmentType === 'Odaberi') {
      this.setState({
        departmentTypeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.referral.patientId == null || this.state.referral.patientId === '' ||
      this.state.referral.patientId === 'select' || this.state.referral.patientId === 'Odaberi') {
      this.setState({
        patientIdValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.referral.diagnosis == null || this.state.referral.diagnosis.trim() === '') {
      this.setState({
        diagnosisValidation: 'error',
      });

      errorExists = true;
    }

    if (!errorExists) {
      const referral =
        {
          referralType: this.state.referral.referralType,
          departmentType: this.state.referral.departmentType,
          patientId: this.state.referral.patientId,
          generalPractitionerId: this.props.userData.id,
          diagnosis: this.state.referral.diagnosis,
          remark: this.state.referral.remark,
        };

      if(this.state.addReferralClicked) {
        this.props.addReferral(referral);
      } else {
        this.props.editReferral(referral);
      }

      this.resetState();
    }
  }

  handleChangeReferralType = event =>
    this.setState({
      referral: {
        ...this.state.referral,
        referralType: event.target.value,
      },

      referralTypeValidation: null,
    });

  handleChangeDepartmentType = event =>
    this.setState({
      referral: {
        ...this.state.referral,
        departmentType: event.target.value,
      },

      departmentTypeValidation: null,
    });

  handleChangePatientId = event =>
    this.setState({
      referral: {
        ...this.state.referral,
        patientId: event.target.value,
      },

      patientIdValidation: null,
    });

  handleChangeDiagnosis = event =>
    this.setState({
      referral: {
        ...this.state.referral,
        diagnosis: event.target.value,
      },

      diagnosisValidation: null,
    });

  handleChangeRemark = event =>
    this.setState({
      referral: {
        ...this.state.referral,
        remark: event.target.value,
      },
    });

  handleDelete = () => {
    this.props.deleteReferral(this.state.referral.id);
    this.setDeleteReferralClicked(false);
    this.resetState();
  };

  render() {
    const columns = [{
      dataField: 'id',
      text: 'ID',
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
    }, {
      dataField: 'referralGroup',
      text: 'Vrsta uputnice',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'referralName',
      text: 'Podvrsta uputnice',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'createdOn',
      text: 'Datum kreiranja',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: colors.SELECTED_ROW,

      onSelect: this.setReferral,
      selected: this.state.referral === null ? null : [this.state.referral.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <ViewReferral
            referral={this.state.referral}
            referralSelected={this.state.referralSelected}

            viewReferralClicked={this.state.viewReferralClicked}
            resetState={() => this.resetState()}
          />
          <AddEditReferral
            referral={this.state.referral}
            referralSelected={this.state.referralSelected}

            addReferralClicked={this.state.addReferralClicked}
            editReferralClicked={this.state.editReferralClicked}

            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeReferralType={event => this.handleChangeReferralType(event)}
            handleChangeDepartmentType={event => this.handleChangeDepartmentType(event)}
            handleChangePatientId={event => this.handleChangePatientId(event)}
            handleChangeDiagnosis={event => this.handleChangeDiagnosis(event)}
            handleChangeRemark={event => this.handleChangeRemark(event)}

            referralTypeValidation={this.state.referralTypeValidation}
            departmentTypeValidation={this.state.departmentTypeValidation}
            patientIdValidation={this.state.patientIdValidation}
            diagnosisValidation={this.state.diagnosisValidation}

            patients={this.props.patients}
            departmentTypes={this.props.departmentTypes}
            referralTypes={this.props.referralTypes}
          />
          <DeleteReferral
            referral={this.state.referral}
            referralSelected={this.state.referralSelected}

            deleteReferralClicked={this.state.deleteReferralClicked}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Uputnice</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.referrals}
                columns={columns}
                striped hover condensed bordered
                pagination={paginationFactory(tables.PAGINATION_OPTIONS)}
                selectRow={selectRow}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Button
                className={styles.button}
                onClick={() => this.setViewReferralClicked(true)}
              >
                <span className='glyphicon glyphicon-eye-open'/> Pregled
              </Button>
              <AddEditDeleteButtons
                setAddClicked={value => this.setAddReferralClicked(value)}
                setEditClicked={value => this.setEditReferralClicked(value)}
                setDeleteClicked={value => this.setDeleteReferralClicked(value)}
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
    referrals: state.referrals,
    userData: state.userData,
    patients: state.patients,
    departmentTypes: state.departmentTypes,
    referralTypes: state.referralTypes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addReferral: referral => dispatch(addReferral(referral)),
    editReferral: referral => dispatch(editReferral(referral)),
    deleteReferral: id => dispatch(deleteReferral(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Referrals);
