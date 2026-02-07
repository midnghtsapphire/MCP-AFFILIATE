import { Request, Response } from 'express';
import { Affiliate } from '../db/schema';
export const getAffiliates = async (req: Request, res: Response) => {
  try {
    const affiliates = await Affiliate.find();
    res.json(affiliates);
  } catch (error) {
    res.status(500).send(error);
  }
};
export const addAffiliate = async (req: Request, res: Response) => {
  try {
    const newAffiliate = new Affiliate(req.body);
    await newAffiliate.save();
    res.status(201).send(newAffiliate);
  } catch (error) {
    res.status(500).send(error);
  }
};