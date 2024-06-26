import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables, put them into the .env.local!')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)


// Here we currently simply export the supabase client and will have to import supabase into any page which uses, could create a context API or custom hook to do this as well

