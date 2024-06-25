import Joi from 'joi'
import dotenv from 'dotenv'
dotenv.config()

// Define the schema
const envVarsSchema = Joi.object({
  PORT: Joi.number().required(),
  NODE_ENV: Joi.string().valid('development', 'production', 'test').required(),
  MAIN_DATABASE_URL: Joi.string().uri().required(),
  SUPABASE_ISSUER: Joi.string().uri().required(),
  SUPABASE_JWT_SECRET: Joi.string().required(),
}).unknown(true) // Allows for other non-specified env variables

// Validate the environment variables
const { value: validatedEnvVars, error } = envVarsSchema
  .prefs({ errors: { label: 'key' } })
  .validate(process.env)

if (error) {
  throw new Error(`Config validation error: ${error.message}`)
}

console.log('All required configurations are present.')

// Export validated PORT environment variable
export const config = {
  port: validatedEnvVars.PORT,
  env: validatedEnvVars.NODE_ENV,
  database: {
    mainDatabaseUrl: validatedEnvVars.MAIN_DATABASE_URL,
  },
  supabase: {
    issuer: validatedEnvVars.SUPABASE_ISSUER,
    jwtSecret: validatedEnvVars.SUPABASE_JWT_SECRET,
  },
}
