import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1681114187718 implements MigrationInterface {
    name = 'InitialMigration1681114187718'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(200) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying(11) NOT NULL, "password" character varying(120) NOT NULL, "telephone" character varying(12) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "description" character varying(300) NOT NULL, "image_url" character varying(300) NOT NULL, "isSeller" boolean NOT NULL DEFAULT false, "birthdate" TIMESTAMP NOT NULL, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}