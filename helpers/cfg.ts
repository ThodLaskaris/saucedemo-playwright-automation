import * as dotenv from 'dotenv';

dotenv.config();

export const cfg = {
    baseURL: process.env.BASELINE_URL || 'https://www.saucedemo.com/',
    headless: process.env.HEADLESS === 'true'
    
};