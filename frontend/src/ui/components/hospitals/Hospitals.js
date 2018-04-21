import React from 'react';
import {connect} from 'react-redux';
import {Button, Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../navigationBar/NavigationBar';
import AddHospital from './AddHospital';
import EditHospital from './EditHospital';
import DeleteHospital from './DeleteHospital';
import Footer from '../footer/Footer';
import * as styles from './hospitals.css'

class Hospitals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addHospitalClicked: false,
      editHospitalClicked: false,
      deleteHospitalClicked: false,
    };

    this.setAddHospitalClicked = this.setAddHospitalClicked.bind(this);
    this.setEditHospitalClicked = this.setEditHospitalClicked.bind(this);
    this.setDeleteHospitalClicked = this.setDeleteHospitalClicked.bind(this);
  }

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
          <Row>
            <div>
              <Col md={8} mdOffset={3}>
                <Button
                  className={styles.button}
                  onClick={value => this.setAddHospitalClicked(value)}
                >
                  <span className='glyphicon glyphicon-plus'/> Dodaj
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setEditHospitalClicked(value)}
                >
                  <span className='glyphicon glyphicon-edit'/> Uredi
                </Button>
                <Button
                  className={styles.button}
                  onClick={value => this.setDeleteHospitalClicked(value)}
                >
                  <span className='glyphicon glyphicon-trash'/> Obriši
                </Button>
              </Col>
            </div>
            <AddHospital
              addHospitalClicked={this.state.addHospitalClicked}
              setAddHospitalClicked={value => this.setAddHospitalClicked(value)}
            />
            <EditHospital
              editHospitalClicked={this.state.editHospitalClicked}
              setEditHospitalClicked={value => this.setEditHospitalClicked(value)}
            />
            <DeleteHospital
              deleteHospitalClicked={this.state.deleteHospitalClicked}
              setDeleteHospitalClicked={value => this.setDeleteHospitalClicked(value)}
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
    hospitals: state.hospitals,
  };
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Hospitals);
