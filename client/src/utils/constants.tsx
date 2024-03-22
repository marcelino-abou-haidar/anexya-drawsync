export const SOCKET_URL = `${import.meta.env.VITE_BACKEND_SERVER_DOMAIN}:${import.meta.env.VITE_BACKEND_SERVER_PORT}`;

export const WEBSOCKET_EVENTS = {
  ALERT_EVENT: 'alert-event',
  CANVAS_UPDATE: 'canvas-event',
};