export type adressType = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
};

export type userType = {
  name: string,
  id: string,
  email: string,
  address: adressType,
};

export type postType = {
  title: string,
  body: string,
};

export type socialType = {
  id: string,
  img: string,
  path: string,
};