import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableUser1729289846259 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(`alter table public.user add unique(email)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query(``);
    }

}
