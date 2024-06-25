import { expressjwt as jwt } from "express-jwt";
import { config } from "../config";

const authCheck = jwt({
    secret: config.supabase.secretJwt,
    algorithms: ['HS256'],
    issuer: config.supabase.issuer
});

export default authCheck