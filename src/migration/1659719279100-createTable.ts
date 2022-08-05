import {MigrationInterface, QueryRunner} from "typeorm";

export class createTable1659719279100 implements MigrationInterface {
    name = 'createTable1659719279100'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`account\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` tinyint NOT NULL DEFAULT 1, \`cpf\` varchar(14) NOT NULL, \`amount\` decimal(20,2) NOT NULL, UNIQUE INDEX \`index_name\` (\`cpf\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`extracts\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`modifiedDate\` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`active\` tinyint NOT NULL DEFAULT 1, \`type\` enum ('Saque', 'Deposito') NOT NULL, \`amount\` decimal(20,2) NOT NULL, \`account_id\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`extracts\` ADD CONSTRAINT \`FK_44b22d52695044468f91a53c8bb\` FOREIGN KEY (\`account_id\`) REFERENCES \`account\`(\`id\`) ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`extracts\` DROP FOREIGN KEY \`FK_44b22d52695044468f91a53c8bb\``);
        await queryRunner.query(`DROP TABLE \`extracts\``);
        await queryRunner.query(`DROP INDEX \`index_name\` ON \`account\``);
        await queryRunner.query(`DROP TABLE \`account\``);
    }

}
