CREATE TABLE IF NOT EXISTS "clients" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"last_name" text,
	"first_name" text,
	"middle_name" text,
	"contact_info" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
