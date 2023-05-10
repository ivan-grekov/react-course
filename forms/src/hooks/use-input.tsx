import { useReducer } from "react";

interface IState {
  value?: string;
  isTouched: boolean;
}

const initialInputState: IState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (
  state: IState,
  action: { type: "INPUT_CHANGE" | "INPUT_BLUR" | "RESET"; value?: string }
) => {
  if (action.type === "INPUT_CHANGE") {
    return {
      ...state,
      value: action.value,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
  return initialInputState;
};

const useInput = (validateValue: (value?: string) => boolean) => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const enteredValueIsValid = validateValue(inputState.value);
  const hasError = !enteredValueIsValid && inputState.isTouched;

  const valueChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({ type: "INPUT_CHANGE", value: e.target.value });
  };

  const inputBlurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({ type: "INPUT_BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    isValid: enteredValueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
