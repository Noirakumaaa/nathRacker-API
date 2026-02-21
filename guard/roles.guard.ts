import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common'
import { Reflector } from '@nestjs/core'
import { Role } from './../enums/roles.enum.js'

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    // Get roles defined by @Roles() decorator
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass()
    ])
    if (!requiredRoles) return true

    // Get the current user from the request
    const { user } = context.switchToHttp().getRequest()
    console.log('User in RolesGuard:', user) // Log the user for debugging

    // If no user or role does not match, block access
    if (!user || !requiredRoles.includes(user.role)) {
      throw new ForbiddenException('Access denied')
    }

    // Role matches → allow access
    return true
  }
}
