import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { Role } from '../enums/role.enum';

@Injectable()
export class ManufacturerRbacMiddleware implements NestMiddleware {
  use(req: Request & { user?: any }, res: Response, next: NextFunction) {
    // JwtStrategy.validate() returns: { id, loginId, role }
    const role = req.user?.role;

    if (role !== Role.MANUFACTURER) {
      return res.status(403).json({ message: 'Forbidden' });
    }

    return next();
  }
}
