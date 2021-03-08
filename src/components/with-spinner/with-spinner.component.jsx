import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.styles";

// A High Order Component (HOC) which uses a spinner loading animation if 'isLoading' is true, otherwise show the arguments component.
const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
