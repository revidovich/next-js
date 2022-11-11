import { FC } from 'react';
import Heading from "./Heading";
import { userType } from "../types";

type UserInfoProps = {
  user: userType,
}

const UserInfo:FC<UserInfoProps> = ({ user }) => {
  const { name, email, address } = user || {};
  const { street, suite, city, zipcode } = address || {};

  if (!user) {
    return <Heading tag='h2' text='No info' />
  }
  return (
    <>
      <Heading text={name} />
      <div>
        <strong>Email:</strong>
        {email}
      </div>
      <div>
        <strong>Address:</strong>
        {` ${street}, ${suite} ${city} ${zipcode}`}
      </div>
    </>
  );
};

export default UserInfo;