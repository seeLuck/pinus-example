import { Application, FrontendSession } from 'pinus';
export default function (app: Application): Handler;
export declare class Handler {
    private app;
    constructor(app: Application);
    /**
     * New client entry.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    entry(msg: any, session: FrontendSession): Promise<{
        code: number;
        msg: string;
    }>;
    /**
     * Publish route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    publish(msg: any, session: FrontendSession): Promise<{
        topic: string;
        payload: string;
    }>;
    /**
     * Subscribe route for mqtt connector.
     *
     * @param  {Object}   msg     request message
     * @param  {Object}   session current session object
     * @param  {Function} next    next step callback
     * @return {Void}
     */
    subscribe(msg: any, session: FrontendSession): Promise<{
        topic: string;
        payload: string;
    }>;
}
