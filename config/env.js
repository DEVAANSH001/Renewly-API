import { config } from "dotenv";

config({path: `.env.${process.env.NODE_ENV || 'development'}`});

export const {PORT , NODE_ENV, JWT_SECRET , JWT_EXPIRES_IN , DB_URL, ARCJET_API_KEY , ARCJET_ENV ,QSTASH_TOKEN , QSTASH_CURRENT_SIGNING_KEY , QSTASH_NEXT_SIGNING_KEY, EMAIL_PASSWORD ,QSTASH_URL , SERVER_URL} = process.env;