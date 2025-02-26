// Type definitions for node-cron 2.0
// Project: https://github.com/node-cron/node-cron, https://github.com/merencia/node-cron
// Definitions by: morsic <https://github.com/maximelkin>,
//                 burtek <https://github.com/burtek>,
//                 Richard Honor <https://github.com/RMHonor>
//                 Ata Berk YILMAZ <https://github.com/ataberkylmz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Timezone } from 'tz-offset';

export function schedule(cronExpression: string, func: () => void | Promise<void>, options?: ScheduleOptions): ScheduledTask;

export function validate(cronExpression: string): boolean;

export interface ScheduledTask {
    start: () => this;
    stop: () => this;
    destroy: () => void;
    getStatus: () => string;
}

export interface ScheduleOptions {
    /**
     * A boolean to set if the created task is scheduled.
     *
     * Defaults to `true`
     */
    scheduled?: boolean;
    /**
     * The timezone that is used for job scheduling
     */
    timezone?: Timezone;
}
