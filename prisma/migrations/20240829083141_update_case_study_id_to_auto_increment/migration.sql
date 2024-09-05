-- AlterTable
CREATE SEQUENCE casestudy_id_seq;
ALTER TABLE "CaseStudy" ALTER COLUMN "id" SET DEFAULT nextval('casestudy_id_seq'),
ADD CONSTRAINT "CaseStudy_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE casestudy_id_seq OWNED BY "CaseStudy"."id";
