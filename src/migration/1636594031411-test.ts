import { MigrationInterface, QueryRunner } from 'typeorm';

export class test1636594031411 implements MigrationInterface {
  name = 'test1636594031411';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`photo\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(500) NOT NULL, \`description\` text NOT NULL, \`filename\` varchar(255) NOT NULL, \`views\` int NOT NULL, \`isPublished\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`photo\``);
  }
}
