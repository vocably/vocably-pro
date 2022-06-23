export const getSub = async (username) => {
  const getUser = `aws cognito-idp admin-get-user --user-pool-id ${process.env.USER_POOL_ID} --username ${username} --region ${process.env.AWS_REGION}`;

  const user = JSON.parse(await $([getUser]));

  const subAttribute = user.UserAttributes.find((a) => a.Name === 'sub');

  if (!subAttribute) {
    throw Error("Sub attribute can't be found for user", user);
  }

  return subAttribute.Value;
};
