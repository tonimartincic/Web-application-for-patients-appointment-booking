import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import AddAdministrator from './add/AddAdministrator';
import EditAdministrator from './edit/EditAdministrator';
import DeleteAdministrator from './delete/DeleteAdministrator';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './administrators.css'

class Administrators extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addAdministratorClicked: false,
      editAdministratorClicked: false,
      deleteAdministratorClicked: false,
    };

    this.setAddAdministratorClicked = this.setAddAdministratorClicked.bind(this);
    this.setEditAdministratorClicked = this.setEditAdministratorClicked.bind(this);
    this.setDeleteAdministratorClicked = this.setDeleteAdministratorClicked.bind(this);
  }

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

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddAdministrator
            addAdministratorClicked={this.state.addAdministratorClicked}
            setAddAdministratorClicked={value => this.setAddAdministratorClicked(value)}
          />
          <EditAdministrator
            editAdministratorClicked={this.state.editAdministratorClicked}
            setEditAdministratorClicked={value => this.setEditAdministratorClicked(value)}
          />
          <DeleteAdministrator
            deleteAdministratorClicked={this.state.deleteAdministratorClicked}
            setDeleteAdministratorClicked={value => this.setDeleteAdministratorClicked(value)}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Administratori</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Mail</th>
                  <th>Broj mobitela</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.administrators
                    .map((administrator, index) => {
                        return (
                          <tr key={index}>
                            <td>{administrator.firstName}</td>
                            <td>{administrator.lastName}</td>
                            <td>{administrator.mail}</td>
                            <td>{administrator.phoneNumber}</td>
                          </tr>)
                      }
                    )
                }
                </tbody>
              </Table>
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
    administrators: state.administrators,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
