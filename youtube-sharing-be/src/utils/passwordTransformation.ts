import * as bcrypt from 'bcryptjs';

export const transformPassword = async (password: string) => {
  const saltOrRounds = 10;
  const hash = await bcrypt.hash(password, saltOrRounds);
  return hash;
};

export const isMatchPassword = async ({
  password,
  hash,
}: {
  password: string;
  hash: string;
}) => {
  const isMatch = await bcrypt.compare(password, hash);
  return isMatch;
};
