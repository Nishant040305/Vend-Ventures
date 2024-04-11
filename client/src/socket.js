import { io } from 'socket.io-client';

const URL = 'http://localhost:' + (process.env.SPORT || 4000);

export const socket = io(URL, {
    autoConnect: true
});

socket.on('connect', () => {
    console.log('Socket connected');
});

socket.on('disconnect', () => {
    console.log('Socket disconnected');
});