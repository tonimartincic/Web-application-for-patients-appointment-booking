import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddMedicalSpecialist from './add/AddMedicalSpecialist';
import EditMedicalSpecialist from './edit/EditMedicalSpecialist';
import DeleteMedicalSpecialist from './delete/DeleteMedicalSpecialist';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './medicalSpecialists.css';
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';

class MedicalSpecialists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medicalSpecialist: null,
      addMedicalSpecialistClicked: false,
      editMedicalSpecialistClicked: false,
      deleteMedicalSpecialistClicked: false,
    };

    this.setMedicalSpecialist = this.setMedicalSpecialist.bind(this);
    this.setAddMedicalSpecialistClicked = this.setAddMedicalSpecialistClicked.bind(this);
    this.setEditMedicalSpecialistClicked = this.setEditMedicalSpecialistClicked.bind(this);
    this.setDeleteMedicalSpecialistClicked = this.setDeleteMedicalSpecialistClicked.bind(this);
  }

  resetState = () =>
    this.setState({
      medicalSpecialist: null,
      addMedicalSpecialistClicked: false,
      editMedicalSpecialistClicked: false,
      deleteMedicalSpecialistClicked: false,
    });

  setMedicalSpecialist = row =>
    this.setState({
      medicalSpecialist: row,
    });

  setAddMedicalSpecialistClicked = value =>
    this.setState({
      addMedicalSpecialistClicked: value,
    });

  setEditMedicalSpecialistClicked = value =>
    this.setState({
      editMedicalSpecialistClicked: value,
    });

  setDeleteMedicalSpecialistClicked = value =>
    this.setState({
      deleteMedicalSpecialistClicked: value,
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
    }, {
      dataField: 'mail',
      text: 'Mail',
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

      onSelect: this.setMedicalSpecialist,
      selected: this.state.medicalSpecialist === null ? null : [this.state.medicalSpecialist.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddMedicalSpecialist
            addMedicalSpecialistClicked={this.state.addMedicalSpecialistClicked}
            setAddMedicalSpecialistClicked={value => this.setAddMedicalSpecialistClicked(value)}
          />
          <EditMedicalSpecialist
            medicalSpecialist={this.state.medicalSpecialist}
            editMedicalSpecialistClicked={this.state.editMedicalSpecialistClicked}
            setEditMedicalSpecialistClicked={value => this.setEditMedicalSpecialistClicked(value)}
            resetState={() => this.resetState()}
          />
          <DeleteMedicalSpecialist
            medicalSpecialist={this.state.medicalSpecialist}
            deleteMedicalSpecialistClicked={this.state.deleteMedicalSpecialistClicked}
            setDeleteMedicalSpecialistClicked={value => this.setDeleteMedicalSpecialistClicked(value)}
            resetState={() => this.resetState()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Liječnici specijalisti</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.medicalSpecialists}
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
                setAddClicked={value => this.setAddMedicalSpecialistClicked(value)}
                setEditClicked={value => this.setEditMedicalSpecialistClicked(value)}
                setDeleteClicked={value => this.setDeleteMedicalSpecialistClicked(value)}
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
    medicalSpecialists: state.medicalSpecialists,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalSpecialists);
