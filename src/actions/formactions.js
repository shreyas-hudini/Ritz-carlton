import { SUBMIT_FORM } from './types';

export const submitForm = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});