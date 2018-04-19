import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';

class GeneralPractitioners extends React.Component {
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
                  this.props.generalPractitioners
                    .map((generalPractitioner, index) => {
                        return (
                          <tr key={index}>
                            <td>{generalPractitioner.firstName}</td>
                            <td>{generalPractitioner.lastName}</td>
                            <td>{generalPractitioner.mail}</td>
                            <td>{generalPractitioner.city}</td>
                            <td>{generalPractitioner.postalCode}</td>
                            <td>{generalPractitioner.street}</td>
                            <td>{generalPractitioner.streetNumber}</td>
                            <td>{generalPractitioner.phoneNumber}</td>
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
    generalPractitioners: state.generalPractitioners,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(GeneralPractitioners);
