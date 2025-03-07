import { config } from 'dotenv';
import { join } from 'path';
config({ path: join(process.cwd(), '.env') });

const hrm = {
    hrmUrl: process.env.HRM_URL,

};

const credentials = {
    userName: process.env.USERS_NAME,
    usersPassword: process.env.USERS_PASSWORD,
    invaidUsername: process.env.INVALIDUSER_NAME,
    invalidPassword: process.env.INVALID_PASSWORD,
};



const ENV_CONFIG = {
    hrm,
    credentials,
   
};

export default ENV_CONFIG;