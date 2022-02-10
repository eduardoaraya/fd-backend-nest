import { UserInterface } from '../../modules/user/interfaces/user.interface';

export const userFaker = async (
  number: number,
): Promise<{ table: string; data: UserInterface[] }> => ({
  table: 'public.user',
  data: Array.from({ length: number }).map(
    (_, n): UserInterface =>
      ({
        email: `'test${n + new Date().getTime()}@mail.com'`,
        name: `'Mr. Test-${n + new Date().getTime()}'`,
        password: `'${n + new Date().getTime()}'`,
      } as UserInterface),
  ),
});
