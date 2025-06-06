import React from 'react'

const isValidate = (email,password) => {
    const isEmail=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPassword=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isEmail) return "Email ID is not valid";
    if(!isPassword) return "Password is not valid";
  return null;
}

export default isValidate