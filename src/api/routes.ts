import { Express } from 'express';
import { getAffiliates, addAffiliate } from '../services/affiliate.service';
export function affiliateRoutes(app: Express) {
  app.get('/affiliates', getAffiliates);
  app.post('/affiliates', addAffiliate);
}