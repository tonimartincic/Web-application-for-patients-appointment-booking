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
      hospital: null,

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

  handleSubmit() {
    let errorExists = false;

    if (this.state.hospital.name === null || this.state.hospital.name.trim() === '') {
      this.setState({
        nameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.phoneNumber === null || this.state.hospital.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.city === null || this.state.hospital.city.trim() === '') {
      this.setState({
        cityValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.postalCode === null || this.state.hospital.postalCode.toString().trim() === '') {
      this.setState({
        postalCodeValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.street === null || this.state.hospital.street.trim() === '') {
      this.setState({
        streetValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.hospital.streetNumber === null || this.state.hospital.streetNumber.toString().trim() === '') {
      this.setState({
        streetNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      this.props.editHospital(this.state.hospital);
      this.props.setEditHospitalClicked(false);

      this.resetState();
      this.props.resetState();
    }
  }

  checkEmail() {
    if (this.state.hospital.mail === null || this.state.hospital.mail.trim() === '') {
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

  handleChangeName = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        name: e.target.value,
      },

      nameValidation: null,
    });

  handleChangePhoneNumber = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });

  handleChangeMail = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  handleChangeCity = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        city: e.target.value,
      },

      cityValidation: null,
    });

  handleChangePostalCode = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        postalCode: e.target.value,
      },

      postalCodeValidation: null,
    });

  handleChangeStreet = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        street: e.target.value,
      },

      streetValidation: null,
    });

  handleChangeStreetNumber = e =>
    this.setState({
      hospital: {
        ...this.state.hospital,
        streetNumber: e.target.value,
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
    administrators: state.administrators,
    generalPractitioners: state.generalPractitioners,
    medicalSpecialists: state.medicalSpecialists,
    patients: state.patients,
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
