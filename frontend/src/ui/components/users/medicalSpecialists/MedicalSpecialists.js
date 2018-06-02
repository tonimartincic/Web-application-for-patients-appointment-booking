import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddEditMedicalSpecialist from './addEdit/AddEditMedicalSpecialist';
import DeleteMedicalSpecialist from './delete/DeleteMedicalSpecialist';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addMedicalSpecialist, editMedicalSpecialist, deleteMedicalSpecialist} from '../../../../actionCreators/users/medicalSpecialistsActionCreators';
import * as styles from './medicalSpecialists.css';
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';
import * as constants from '../../../../constants/values';

class MedicalSpecialists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      medicalSpecialist: {},
      medicalSpecialistSelected: false,

      addMedicalSpecialistClicked: false,
      editMedicalSpecialistClicked: false,
      deleteMedicalSpecialistClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    };

    this.setMedicalSpecialist = this.setMedicalSpecialist.bind(this);
    this.setAddMedicalSpecialistClicked = this.setAddMedicalSpecialistClicked.bind(this);
    this.setEditMedicalSpecialistClicked = this.setEditMedicalSpecialistClicked.bind(this);
    this.setDeleteMedicalSpecialistClicked = this.setDeleteMedicalSpecialistClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }

  resetState = () =>
    this.setState({
      medicalSpecialist: {},
      medicalSpecialistSelected: false,

      addMedicalSpecialistClicked: false,
      editMedicalSpecialistClicked: false,
      deleteMedicalSpecialistClicked: false,

      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  setMedicalSpecialist = row =>
    this.setState({
      medicalSpecialist: row,
      medicalSpecialistSelected: true,
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

  handleSubmit() {
    let errorExists = false;

    if (this.state.selectedMedicalSpecialist.firstName === null || this.state.selectedMedicalSpecialist.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedMedicalSpecialist.lastName === null || this.state.selectedMedicalSpecialist.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedMedicalSpecialist.phoneNumber === null || this.state.selectedMedicalSpecialist.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const medicalSpecialist =
        {
          id: this.state.selectedMedicalSpecialist.id,
          firstName: this.state.selectedMedicalSpecialist.firstName,
          lastName: this.state.selectedMedicalSpecialist.lastName,
          mail: this.state.selectedMedicalSpecialist.mail,
          phoneNumber: this.state.selectedMedicalSpecialist.phoneNumber,
        };

      this.props.editMedicalSpecialist(medicalSpecialist);
      this.props.setEditMedicalSpecialistClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedMedicalSpecialist.mail === null || this.state.selectedMedicalSpecialist.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.MEDICAL_SPECIALIST &&
          allEntitiesWithMail[i].id === this.state.selectedMedicalSpecialist.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedMedicalSpecialist.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedMedicalSpecialist.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedMedicalSpecialist: {
        ...this.state.selectedMedicalSpecialist,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleDelete = () => {
    this.props.deleteMedicalSpecialist(this.state.medicalSpecialist.id);
    this.setDeleteMedicalSpecialistClicked(false);
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
          <AddEditMedicalSpecialist
            medicalSpecialist={this.state.medicalSpecialist}
            medicalSpecialistSelected={this.state.medicalSpecialistSelected}

            addMedicalSpecialistClicked={this.state.addMedicalSpecialistClicked}
            setAddMedicalSpecialistClicked={value => this.setAddMedicalSpecialistClicked(value)}
            editMedicalSpecialistClicked={this.state.editMedicalSpecialistClicked}
            setEditMedicalSpecialistClicked={value => this.setEditMedicalSpecialistClicked(value)}

            resetState={() => this.resetState()}
          />
          <DeleteMedicalSpecialist
            medicalSpecialist={this.state.medicalSpecialist}
            medicalSpecialistSelected={this.state.medicalSpecialistSelected}

            deleteMedicalSpecialistClicked={this.state.deleteMedicalSpecialistClicked}
            setDeleteMedicalSpecialistClicked={value => this.setDeleteMedicalSpecialistClicked(value)}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
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
                striped hover condensed bordered
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
    addMedicalSpecialist: medicalSpecialist => dispatch(addMedicalSpecialist(medicalSpecialist)),
    editMedicalSpecialist: medicalSpecialist => dispatch(editMedicalSpecialist(medicalSpecialist)),
    deleteMedicalSpecialist: id => dispatch(deleteMedicalSpecialist(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalSpecialists);
