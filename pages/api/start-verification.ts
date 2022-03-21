import Everify from 'everify';
import { getUser } from '../../utils/getUser';

const everify = new Everify(process.env.EVERIFY_API_KEY);

if (process.env.DEV_MODE) {
  everify.sandbox();
}

export default async function(req, res)
{
  const { username, password } = req.body;
  const user = await getUser(username, password);
  
  if (!user) {
    return res.status(403).send('Invalid credentials.');
  }
  await everify.startVerification({
    phoneNumber: user.phoneNumber,
    method: 'SMS',
  });
  return res.status(200).send('Success.');
}