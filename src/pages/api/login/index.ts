import dbConnect from '../../../utils/dbConnect';
import { User } from '../../../server/models';
import { NextApiResponse, NextApiRequest } from 'next';

dbConnect();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false, error });
      }
      return;
    case 'POST':
      try {
        const user = await User.create(req.body);
        res.status(201).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      return;
    default:
      res.status(400).json({ success: false });
      return;
  }
};
