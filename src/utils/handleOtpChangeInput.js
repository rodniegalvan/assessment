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
    // Always move focus to the previous input field when backspace is pressed
    document.getElementById(`otp-input-${index - 1}`).focus();
  } else if (index < 5 && numericValue !== "") {
    document.getElementById(`otp-input-${index + 1}`).focus();
  }
}

export function handleOtpInputKeyDown(e, index, otp) {
  if (e.key === "Backspace" && index > 0 && !otp[index]) {
    e.preventDefault(); // Prevent the default backspace behavior (deleting the character)
    // Move focus to the previous input field
    document.getElementById(`otp-input-${index - 1}`).focus();
  }
}
