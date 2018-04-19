import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import styles from './administrators.css';

class Administrators extends React.Component {
  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <Row>
            <Col md={12}>
              <Table striped bordered condensed hover className={styles.table}>
                <thead>
                <tr>
                  <th>Ime</th>
                  <th>Prezime</th>
                  <th>Mail</th>
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
    administrators: state.administrators,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Administrators);
