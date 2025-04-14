export const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
  export const validatePhone = (phone) =>
    /^[6-9]\d{9}$/.test(phone);
  