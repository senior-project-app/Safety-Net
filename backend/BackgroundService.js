import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from 'expo-background-fetch';
import {supabase} from "./database";
import * as Notifications from "expo-notifications";
import dayjs from "dayjs";


async function schedulePushNotification(name, time) {
    const start = dayjs(time).utc(true);
    const formattedTime = start.fromNow(true);

    await Notifications.scheduleNotificationAsync({
        content: {
            title: "SafetyNet",
            body: `${name} has not checked in since time`,
            data: { data: 'goes here' },
        },
        trigger: { seconds: 2 },
    });
}

export class BackgroundService {
    constructor(session) {
        this.session = Object.create(session);
        this.user = this.session.user.user_metadata;

        if(this.user.role === 'supervisor') {
            TaskManager.defineTask(this.user.role, async () => {
                await supabase
                    .rpc('checkin_violations', { invite_code: this.user.code })
                    .then((res) => {
                        for(let user in res.data) {
                            schedulePushNotification(user.tname);
                        }
                    });
            });

        } else if(this.user.role ==='supervised') {

        }



    }

    // register the task
    async registerBackgroundFetchAsync() {
        // console.log(`register ${this.user.role}`);
        return BackgroundFetch.registerTaskAsync(this.user.role, {
            minimumInterval: 10, // seconds
            stopOnTerminate: false, // android only,
            startOnBoot: true, // android only
        });
    }

    // Unregister tasks by specifying the task name
    async unregisterBackgroundFetchAsync() {
        // console.log(`unregister ${this.user.role}`);
        return BackgroundFetch.unregisterTaskAsync(this.user.role);
    }
}



