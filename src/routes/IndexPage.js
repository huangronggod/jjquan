import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import IndexPageView from '../components/IndexPageView'
function IndexPage() {
  return (
    <div className={styles.normal}>
      <IndexPageView />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
