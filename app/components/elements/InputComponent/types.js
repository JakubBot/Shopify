const getType = (label) => {
  const emailPattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  switch (label) {
    case 'email':
      return {
        isEmail: true,
        pattern: emailPattern,
      };
    case 'message':
      return {
        isMessage: true,
        min: 20,
        max: 100,
      };
    case 'name':
    case 'address':
    case 'city':
    case 'postalCode':
      return {
        isShippingAddress: true,
        min: 4,
        max: 16,
      };
    case 'password':
      return {
        isPassword: true,
        min: 5,
        max: 14,
      };
  }
};

export default getType;
