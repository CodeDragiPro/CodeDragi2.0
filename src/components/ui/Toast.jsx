import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({ type, message }) => {
  const showToast = () => {
    switch (type) {
      case 'success':
        toast.success(message);
        break;
      case 'error':
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return (
    <div>
      {showToast()}
    </div>
  );
};

export default Toast;
