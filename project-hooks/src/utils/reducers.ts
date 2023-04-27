export const emailReducer = (
  state: { value: string; isValid: boolean },
  action: { type: "USER_INPUT" | "INPUT_BLUR"; val: string }
) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.includes("@"),
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      ...state,
      isValid: state.value.includes("@"),
    };
  }
  return {
    value: "",
    isValid: false,
  };
};

export const passwordReducer = (
  state: { value: string; isValid: boolean },
  action: { type: "USER_INPUT" | "INPUT_BLUR"; val: string }
) => {
  if (action.type === "USER_INPUT") {
    return {
      value: action.val,
      isValid: action.val.trim().length > 6,
    };
  }
  if (action.type === "INPUT_BLUR") {
    return {
      value: state.value,
      isValid: state.value.trim().length > 6,
    };
  }
  return {
    value: "",
    isValid: false,
  };
};
