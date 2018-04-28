export const createDateForDatePickerFromDateFromBackend = (date) => {
  if (date === null || date === undefined) {
    return null;
  }

  return `${date.substring(6, 10)}-${date.substring(3, 5)}-${date.substring(0, 2)}`;
};

export const constructDateFromDatePickerForBackend = (dateFromDatePicker) => {
  if (dateFromDatePicker === null || dateFromDatePicker === undefined) {
    return null;
  }

  return `${dateFromDatePicker.substring(8, 10)}-${dateFromDatePicker.substring(5, 7)}-${dateFromDatePicker.substring(0, 4)}`;
};
