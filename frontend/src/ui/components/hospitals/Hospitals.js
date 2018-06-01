import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import AddHospital from './add/AddHospital';
import EditHospital from './edit/EditHospital';
import DeleteHospital from './delete/DeleteHospital';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './hospitals.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';

class Hospitals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospital: null,
      addHospitalClicked: false,
      editHospitalClicked: false,
      deleteHospitalClicked: false,
    };

    this.setHospital = this.setHospital.bind(this);
    this.setAddHospitalClicked = this.setAddHospitalClicked.bind(this);
    this.setEditHospitalClicked = this.setEditHospitalClicked.bind(this);
    this.setDeleteHospitalClicked = this.setDeleteHospitalClicked.bind(this);
  }

  resetState = () =>
    this.setState({
      hospital: null,
      addHospitalClicked: false,
      editHospitalClicked: false,
      deleteHospitalClicked: false,
    });

  setHospital = row =>
    this.setState({
      hospital: row,
    });

  setAddHospitalClicked = value =>
    this.setState({
      addHospitalClicked: value,
    });

  setEditHospitalClicked = value =>
    this.setState({
      editHospitalClicked: value,
    });

  setDeleteHospitalClicked = value =>
    this.setState({
      deleteHospitalClicked: value,
    });

  render() {
    const columns = [{
      dataField: 'id',
      text: 'ID',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'name',
      text: 'Naziv',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
      dataField: 'city',
      text: 'Grad',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }, {
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
      text: 'Telefonski broj',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    },{
      dataField: 'mail',
      text: 'Mail',
      sort: true,
      headerStyle: {whiteSpace: 'nowrap'}
    }];

    const selectRow = {
      mode: 'radio',
      clickToSelect: true,
      bgColor: colors.SELECTED_ROW,

      onSelect: this.setHospital,
      selected: this.state.hospital === null ? null : [this.state.hospital.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddHospital
            addHospitalClicked={this.state.addHospitalClicked}
            setAddHospitalClicked={value => this.setAddHospitalClicked(value)}
          />
          <EditHospital
            hospital={this.state.hospital}
            editHospitalClicked={this.state.editHospitalClicked}
            setEditHospitalClicked={value => this.setEditHospitalClicked(value)}
            resetState={() => this.resetState()}
          />
          <DeleteHospital
            hospital={this.state.hospital}
            deleteHospitalClicked={this.state.deleteHospitalClicked}
            setDeleteHospitalClicked={value => this.setDeleteHospitalClicked(value)}
            resetState={() => this.resetState()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Bolnice</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.hospitals}
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
                setAddClicked={value => this.setAddHospitalClicked(value)}
                setEditClicked={value => this.setEditHospitalClicked(value)}
                setDeleteClicked={value => this.setDeleteHospitalClicked(value)}
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
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
