import PropTypes from 'prop-types';

const NotificationMesage = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
};

NotificationMesage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default NotificationMesage;
