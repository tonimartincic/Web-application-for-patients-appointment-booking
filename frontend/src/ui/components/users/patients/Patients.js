import React from 'react';
import {connect} from 'react-redux';
import {Button, Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import AddPatient from './add/AddPatient';
import EditPatient from './edit/EditPatient';
import DeletePatient from './delete/DeletePatient';
import * as styles from './patients.css';

class Patients extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addPatientClicked: false,
      editPatientClicked: false,
      deletePatientClicked: false,
    };

    this.setAddPatientClicked = this.setAddPatientClicked.bind(this);
    this.setEditPatientClicked = this.setEditPatientClicked.bind(this);
    this.setDeletePatientClicked = this.setDeletePatientClicked.bind(this);
  }

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

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Pacijenti</h2>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Spol</th>
                  <th>OIB</th>
                  <th>Datum rođenja</th>
                  <th>Mail</th>
                  <th>Grad</th>
                  <th>Poštanski broj</th>
                  <th>Ulica</th>
                  <th>Kućni Broj</th>
                  <th>Broj mobitela</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.patients
                    .map((patient, index) => {
                        return (
                          <tr key={index}>
                            <td>{patient.firstName}</td>
                            <td>{patient.lastName}</td>
                            <td>{patient.sex}</td>
                            <td>{patient.oib}</td>
                            <td>{patient.dateOfBirth}</td>
                            <td>{patient.mail}</td>
                            <td>{patient.city}</td>
                            <td>{patient.postalCode}</td>
                            <td>{patient.street}</td>
                            <td>{patient.streetNumber}</td>
                            <td>{patient.phoneNumber}</td>
                          </tr>)
                      }
                    )
                }
                </tbody>
              </Table>
            </Col>
          </Row>
          <Row>
            <div>
              <Col md={8} mdOffset={3}>
                <Button
                  className={styles.button}
                  onClick={value => this.setAddPatientClicked(value)}
                >
                  <span className='glyphicon glyphicon-plus'/> Dodaj
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setEditPatientClicked(value)}
                >
                  <span className='glyphicon glyphicon-edit'/> Uredi
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setDeletePatientClicked(value)}
                >
                  <span className='glyphicon glyphicon-trash'/> Obriši
                </Button>
              </Col>
            </div>
            <AddPatient
              addPatientClicked={this.state.addPatientClicked}
              setAddPatientClicked={value => this.setAddPatientClicked(value)}
            />
            <EditPatient
              editPatientClicked={this.state.editPatientClicked}
              setEditPatientClicked={value => this.setEditPatientClicked(value)}
            />
            <DeletePatient
              deletePatientClicked={this.state.deletePatientClicked}
              setDeletePatientClicked={value => this.setDeletePatientClicked(value)}
            />
          </Row>
        </Grid>
        <Footer/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    patients: state.patients,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Patients);
