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

    if (this.state.selectedGeneralPractitioner.firstName === null || this.state.selectedGeneralPractitioner.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.lastName === null || this.state.selectedGeneralPractitioner.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.phoneNumber === null || this.state.selectedGeneralPractitioner.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.city === null || this.state.selectedGeneralPractitioner.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.postalCode === null || this.state.selectedGeneralPractitioner.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.street === null || this.state.selectedGeneralPractitioner.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedGeneralPractitioner.streetNumber === null || this.state.selectedGeneralPractitioner.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const generalPractitioner =
        {
          id: this.state.selectedGeneralPractitioner.id,
          firstName: this.state.selectedGeneralPractitioner.firstName,
          lastName: this.state.selectedGeneralPractitioner.lastName,
          mail: this.state.selectedGeneralPractitioner.mail,
          phoneNumber: this.state.selectedGeneralPractitioner.phoneNumber,
          city: this.state.selectedGeneralPractitioner.city,
          postalCode: this.state.selectedGeneralPractitioner.postalCode,
          street: this.state.selectedGeneralPractitioner.street,
          streetNumber: this.state.selectedGeneralPractitioner.streetNumber,
        };

      this.props.editGeneralPractitioner(generalPractitioner);
      this.props.setEditGeneralPractitionerClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedGeneralPractitioner.mail === null || this.state.selectedGeneralPractitioner.mail.trim() === '') {
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
          allEntitiesWithMail[i].id === this.state.selectedGeneralPractitioner.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedGeneralPractitioner.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedGeneralPractitioner.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleChangeCity(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        city: e.target.value,
      },

      cityValidation: null,
    });
  }

  handleChangePostalCode(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });
  }

  handleChangeStreet(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        street: e.target.value,
      },

      streetValidation: null,
    });
  }

  handleChangeStreetNumber(e) {
    this.setState({
      selectedGeneralPractitioner: {
        ...this.state.selectedGeneralPractitioner,
        streetNumber: e.target.value,
      },

      streetNumberValidation: null,
    });
  }

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
