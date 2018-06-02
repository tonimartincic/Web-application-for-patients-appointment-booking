import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddEditPatient from './addEdit/AddEditPatient';
import DeletePatient from './delete/DeletePatient';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addPatient, editPatient, deletePatient} from '../../../../actionCreators/users/patientsActionCreators';
import * as styles from './patients.css';
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';
import * as constants from '../../../../constants/values';
import * as dateUtil from '../../../../utils/DateUtil';

class Patients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      patient: {},
      patientSelected: null,

      addPatientClicked: false,
      editPatientClicked: false,
      deletePatientClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      sexValidation: null,
      oibValidation: null,
      dateOfBirthValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    };

    this.setPatient = this.setPatient.bind(this);
    this.setAddPatientClicked = this.setAddPatientClicked.bind(this);
    this.setEditPatientClicked = this.setEditPatientClicked.bind(this);
    this.setDeletePatientClicked = this.setDeletePatientClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeSex = this.handleChangeSex.bind(this);
    this.handleChangeOIB = this.handleChangeOIB.bind(this);
    this.handleChangeDateOfBirth = this.handleChangeDateOfBirth.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeStreetNumber = this.handleChangeStreetNumber.bind(this);

  }

  resetState = () =>
    this.setState({
      patient: {},
      patientSelected: null,

      addPatientClicked: false,
      editPatientClicked: false,
      deletePatientClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      sexValidation: null,
      oibValidation: null,
      dateOfBirthValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    });

  setPatient = row => {
    const patient =
      {
        id: row.id,
        firstName: row.firstName,
        lastName: row.lastName,
        sex: row.sex,
        oib: row.oib,
        dateOfBirth: dateUtil.createDateForDatePickerFromDateFromBackend(row.dateOfBirth),
        mail: row.mail,
        phoneNumber: row.phoneNumber,
        city: row.city,
        postalCode: row.postalCode,
        street: row.street,
        streetNumber: row.streetNumber,
      };

    this.setState({
      patient,
      patientSelected: true,
    });
  }

  setAddPatientClicked = value =>
    this.setState({
      addPatientClicked: value,
      patient: {},
      patientSelected: null,
    });

  setEditPatientClicked = value =>
    this.setState({
      editPatientClicked: value,
    });

  setDeletePatientClicked = value =>
    this.setState({
      deletePatientClicked: value,
    });

  handleSubmit() {
    let errorExists = false;

    if (this.state.patient.firstName == null || this.state.patient.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.lastName == null || this.state.patient.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.sex == null || this.state.patient.sex === '' ||
      this.state.patient.sex === 'select' || this.state.patient.sex === 'Odaberi') {
      this.setState({
        sexValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.oib == null || this.state.patient.oib.trim() === '') {
      this.setState({
        oibValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.dateOfBirth == null || this.state.patient.dateOfBirth.trim() === '') {
      this.setState({
        dateOfBirthValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.phoneNumber == null || this.state.patient.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.city == null || this.state.patient.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.postalCode == null || this.state.patient.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.street == null || this.state.patient.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.patient.streetNumber == null || this.state.patient.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const patient =
        {
          id: this.state.patient.id,
          firstName: this.state.patient.firstName,
          lastName: this.state.patient.lastName,
          sex: this.state.patient.sex,
          oib: this.state.patient.oib,
          dateOfBirth: dateUtil.constructDateFromDatePickerForBackend(this.state.patient.dateOfBirth),
          mail: this.state.patient.mail,
          phoneNumber: this.state.patient.phoneNumber,
          city: this.state.patient.city,
          postalCode: this.state.patient.postalCode,
          street: this.state.patient.street,
          streetNumber: this.state.patient.streetNumber,
        };

      if(this.state.addPatientClicked) {
        this.props.addPatient(patient);
      } else {
        this.props.addPatient(patient);
      }

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.patient.mail == null || this.state.patient.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.PATIENT &&
          allEntitiesWithMail[i].id === this.state.patient.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.patient.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.patient.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        firstName: event.target.value,
      },

      firstNameValidation: null,
    });

  handleChangeLastName = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        lastName: event.target.value,
      },

      lastNameValidation: null,
    });

  handleChangeSex = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        sex: event.target.value,
      },

      sexValidation: null,
    });

  handleChangeOIB = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        oib: event.target.value,
      },

      oibValidation: null,
    });

  handleChangeDateOfBirth = value =>
    this.setState({
      patient: {
        ...this.state.patient,
        dateOfBirth: value,
      },

      dateOfBirthValidation: null,
    });

  handleChangePhoneNumber = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        phoneNumber: event.target.value,
      },

      phoneNumberValidation: null,
    });

  handleChangeMail = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        mail: event.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  handleChangeCity = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        city: event.target.value,
      },

      cityValidation: null,
    });

  handleChangePostalCode = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        postalCode: event.target.value,
      },

      postalCodeValidation: null,
    });

  handleChangeStreet = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        street: event.target.value,
      },

      streetValidation: null,
    });

  handleChangeStreetNumber = event =>
    this.setState({
      patient: {
        ...this.state.patient,
        streetNumber: event.target.value,
      },

      streetNumberValidation: null,
    });

  handleDelete = () => {
    this.props.deletePatient(this.state.patient.id);
    this.setDeletePatientClicked(false);
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
          <AddEditPatient
            patient={this.state.patient}
            patientSelected={this.state.patientSelected}

            addPatientClicked={this.state.addPatientClicked}
            editPatientClicked={this.state.editPatientClicked}

            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeFirstName={event => this.handleChangeFirstName(event)}
            handleChangeLastName={event => this.handleChangeLastName(event)}
            handleChangeSex={event => this.handleChangeSex(event)}
            handleChangeOIB={event => this.handleChangeOIB(event)}
            handleChangeDateOfBirth={event => this.handleChangeDateOfBirth(event)}
            handleChangeMail={event => this.handleChangeMail(event)}
            handleChangePhoneNumber={event => this.handleChangePhoneNumber(event)}
            handleChangeCity={event => this.handleChangeCity(event)}
            handleChangePostalCode={event => this.handleChangePostalCode(event)}
            handleChangeStreet={event => this.handleChangeStreet(event)}
            handleChangeStreetNumber={event => this.handleChangeStreetNumber(event)}

            firstNameValidation={this.state.firstNameValidation}
            lastNameValidation={this.state.lastNameValidation}
            sexValidation={this.state.sexValidation}
            oibValidation={this.state.oibValidation}
            dateOfBirthValidation={this.state.dateOfBirthValidation}
            phoneNumberValidation={this.state.phoneNumberValidation}
            mailValidationEmptyString={this.state.mailValidationEmptyString}
            mailValidationAlreadyExists={this.state.mailValidationAlreadyExists}
            mailValidationNotCorrectFormat={this.state.mailValidationNotCorrectFormat}
            cityValidation={this.state.cityValidation}
            postalCodeValidation={this.state.postalCodeValidation}
            streetValidation={this.state.streetValidation}
            streetNumberValidation={this.state.streetNumberValidation}
          />
          <DeletePatient
            patient={this.state.patient}
            patientSelected={this.state.patientSelected}

            deletePatientClicked={this.state.deletePatientClicked}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
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
                striped hover condensed bordered
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
    userData: state.userData,
    administrators: state.administrators,
    generalPractitioners: state.generalPractitioners,
    medicalSpecialists: state.medicalSpecialists,
    patients: state.patients,
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addPatient: patient => dispatch(addPatient(patient)),
    editPatient: patient => dispatch(editPatient(patient)),
    deletePatient: id => dispatch(deletePatient(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
