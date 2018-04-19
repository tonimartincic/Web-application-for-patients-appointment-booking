import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';

class MedicalSpecialists extends React.Component {
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
                  <th>Broj mobitela</th>
                </tr>
                </thead>
                <tbody>
                {
                  this.props.medicalSpecialists
                    .map((medicalSpecialist, index) => {
                        return (
                          <tr key={index}>
                            <td>{medicalSpecialist.firstName}</td>
                            <td>{medicalSpecialist.lastName}</td>
                            <td>{medicalSpecialist.mail}</td>
                            <td>{medicalSpecialist.phoneNumber}</td>
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
    medicalSpecialists: state.medicalSpecialists,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MedicalSpecialists);
