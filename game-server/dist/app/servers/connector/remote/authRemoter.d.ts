import { Application } from 'pinus';
export default function (app: Application): authRemoter;
export declare class authRemoter {
    private app;
    constructor(app: Application);
    /**
     *
     * @param username
     * @param password
     */
    auth(username: string, password: string): Promise<boolean>;
}
