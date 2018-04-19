import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';

class Patients extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
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
