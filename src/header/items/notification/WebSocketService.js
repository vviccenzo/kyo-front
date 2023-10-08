const WebSocketService = {
  socket: null,

  connect: () => {
    const socket = new WebSocket("ws://localhost:8080/ws");

    socket.onopen = () => {
      console.log("Conexão WebSocket estabelecida.");
    };

    socket.onmessage = (event) => {
      console.log(event);
      const message = JSON.parse(event.data);
      console.log('Mensagem recebida:', message);
    };

    socket.onclose = () => {
      console.log("Conexão WebSocket fechada.");
    };

    WebSocketService.socket = socket;
  },

  send: (message) => {
    if (WebSocketService.socket && WebSocketService.socket.readyState === WebSocket.OPEN) {
      WebSocketService.socket.send(message);
    }
  },

  close: () => {
    if (WebSocketService.socket) {
      WebSocketService.socket.close();
    }
  },
};

export default WebSocketService;
