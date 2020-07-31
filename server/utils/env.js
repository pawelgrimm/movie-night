// This file forces node to run this code before importing other modules that
// depend on env variables
import dotenv from "dotenv";

dotenv.config({ path: ".env.development", silent: true });
