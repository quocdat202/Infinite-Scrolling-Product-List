import React, { useEffect, useState } from 'react';
import { notification } from 'antd';
/* eslint-disable no-unused-vars */
import { message } from "antd";
// import * as errorCts from "../constants/ui/error";
type NotificationType = 'success' | 'info' | 'warning' | 'error';
// const api = notification.useNotification()[0];

const success = (content: string, duration = 3000) => {
    message.config({
        top: 30,
        duration: duration / 1000,
    });
    message.success(content);
};

const danger = (content: string, duration = 3000) => {
    message.config({
        top: 30,
        duration: duration / 1000,
    });
    message.error(content);
};

const warning = (content: string, duration = 3000) => {
    message.config({
        top: 30,
        duration: duration / 1000,
    });
    message.warning(content);
};

// const notifications = (type: NotificationType, description: any, duration = 3000) => {
//     notification.config({
//         top: 30,
//         duration: duration / 1000,
//         message: type,
//         description: description
//     });
//     switch (type) {
//         case 'success':
//             return notification.success(description);
//         case 'error':
//             return notification.error(description);
//         default:
//             return notification.warning(description);
//     }
// }


// export const Notification = (type: NotificationType, description: any, time = 3000) => {
//     return notifications(type, description, time);
// }

export const toastMessage = (message: string, type: string, time = 3000) => {
    if (type === "success") {
        return success(message, time);
    }

    if (type === "warning") {
        return warning(message, time);
    }
    return danger(message, time);
};
