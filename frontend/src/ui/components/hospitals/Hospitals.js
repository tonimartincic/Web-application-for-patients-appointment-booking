import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import Footer from '../footer/Footer';

class Hospitals extends React.Component {
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
                  <th>Naziv</th>
                  <th>Grad</th>
                  <th>Poštanski broj</th>
                  <th>Ulica</th>
                  <th>Kućni Broj</th>
                  <th>Telefonski broj</th>
                  <th>Mail</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.hospitals
                    .map((hospital, index) => {
                        return (
                          <tr key={index}>
                            <td>{hospital.name}</td>
                            <td>{hospital.city}</td>
                            <td>{hospital.postalCode}</td>
                            <td>{hospital.street}</td>
                            <td>{hospital.streetNumber}</td>
                            <td>{hospital.phoneNumber}</td>
                            <td>{hospital.mail}</td>
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
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
