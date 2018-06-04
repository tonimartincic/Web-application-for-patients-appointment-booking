import React from 'react';
import {Button} from 'react-bootstrap';
import styles from './buttons.css';
import * as constants from '../../../../constants/values';

const Buttons = props => (
  <section className={styles.section}>
    <Button
      className={styles.button}
      onClick={() => props.setViewReferralClicked(true)}
    >
      <span className='glyphicon glyphicon-eye-open'/> Pregled
        </Button>
        <Choose>
          <When condition={props.userData.type === constants.MEDICAL_SPECIALIST}>
        <Button
          className={styles.button}
          onClick={() => props.setAddClicked(true)}
        >
          <span className='glyphicon glyphicon-plus'/> Dodaj
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
      </When>
    </Choose>
  </section>
);

export default Buttons;
