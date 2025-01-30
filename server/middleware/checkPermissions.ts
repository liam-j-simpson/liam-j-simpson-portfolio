import { NextFunction, Request, Response } from 'express'

export const checkPermissions = (requiredPermission: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const userPermissions = req.auth?.payload.permissions || []
    if (userPermissions.includes(requiredPermission)) {
      next()
    } else {
      res.status(403).json({
        error: 'Incorrect Permissions',
      })
      return
    }
  }
}
