import { MigrationInterface, QueryRunner } from 'typeorm';
import { userFaker } from '../seeds/user.faker';

export class createFakeUser1644162234390 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const { table, data } = await userFaker(32);
    await Promise.all(
      data.map((item) =>
        queryRunner.query(`
          INSERT INTO ${table} (name, email, password) VALUES (${Object.values(
          item,
        ).join(',')})
        `),
      ),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const { table } = await userFaker(0);
    await queryRunner.query(`
      DELETE FROM ${table};
    `);
  }
}
