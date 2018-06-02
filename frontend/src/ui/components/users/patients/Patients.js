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

  setPatient = row =>
    this.setState({
      patient: row,
      patientSelected: true,
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

  handleSubmit() {
    let errorExists = false;

    if (this.state.selectedPatient.firstName === null || this.state.selectedPatient.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.lastName === null || this.state.selectedPatient.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.sex === null || this.state.selectedPatient.sex === '' ||
      this.state.selectedPatient.sex === 'select' || this.state.selectedPatient.sex === 'Odaberi') {
      this.setState({
        sexValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.oib === null || this.state.selectedPatient.oib.trim() === '') {
      this.setState({
        oibValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.dateOfBirth === null || this.state.selectedPatient.dateOfBirth.trim() === '') {
      this.setState({
        dateOfBirthValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.phoneNumber === null || this.state.selectedPatient.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.city === null || this.state.selectedPatient.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.postalCode === null || this.state.selectedPatient.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.street === null || this.state.selectedPatient.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedPatient.streetNumber === null || this.state.selectedPatient.streetNumber.toString().trim() === '') {
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
          id: this.state.selectedPatient.id,
          firstName: this.state.selectedPatient.firstName,
          lastName: this.state.selectedPatient.lastName,
          sex: this.state.selectedPatient.sex,
          oib: this.state.selectedPatient.oib,
          dateOfBirth: dateUtil.constructDateFromDatePickerForBackend(this.state.selectedPatient.dateOfBirth),
          mail: this.state.selectedPatient.mail,
          phoneNumber: this.state.selectedPatient.phoneNumber,
          city: this.state.selectedPatient.city,
          postalCode: this.state.selectedPatient.postalCode,
          street: this.state.selectedPatient.street,
          streetNumber: this.state.selectedPatient.streetNumber,
        };

      this.props.editPatient(patient);
      this.props.setEditPatientClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedPatient.mail === null || this.state.selectedPatient.mail.trim() === '') {
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
          allEntitiesWithMail[i].id === this.state.selectedPatient.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedPatient.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedPatient.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangeSex(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        sex: e.target.value,
      },

      sexValidation: null,
    });
  }

  handleChangeOIB(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        oib: e.target.value,
      },

      oibValidation: null,
    });
  }

  handleChangeDateOfBirth(value) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        dateOfBirth: value,
      },

      dateOfBirthValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        city: e.target.value,
      },

      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        street: e.target.value,
      },

      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      selectedPatient: {
        ...this.state.selectedPatient,
        streetNumber: e.target.value,
      },

      streetNumberValidation: null,
    });
  }

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
            setAddPatientClicked={value => this.setAddPatientClicked(value)}
            editPatientClicked={this.state.editPatientClicked}
            setEditPatientClicked={value => this.setEditPatientClicked(value)}

            resetState={() => this.resetState()}
          />
          <DeletePatient
            patient={this.state.patient}
            patientSelected={this.state.patientSelected}

            deletePatientClicked={this.state.deletePatientClicked}
            setDeletePatientClicked={value => this.setDeletePatientClicked(value)}

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
