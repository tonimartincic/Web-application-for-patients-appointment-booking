import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import AddEditHospital from './addEdit/AddEditHospital';
import DeleteHospital from './delete/DeleteHospital';
import AddEditDeleteButtons from '../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addHospital, editHospital, deleteHospital} from "../../../actionCreators/hospitals/hospitalsActionCreators";
import * as styles from './hospitals.css'
import * as colors from '../../../constants/colors';
import * as tables from '../../../constants/tables';

class Hospitals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hospital: {},
      hospitalSelected: false,

      addHospitalClicked: false,
      editHospitalClicked: false,
      deleteHospitalClicked: false,

      nameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    };

    this.setHospital = this.setHospital.bind(this);

    this.setAddHospitalClicked = this.setAddHospitalClicked.bind(this);
    this.setEditHospitalClicked = this.setEditHospitalClicked.bind(this);
    this.setDeleteHospitalClicked = this.setDeleteHospitalClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeStreetNumber = this.handleChangeStreetNumber.bind(this);
  }

  resetState = () =>
    this.setState({
      hospital: {},
      hospitalSelected: false,

      addHospitalClicked: false,
      editHospitalClicked: false,
      deleteHospitalClicked: false,

      nameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    });

  setHospital = row =>
    this.setState({
      hospital: row,
      hospitalSelected: true,
    });

  setAddHospitalClicked = value =>
    this.setState({
      addHospitalClicked: value,
      hospital: {},
    });

  setEditHospitalClicked = value =>
    this.setState({
      editHospitalClicked: value,
    });

  setDeleteHospitalClicked = value =>
    this.setState({
      deleteHospitalClicked: value,
    });

  handleSubmit() {
    let errorExists = false;

    if (this.state.hospital.name == null || this.state.hospital.name.trim() === '') {
      this.setState({
        nameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.phoneNumber == null || this.state.hospital.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.city == null || this.state.hospital.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.postalCode == null || this.state.hospital.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.street == null || this.state.hospital.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.streetNumber == null || this.state.hospital.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      if(this.state.addHospitalClicked) {
        this.props.addHospital(this.state.hospital);
      } else {
        this.props.editHospital(this.state.hospital);
      }

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.hospital.mail == null || this.state.hospital.mail.trim() === '') {
      this.setState({
        mailValidationEmptyString: 'error',
      });

      return false;
    }

    const allEntitiesWithMail =
      [
        ...this.props.administrators,
        ...this.props.generalPractitioners,
        ...this.props.medicalSpecialists,
        ...this.props.patients,
        ...this.props.hospitals,
      ];

    for (let i = 0; i < allEntitiesWithMail.length; i = i + 1) {
      if (allEntitiesWithMail[i] !== null) {
        if ((allEntitiesWithMail[i].type === null || allEntitiesWithMail[i].type === undefined) &&
          allEntitiesWithMail[i].id === this.state.hospital.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.hospital.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.hospital.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeName = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        name: event.target.value,
      },

      nameValidation: null,
    });

  handleChangePhoneNumber = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        phoneNumber: event.target.value,
      },

      phoneNumberValidation: null,
    });

  handleChangeMail = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        mail: event.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  handleChangeCity = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        city: event.target.value,
      },

      cityValidation: null,
    });

  handleChangePostalCode = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        postalCode: event.target.value,
      },

      postalCodeValidation: null,
    });

  handleChangeStreet = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        street: event.target.value,
      },

      streetValidation: null,
    });

  handleChangeStreetNumber = event =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        streetNumber: event.target.value,
      },

      streetNumberValidation: null,
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
          <AddEditHospital
            hospital={this.state.hospital}
            hospitalSelected={this.state.hospitalSelected}

            addHospitalClicked={this.state.addHospitalClicked}
            setAddHospitalClicked={value => this.setAddHospitalClicked(value)}
            editHospitalClicked={this.state.editHospitalClicked}
            setEditHospitalClicked={value => this.setEditHospitalClicked(value)}
            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeName={event => this.handleChangeName(event)}
            handleChangePhoneNumber={event => this.handleChangePhoneNumber(event)}
            handleChangeMail={event => this.handleChangeMail(event)}
            handleChangeCity={event => this.handleChangeCity(event)}
            handleChangePostalCode={event => this.handleChangePostalCode(event)}
            handleChangeStreet={event => this.handleChangeStreet(event)}
            handleChangeStreetNumber={event => this.handleChangeStreetNumber(event)}

            nameValidation={this.state.nameValidation}
            phoneNumberValidation={this.state.phoneNumberValidation}
            mailValidationEmptyString={this.state.mailValidationEmptyString}
            mailValidationAlreadyExists={this.state.mailValidationAlreadyExists}
            mailValidationNotCorrectFormat={this.state.mailValidationNotCorrectFormat}
            cityValidation={this.state.cityValidation}
            postalCodeValidation={this.state.postalCodeValidation}
            streetValidation={this.state.streetValidation}
            streetNumberValidation={this.state.streetNumberValidation}
          />
          <DeleteHospital
            hospital={this.state.hospital}
            hospitalSelected={this.state.hospitalSelected}

            deleteHospitalClicked={this.state.deleteHospitalClicked}
            setDeleteHospitalClicked={value => this.setDeleteHospitalClicked(value)}
            resetState={() => this.resetState()}
            deleteHospital={id => this.props.deleteHospital(id)}
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
    administrators: state.administrators,
    generalPractitioners: state.generalPractitioners,
    medicalSpecialists: state.medicalSpecialists,
    patients: state.patients,
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addHospital: hospital => dispatch(addHospital(hospital)),
    editHospital: hospital => dispatch(editHospital(hospital)),
    deleteHospital: id => dispatch(deleteHospital(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
