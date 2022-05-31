export const inputValidation = (input:string) => {
  const regex = /^[a-zA-Z ]{2,30}$/;
  return regex.test(input);
};