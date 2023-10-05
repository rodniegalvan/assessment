export function handleOtpInputChange(e, index, otp, setOtp) {
  const newOtp = [...otp];
  const numericValue = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
  newOtp[index] = numericValue;
  setOtp(newOtp);

  if (
    index > 0 &&
    numericValue === "" &&
    e.nativeEvent.inputType === "deleteContentBackward"
  ) {
    // Move focus to the previous input field when backspace is pressed and the field is empty
    document.getElementById(`otp-input-${index - 1}`).focus();
  }

  if (index < 5 && numericValue !== "") {
    document.getElementById(`otp-input-${index + 1}`).focus();
  }
}
