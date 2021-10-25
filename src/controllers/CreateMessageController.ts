import { Request, Response } from 'express';
import { CreateMessageService } from '../services/CreateMessageService';

class CreateMessageController {
  constructor() {}

  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const { message } = req.body;

    const service = new CreateMessageService();

    try {
      const result = await service.execute(message, user_id);

      return res.json(result);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
}

export { CreateMessageController };
