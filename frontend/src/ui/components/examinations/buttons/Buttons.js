import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './buttons.css';

const Buttons = props => (
  <section className={styles.section}>
    <Button
      className={styles.button}
      onClick={() => props.setViewExaminationClicked(true)}
    >
      <span className='glyphicon glyphicon-eye-open'/> Pregled
    </Button>
    <Button
      className={styles.button}
      onClick={() => props.setViewReferralClicked(true)}
    >
      <span className='glyphicon glyphicon-eye-open'/> Pregledaj uputnicu
    </Button>
    <Button
      className={styles.button}
      onClick={() => props.setEditClicked(true)}
    >
      <span className='glyphicon glyphicon-edit'/> Uredi
    </Button>
    <Button
      className={styles.button}
      onClick={() => props.setDeleteClicked(true)}
    >
      <span className='glyphicon glyphicon-trash'/> Obriši
    </Button>
  </section>
);

export default Buttons;
