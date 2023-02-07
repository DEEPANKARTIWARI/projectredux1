import React from "react";

function validation(type, data) {
  switch (type) {
    case "email":
      const emailpattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (data === "")
        return {
          error: true,
          errorinfo: "This Field Cannot be Empty",
          finalsubmit: true,
        };
      else if (!data.match(emailpattern))
        return {
          error: true,
          errorinfo: "Invalid Pattern",
          finalsubmit: true,
        };
      else
        return {
          error: false,
          errorinfo: "",
          finalsubmit: false,
        };
    case "password":
      const passwordpattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (data === "")
        return {
          error: true,
          errorinfo: "This Field Cannot be Empty",
          finalsubmit: true,
        };
      else if (!data.match(passwordpattern))
        if (data.length < 8) {
          return {
            error: true,
            errorinfo: "Minimum 8 characters required",
            finalsubmit: true,
          };
        } else if (data.length > 16) {
          return {
            error: true,
            errorinfo: "Maximum 16 characters required",
            finalsubmit: true,
          };
        } else
          return {
            error: true,
            errorinfo: "Invalid Pattern",
            finalsubmit: true,
          };
      else
        return {
          error: false,
          errorinfo: "",
          finalsubmit: false,
        };
    case "name":
      const namepattern = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
      if (data === "")
        return {
          error: true,
          errorinfo: "This Field Cannot be Empty",
          finalsubmit: true,
        };
      else if (data.match(/\s/)) {
        return {
          error: true,
          errorinfo: " blankspaces not allowed",
          finalsubmit: true,
        };
      } else if (data.match(/\d+$/g)) {
        return {
          error: true,
          errorinfo: "Numerical not allowed",
          finalsubmit: true,
        };
      } else if (data.match(/[`~,!@#?$.<>;':"\/\[\]\|{}()-=_+]/g))
        return {
          error: true,
          errorinfo: "Special characters not allowed",
          finalsubmit: true,
        };
      else if (data.length < 3) {
        return {
          error: true,
          errorinfo: "Minimum 3 characters required",
          finalsubmit: true,
        };
      } else if (data.length > 20) {
        return {
          error: true,
          errorinfo: "Maximum 20 characters required",
          finalsubmit: true,
        };
      } else
        return {
          error: false,
          errorinfo: "",
          finalsubmit: false,
        };
    case "Miscellaneous":
      console.log(data);
      if (data.type == "") {
        alert("Please Select The Type");
        return false;
      } else if (data.type == "") {
        alert("Please Select The Plan");
        return false;
      } else {
        return true;
      }
    case "movie":
      if (data === "")
        return {
          error: true,
          errorinfo: "This Field Cannot be Empty",
          finalsubmit: true,
        };
      else if (data.match(/[`~,!@#?$<>;':"\/\[\]\|{}()=_+]/g))
        return {
          error: true,
          errorinfo: "Special characters not allowed",
          finalsubmit: true,
        };
      else if (data.length < 3) {
        return {
          error: true,
          errorinfo: "Minimum 3 characters required",
          finalsubmit: true,
        };
      } else if (data.length > 20) {
        return {
          error: true,
          errorinfo: "Maximum 20 characters required",
          finalsubmit: true,
        };
      } else
        return {
          error: false,
          errorinfo: "",
          finalsubmit: false,
        };
    case "price":
      if (data === "")
        return {
          error: true,
          errorinfo: "This Field Cannot be Empty yooo",
          finalsubmit: true,
        };
      else if (data < 1 || data > 10000) {
        return {
          error: true,
          errorinfo: "Price should be in range of 1-100",
          finalsubmit: true,
        };
      } else
        return {
          error: false,
          errorinfo: "",
          finalsubmit: false,
        };
  }
}

export default validation;
