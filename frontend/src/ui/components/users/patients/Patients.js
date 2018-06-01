import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddPatient from './add/AddPatient';
import EditPatient from './edit/EditPatient';
import DeletePatient from './delete/DeletePatient';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './patients.css';
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';

class Patients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: null,
      addPatientClicked: false,
      editPatientClicked: false,
      deletePatientClicked: false,
    };

    this.setPatient = this.setPatient.bind(this);
    this.setAddPatientClicked = this.setAddPatientClicked.bind(this);
    this.setEditPatientClicked = this.setEditPatientClicked.bind(this);
    this.setDeletePatientClicked = this.setDeletePatientClicked.bind(this);
  }

  resetState = () =>
    this.setState({
      patient: null,
      addPatientClicked: false,
      editPatientClicked: false,
      deletePatientClicked: false,
    });

  setPatient = row =>
    this.setState({
      patient: row,
    });

  setAddPatientClicked = value =>
    this.setState({
      addPatientClicked: value,
    });

  setEditPatientClicked = value =>
    this.setState({
      editPatientClicked: value,
    });

  setDeletePatientClicked = value =>
    this.setState({
      deletePatientClicked: value,
    });

  render() {
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'firstName',
      text: 'Ime',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'lastName',
      text: 'Prezime',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'sex',
      text: 'Spol',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'oib',
      text: 'OIB',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'dateOfBirth',
      text: 'Datum rođenja',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'mail',
      text: 'Mail',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'city',
      text: 'Grad',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'postalCode',
      text: 'Poštanski broj',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'street',
      text: 'Ulica',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'streetNumber',
      text: 'Kućni Broj',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'phoneNumber',
      text: 'Broj mobitela',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }];


    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: colors.SELECTED_ROW,

      onSelect: this.setPatient,
      selected: this.state.patient === null ? null : [this.state.patient.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddPatient
            addPatientClicked={this.state.addPatientClicked}
            setAddPatientClicked={value => this.setAddPatientClicked(value)}
          />
          <EditPatient
            patient={this.state.patient}
            editPatientClicked={this.state.editPatientClicked}
            setEditPatientClicked={value => this.setEditPatientClicked(value)}
            resetState={() => this.resetState()}
          />
          <DeletePatient
            patient={this.state.patient}
            deletePatientClicked={this.state.deletePatientClicked}
            setDeletePatientClicked={value => this.setDeletePatientClicked(value)}
            resetState={() => this.resetState()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Pacijenti</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.patients}
                columns={columns}
                striped
                hover
                condensed
                bordered
                pagination={paginationFactory(tables.PAGINATION_OPTIONS)}
                selectRow={selectRow}
              />
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <AddEditDeleteButtons
                setAddClicked={value => this.setAddPatientClicked(value)}
                setEditClicked={value => this.setEditPatientClicked(value)}
                setDeleteClicked={value => this.setDeletePatientClicked(value)}
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
    patients: state.patients,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
