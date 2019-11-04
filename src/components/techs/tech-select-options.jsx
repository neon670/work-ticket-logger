import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTechnicians } from '../../redux/technicians/tech-actions';

const TechSelectOptions = ({ getTechnicians, technician: { technicians, loading } }) => {
  useEffect(() => {
    getTechnicians();
    // eslint-disable-next-line
  }, []);

  return (
    !loading &&
    technicians !== null && technicians.map(t => (
      <option key={t.id} value={`${t.firstName} ${t.lastName}`}>
        {t.firstName} {t.lastName}
      </option>
    ))
  );
};

TechSelectOptions.propTypes = {
  technician: PropTypes.object.isRequired,
  getTechnicians: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  technician: state.technician
});

export default connect(mapStateToProps,{ getTechnicians })(TechSelectOptions);