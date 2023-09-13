let socket;
let notifications = []; // 알림 메시지들을 저장할 배열

fetch(`http://127.0.0.1:8000/user/me/`, {
  method: "GET",
  credentials: "include",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    // 웹소켓 연결 url
    const socket = new WebSocket(
      `ws://127.0.0.1:8000/ws/notifications/${data.results.User.id}/`
    );

    socket.addEventListener("open", (event) => {
      console.log("WebSocket connection established.");
    });

    socket.addEventListener("message", (event) => {
      // 들어오는 WebSocket messages 관리 (알림)
      const notification = JSON.parse(event.data);
      console.log("Received notification:", notification.message);

      // 받은 알림 메시지를 배열에 추가
      notifications.push(notification.message);
      // 만약 알림이 세 개 이상이라면, 가장 오래된 것부터 제거
      if (notifications.length > 2) {
        notifications.shift();
      }

      // 기존 내용 초기화
      const notificationList = document.getElementById("notification-list");
      notificationList.innerHTML = "";
      // 최신 순으로 반복하여 li 요소 추가
      for (let i = notifications.length - 1; i >= 0; i--) {
        const listItem = document.createElement("li");
        listItem.textContent = notifications[i];
        notificationList.appendChild(listItem);
      }
    });

    socket.addEventListener("close", (event) => {
      console.log("WebSocket connection closed.", event);
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// 데이터를 websocket 서버로 보내는 함수(채팅 기능)
// function sendWebSocketData(data) {
//   if (socket && socket.readyState === WebSocket.OPEN) {
//     socket.send(JSON.stringify(data));
//   } else {
//     console.error("WebSocket connection is not open.");
//   }
// }

// export { sendWebSocketData };
