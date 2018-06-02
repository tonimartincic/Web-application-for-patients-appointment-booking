import React from 'react';
import {connect} from 'react-redux';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import {Col, Grid, Row} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddEditAdministrator from './addEdit/AddEditAdministrator';
import DeleteAdministrator from './delete/DeleteAdministrator';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import {addAdministrator, editAdministrator, deleteAdministrator} from '../../../../actionCreators/users/administratorsActionCreators';
import * as styles from './administrators.css'
import * as colors from '../../../../constants/colors';
import * as tables from '../../../../constants/tables';
import * as constants from '../../../../constants/values';

class Administrators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      administrator: {},
      administratorSelected: false,

      addAdministratorClicked: false,
      editAdministratorClicked: false,
      deleteAdministratorClicked: false,

      cannotDeleteYourselfValidation: false,
      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    };

    this.setAdministrator = this.setAdministrator.bind(this);
    this.setAddAdministratorClicked = this.setAddAdministratorClicked.bind(this);
    this.setEditAdministratorClicked = this.setEditAdministratorClicked.bind(this);
    this.setDeleteAdministratorClicked = this.setDeleteAdministratorClicked.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeFirstName = this.handleChangeFirstName.bind(this);
    this.handleChangeLastName = this.handleChangeLastName.bind(this);
    this.handleChangeMail = this.handleChangeMail.bind(this);
    this.handleChangePhoneNumber = this.handleChangePhoneNumber.bind(this);
  }

  resetState = () =>
    this.setState({
      administrator: {},
      administratorSelected: false,

      addAdministratorClicked: false,
      editAdministratorClicked: false,
      deleteAdministratorClicked: false,

      cannotDeleteYourselfValidation: false,
      firstNameValidation: null,
      lastNameValidation: null,
      phoneNumberValidation: null,
      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });

  setAdministrator = row =>
    this.setState({
      administrator: row,
      administratorSelected: true,
    });

  setAddAdministratorClicked = value =>
    this.setState({
      addAdministratorClicked: value,
    });

  setEditAdministratorClicked = value =>
    this.setState({
      editAdministratorClicked: value,
    });

  setDeleteAdministratorClicked = value =>
    this.setState({
      deleteAdministratorClicked: value,
    });

  handleSubmit() {
    let errorExists = false;

    if (this.state.selectedAdministrator.firstName === null || this.state.selectedAdministrator.firstName.trim() === '') {
      this.setState({
        firstNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedAdministrator.lastName === null || this.state.selectedAdministrator.lastName.trim() === '') {
      this.setState({
        lastNameValidation: 'error',
      });

      errorExists = true;
    }

    if (this.state.selectedAdministrator.phoneNumber === null || this.state.selectedAdministrator.phoneNumber.trim() === '') {
      this.setState({
        phoneNumberValidation: 'error',
      });

      errorExists = true;
    }

    if (!this.checkEmail()) {
      errorExists = true;
    }

    if (!errorExists) {
      const administrator =
        {
          id: this.state.selectedAdministrator.id,
          firstName: this.state.selectedAdministrator.firstName,
          lastName: this.state.selectedAdministrator.lastName,
          mail: this.state.selectedAdministrator.mail,
          phoneNumber: this.state.selectedAdministrator.phoneNumber,
        };

      this.props.editAdministrator(administrator);
      this.props.setEditAdministratorClicked(false);

      this.resetState();
    }
  }

  checkEmail() {
    if (this.state.selectedAdministrator.mail === null || this.state.selectedAdministrator.mail.trim() === '') {
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
        if (allEntitiesWithMail[i].type === constants.ADMINISTRATOR &&
          allEntitiesWithMail[i].id === this.state.selectedAdministrator.id) {
          continue;
        }

        if (allEntitiesWithMail[i].mail === this.state.selectedAdministrator.mail.trim()) {
          this.setState({
            mailValidationAlreadyExists: 'error',
          });

          return false;
        }
      }
    }

    let re = /\S+@\S+\.\S+/;
    if (!re.test(this.state.selectedAdministrator.mail.trim())) {
      this.setState({
        mailValidationNotCorrectFormat: 'error',
      });

      return false;
    }

    return true;
  }

  handleChangeFirstName(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        firstName: e.target.value,
      },

      firstNameValidation: null,
    });
  }

  handleChangeLastName(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        lastName: e.target.value,
      },

      lastNameValidation: null,
    });
  }

  handleChangePhoneNumber(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        phoneNumber: e.target.value,
      },

      phoneNumberValidation: null,
    });
  }

  handleChangeMail(e) {
    this.setState({
      selectedAdministrator: {
        ...this.state.selectedAdministrator,
        mail: e.target.value,
      },

      mailValidationEmptyString: null,
      mailValidationAlreadyExists: null,
      mailValidationNotCorrectFormat: null,
    });
  }

  handleDelete = () => {
    if (this.state.administrator.id === this.props.userData.id) {
      this.setState({
        cannotDeleteYourselfValidation: true,
      });

      return;
    }

    this.props.deleteAdministrator(this.state.administrator.id);
    this.setDeleteAdministratorClicked(false);
    this.resetState();
  };

  handleAlertDismiss() {
    this.setState({
      cannotDeleteYourselfValidation: false,
    });
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

      onSelect: this.setAdministrator,
      selected: this.state.administrator === null ? null : [this.state.administrator.id],
    };

    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddEditAdministrator
            administrator={this.state.administrator}
            administratorSelected={this.state.administratorSelected}

            addAdministratorClicked={this.state.addAdministratorClicked}
            setAddAdministratorClicked={value => this.setAddAdministratorClicked(value)}
            editAdministratorClicked={this.state.editAdministratorClicked}
            setEditAdministratorClicked={value => this.setEditAdministratorClicked(value)}

            resetState={() => this.resetState()}
          />
          <DeleteAdministrator
            administrator={this.state.administrator}
            administratorSelected={this.state.administratorSelected}

            deleteAdministratorClicked={this.state.deleteAdministratorClicked}
            setDeleteAdministratorClicked={value => this.setDeleteAdministratorClicked(value)}

            resetState={() => this.resetState()}
            handleDelete={() => this.handleDelete()}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Administratori</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <BootstrapTable
                keyField='id'
                data={this.props.administrators}
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
                setAddClicked={value => this.setAddAdministratorClicked(value)}
                setEditClicked={value => this.setEditAdministratorClicked(value)}
                setDeleteClicked={value => this.setDeleteAdministratorClicked(value)}
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
    addAdministrator: administrator => dispatch(addAdministrator(administrator)),
    editAdministrator: administrator => dispatch(editAdministrator(administrator)),
    deleteAdministrator: id => dispatch(deleteAdministrator(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
