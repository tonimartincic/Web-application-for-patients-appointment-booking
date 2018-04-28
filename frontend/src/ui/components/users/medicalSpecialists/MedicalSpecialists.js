import React from 'react';
import {connect} from 'react-redux';
import {Col, Grid, Row, Table} from 'react-bootstrap';
import NavigationBar from '../../navigationBar/NavigationBar';
import Footer from '../../footer/Footer';
import AddMedicalSpecialist from './add/AddMedicalSpecialist';
import EditMedicalSpecialist from './edit/EditMedicalSpecialist';
import DeleteMedicalSpecialist from './delete/DeleteMedicalSpecialist';
import AddEditDeleteButtons from '../../buttons/addEditDeleteButtons/AddEditDeleteButtons';
import * as styles from './medicalSpecialists.css';

class MedicalSpecialists extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      addMedicalSpecialistClicked: false,
      editMedicalSpecialistClicked: false,
      deleteMedicalSpecialistClicked: false,
    };

    this.setAddMedicalSpecialistClicked = this.setAddMedicalSpecialistClicked.bind(this);
    this.setEditMedicalSpecialistClicked = this.setEditMedicalSpecialistClicked.bind(this);
    this.setDeleteMedicalSpecialistClicked = this.setDeleteMedicalSpecialistClicked.bind(this);
  }

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

  render() {
    return (
      <section>
        <NavigationBar/>
        <Grid>
          <AddMedicalSpecialist
            addMedicalSpecialistClicked={this.state.addMedicalSpecialistClicked}
            setAddMedicalSpecialistClicked={value => this.setAddMedicalSpecialistClicked(value)}
          />
          <EditMedicalSpecialist
            editMedicalSpecialistClicked={this.state.editMedicalSpecialistClicked}
            setEditMedicalSpecialistClicked={value => this.setEditMedicalSpecialistClicked(value)}
          />
          <DeleteMedicalSpecialist
            deleteMedicalSpecialistClicked={this.state.deleteMedicalSpecialistClicked}
            setDeleteMedicalSpecialistClicked={value => this.setDeleteMedicalSpecialistClicked(value)}
          />
          <Row>
            <Col md={12}>
              <h2 className={styles.h2}>Liječnici specijalisti</h2>
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
          <Row>
            <Col md={8} mdOffset={3}>
              <AddEditDeleteButtons
                setAddClicked={value => this.setAddMedicalSpecialistClicked(value)}
                setEditClicked={value => this.setEditMedicalSpecialistClicked(value)}
                setDeleteClicked={value => this.setDeleteMedicalSpecialistClicked(value)}
              />
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
