import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://rnyfxrgtvcphjqdjdmre.supabase.co";
const SUPABASE_KEY =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJueWZ4cmd0dmNwaGpxZGpkbXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIwMjg1ODYsImV4cCI6MjAyNzYwNDU4Nn0.BLAAdotNPRYf9FKMCUz-5xxDsNErL8pJu7FDcbovQPA";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
	db: {
		schema: "public",
	},
	auth: {
		persistSession: true,
	},
});
