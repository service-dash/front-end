import ReconnectingWebSocket from 'reconnecting-websocket'
import ShareDB from 'sharedb/lib/client'

// Create a WebSocket connection to the ShareDB server
const baseUrl = process.env.NEXT_PUBLIC_WS_BASE_URL
const socket = new ReconnectingWebSocket(`ws://${window.location.hostname}:5500`, [], {
  // ShareDB handles dropped messages, and buffering them while the socket
  // is closed has undefined behavior
  maxEnqueuedMessages: 0
})
// @ts-ignore
const connection = new ShareDB.Connection(socket)

export default connection
