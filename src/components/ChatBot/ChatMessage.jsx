import ChatbotIcon from "./ChatbotIcon";
import InitialMessage from "./InitialMessage";

const ChatMessage = ({ chat, isFirstMessage }) => {
  if (isFirstMessage && chat.role === "assistant") {
    return <InitialMessage />;
  }

  return (
    !chat.hideInChat && (
      <div className={`message ${chat.role === "assistant" ? "bot" : "user"}-message ${chat.isError ? "error" : ""}`}>
        {chat.role === "assistant" && <ChatbotIcon />}
        <div className="message-text">{chat.text}</div>
      </div>
    )
  );
};

export default ChatMessage;