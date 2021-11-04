import invokeAlert from '../functions/invokeAlert';
import { EMPTY_FIELD } from '../errorMsgs';

const validateInsertForm = (data) => {
  const { task, employee, date, status } = data;
  console.log('teste', task, employee, date, status);
  if (!task || !employee || !date || !status) return invokeAlert(EMPTY_FIELD);
  return true;
};

export default validateInsertForm;
