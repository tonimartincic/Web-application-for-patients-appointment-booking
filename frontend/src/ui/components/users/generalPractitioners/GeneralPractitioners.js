import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddEditGeneralPractitioner from './addEdit/AddEditGeneralPractitioner';
import DeleteGeneralPractitioner from './delete/DeleteGeneralPractitioner';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addGeneralPractitioner, editGeneralPractitioner, deleteGeneralPractitioner} from '../../../../actionCreators/users/generalPractitionersActionCreators';
import * as styles from './generalPractitioners.css';
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';

class GeneralPractitioners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalPractitioner: null,
      generalPractitionerSelected: false,

      addGeneralPractitionerClicked: false,
      editGeneralPractitionerClicked: false,
      deleteGeneralPractitionerClicked: false,
    };

    this.setGeneralPractitioner = this.setGeneralPractitioner.bind(this);
    this.setAddGeneralPractitionerClicked = this.setAddGeneralPractitionerClicked.bind(this);
    this.setEditGeneralPractitionerClicked = this.setEditGeneralPractitionerClicked.bind(this);
    this.setDeleteGeneralPractitionerClicked = this.setDeleteGeneralPractitionerClicked.bind(this);
  }

  resetState = () =>
    this.setState({
      generalPractitioner: null,
      addGeneralPractitionerClicked: false,
      editGeneralPractitionerClicked: false,
      deleteGeneralPractitionerClicked: false,
    });

  setGeneralPractitioner = row =>
    this.setState({
      generalPractitioner: row,
    });

  setAddGeneralPractitionerClicked = value =>
    this.setState({
      addGeneralPractitionerClicked: value,
    });

  setEditGeneralPractitionerClicked = value =>
    this.setState({
      editGeneralPractitionerClicked: value,
    });

  setDeleteGeneralPractitionerClicked = value =>
    this.setState({
      deleteGeneralPractitionerClicked: value,
    });

  handleDelete = () => {
    this.props.deleteGeneralPractitioner(this.state.generalPractitioner.id);
    this.setDeleteGeneralPractitionerClicked(false);
    this.resetState();
  };

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

      onSelect: this.setGeneralPractitioner,
      selected: this.state.generalPractitioner === null ? null : [this.state.generalPractitioner.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddEditGeneralPractitioner
            generalPractitioner={this.state.generalPractitioner}
            generalPractitionerSelected={this.state.generalPractitionerSelected}

            addGeneralPractitionerClicked={this.state.addGeneralPractitionerClicked}
            setAddGeneralPractitionerClicked={value => this.setAddGeneralPractitionerClicked(value)}
            editGeneralPractitionerClicked={this.state.editGeneralPractitionerClicked}
            setEditGeneralPractitionerClicked={value => this.setEditGeneralPractitionerClicked(value)}

            resetState={() => this.resetState()}
          />
          <DeleteGeneralPractitioner
            generalPractitioner={this.state.generalPractitioner}
            generalPractitionerSelected={this.state.generalPractitionerSelected}

            deleteGeneralPractitionerClicked={this.state.deleteGeneralPractitionerClicked}
            setDeleteGeneralPractitionerClicked={value => this.setDeleteGeneralPractitionerClicked(value)}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Specijalisti obiteljske medicine</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.generalPractitioners}
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
                setAddClicked={value => this.setAddGeneralPractitionerClicked(value)}
                setEditClicked={value => this.setEditGeneralPractitionerClicked(value)}
                setDeleteClicked={value => this.setDeleteGeneralPractitionerClicked(value)}
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
    generalPractitioners: state.generalPractitioners,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGeneralPractitioner: generalPractitioner => dispatch(addGeneralPractitioner(generalPractitioner)),
    editGeneralPractitioner: generalPractitioner => dispatch(editGeneralPractitioner(generalPractitioner)),
    deleteGeneralPractitioner: id => dispatch(deleteGeneralPractitioner(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPractitioners);
