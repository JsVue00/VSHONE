import { t } from '@/libraries/vue-i18n';
enum ValidateType {
  NormalField,
  EmailField,
  AgeField,
  MinMaxField
}

type ValidationObject =
  | { message: string; required: boolean; trigger: string }
  | { required: boolean; validator: any; trigger: string };

function createValidationObject(type: ValidateType): ValidationObject {
  switch (type) {
    case ValidateType.NormalField:
      return { message: `${t('required')}`, required: true, trigger: 'blur' };
    case ValidateType.AgeField:
      return { required: true, validator: checkAge, trigger: 'blur' };
    default:
      throw new Error('Invalid validation type');
  }
}
export const normalValidate = createValidationObject(ValidateType.NormalField);

export const verifyIntegerMinMax = (min: number, max: number) => {
  const verify = (rule: any, value: any, callback: any) => {
    if (value === undefined || value === null || value === '') {
      callback(new Error(`Please input a value`));
    }
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || !Number.isInteger(parsedValue)) {
      callback(new Error('Please enter an integer number'));
    } else if (parsedValue > max) {
      callback(new Error(`The value must be smaller than or equal to ${max}`));
    } else if (parsedValue < min) {
      callback(new Error(`The value must be greater than or equal to ${min}`));
    } else {
      callback();
    }
  };
  return verify;
};

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'));
  }
  if (!Number.isInteger(value)) {
    callback(new Error('Please input digits'));
  } else {
    if (value < 18) {
      callback(new Error('Age must be greater than 18'));
    } else {
      callback();
    }
  }
};
export const passwordValidation = (min: number, max: number) => {
  const verify = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback(new Error(`Please provide a value for the password.`));
      return;
    }
    if (value.length > max) {
      callback(new Error(`The password must be ${max} characters or fewer.`));
    } else if (value.length < min) {
      callback(new Error(`The password must be at least ${min} characters long.`));
    } else {
      callback();
    }
  };
  return verify;
};
export const passwordConfirmation = (password: string) => {
  const verify = (rule: any, value: any, callback: any) => {
    if (!value) {
      callback(new Error(`Please provide a value for the confirm password.`));
      return;
    }
    if (value !== password) {
      callback(new Error(`The confirm password must match the original password.`));
    } else {
      callback();
    }
  };
  return verify;
};
