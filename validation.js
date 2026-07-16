
export const validateEmail = (email) => {
  const validateEmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!validateEmailRegex.test(email)) {
    throw new Error("Invalid Email Address");
  }
};


export const validateArrayNotEmpty = (arr) => {
    if(!Array.isArray(arr) || arr.length ===0){
        throw new Error("Array can't be empty");
    }
}