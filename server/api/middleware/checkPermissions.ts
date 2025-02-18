import { NextFunction, Request, Response } from 'express'

export const checkPermissions = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    {
      const userPermissions = req.auth?.payload.permissions as string[]
      if (userPermissions.includes(requiredPermission)) {
        return next()
      } else {
        res.status(403).json({
          error: 'Incorrect Permissions',
        })
        return
      }
    }
  }
}
