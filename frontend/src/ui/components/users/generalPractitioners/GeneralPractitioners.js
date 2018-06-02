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
import * as constants from '../../../../constants/values';

class GeneralPractitioners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      generalPractitioner: {},
      generalPractitionerSelected: false,

      addGeneralPractitionerClicked: false,
      editGeneralPractitionerClicked: false,
      deleteGeneralPractitionerClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    };

    this.setGeneralPractitioner = this.setGeneralPractitioner.bind(this);
    this.setAddGeneralPractitionerClicked = this.setAddGeneralPractitionerClicked.bind(this);
    this.setEditGeneralPractitionerClicked = this.setEditGeneralPractitionerClicked.bind(this);
    this.setDeleteGeneralPractitionerClicked = this.setDeleteGeneralPractitionerClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangePostalCode = this.handleChangePostalCode.bind(this);
    this.handleChangeStreet = this.handleChangeStreet.bind(this);
    this.handleChangeStreetNumber = this.handleChangeStreetNumber.bind(this);
  }

  resetState = () =>
    this.setState({
      generalPractitioner: {},
      generalPractitionerSelected: false,

      addGeneralPractitionerClicked: false,
      editGeneralPractitionerClicked: false,
      deleteGeneralPractitionerClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
      cityValidation: null,
      postalCodeValidation: null,
      streetValidation: null,
      streetNumberValidation: null,
    });

  setGeneralPractitioner = row =>
    this.setState({
      generalPractitioner: row,
      generalPractitionerSelected: true,
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

  handleSubmit() {
    let errorExists = false;

    if (this.state.generalPractitioner.firstName == null || this.state.generalPractitioner.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.lastName == null || this.state.generalPractitioner.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.phoneNumber == null || this.state.generalPractitioner.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.city == null || this.state.generalPractitioner.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.postalCode == null || this.state.generalPractitioner.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.street == null || this.state.generalPractitioner.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.generalPractitioner.streetNumber == null || this.state.generalPractitioner.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      if(this.state.addGeneralPractitionerClicked) {
        this.props.addGeneralPractitioner(this.state.generalPractitioner);
      } else {
        this.props.editGeneralPractitioner(this.state.generalPractitioner);
      }

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.generalPractitioner.mail == null || this.state.generalPractitioner.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.GENERAL_PRACTITIONER &&
          allEntitiesWithMail[i].id === this.state.generalPractitioner.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.generalPractitioner.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.generalPractitioner.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        firstName: event.target.value,
      },

      firstNameValidation: null,
    });

  handleChangeLastName = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        lastName: event.target.value,
      },

      lastNameValidation: null,
    });

  handleChangePhoneNumber = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        phoneNumber: event.target.value,
      },

      phoneNumberValidation: null,
    });

  handleChangeMail = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        mail: event.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  handleChangeCity = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        city: event.target.value,
      },

      cityValidation: null,
    });

  handleChangePostalCode = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        postalCode: event.target.value,
      },

      postalCodeValidation: null,
    });

  handleChangeStreet = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        street: event.target.value,
      },

      streetValidation: null,
    });

  handleChangeStreetNumber = event =>
    this.setState({
      generalPractitioner: {
        ...this.state.generalPractitioner,
        streetNumber: event.target.value,
      },

      streetNumberValidation: null,
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
            editGeneralPractitionerClicked={this.state.editGeneralPractitionerClicked}

            resetState={() => this.resetState()}

            handleSubmit={() => this.handleSubmit()}
            handleChangeFirstName={event => this.handleChangeFirstName(event)}
            handleChangeLastName={event => this.handleChangeLastName(event)}
            handleChangeMail={event => this.handleChangeMail(event)}
            handleChangePhoneNumber={event => this.handleChangePhoneNumber(event)}
            handleChangeCity={event => this.handleChangeCity(event)}
            handleChangePostalCode={event => this.handleChangePostalCode(event)}
            handleChangeStreet={event => this.handleChangeStreet(event)}
            handleChangeStreetNumber={event => this.handleChangeStreetNumber(event)}

            firstNameValidation={this.state.firstNameValidation}
            lastNameValidation={this.state.lastNameValidation}
            phoneNumberValidation={this.state.phoneNumberValidation}
            mailValidationEmptyString={this.state.mailValidationEmptyString}
            mailValidationAlreadyExists={this.state.mailValidationAlreadyExists}
            mailValidationNotCorrectFormat={this.state.mailValidationNotCorrectFormat}
            cityValidation={this.state.cityValidation}
            postalCodeValidation={this.state.postalCodeValidation}
            streetValidation={this.state.streetValidation}
            streetNumberValidation={this.state.streetNumberValidation}
          />
          <DeleteGeneralPractitioner
            generalPractitioner={this.state.generalPractitioner}
            generalPractitionerSelected={this.state.generalPractitionerSelected}

            deleteGeneralPractitionerClicked={this.state.deleteGeneralPractitionerClicked}

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
    addGeneralPractitioner: generalPractitioner => dispatch(addGeneralPractitioner(generalPractitioner)),
    editGeneralPractitioner: generalPractitioner => dispatch(editGeneralPractitioner(generalPractitioner)),
    deleteGeneralPractitioner: id => dispatch(deleteGeneralPractitioner(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPractitioners);
