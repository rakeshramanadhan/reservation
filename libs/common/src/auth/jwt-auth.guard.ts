import {
  Injectable,
  CanActivate,
  ExecutionContext,
  Inject,
} from '@nestjs/common';
import { Observable, tap, map } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { AUTH_SERVICE } from '../constants';
import { UserDto } from '../dto';
@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private readonly authClient: ClientProxy) {}
  CanActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const jwt =
      context.switchToHttp().getRequest().cookies?.Authentication ||
      context.switchToHttp().getRequest().headers?.authentication;
    if (!jwt) {
      return false;
    }
    return this.authClient
      .send<UserDto>('authenticate', {
        Authentication: jwt,
      })
      .pipe(
        tap((res) => {
          context.switchToHttp().getRequest().user = res;
        }),
        map(()=>true);
      );
  }
}
