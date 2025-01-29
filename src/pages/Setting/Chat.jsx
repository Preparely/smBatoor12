import { useState } from "react";
import { Box, TextField, Button, Typography, Avatar, Paper, List, ListItem, ListItemAvatar, ListItemText, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Really appreciate the insights. Question, you often cite reference books for deeper discussions." },
  ]);
  const [input, setInput] = useState("");

  const predefinedResponses = {
    "hi": "Hi!",
    "hello": "Hello!",
    "how are you": "I am good, but I don't have feelings because I am a bot.",
    "who are you": "I am Batoor, your chatbot assistant.",
    "help": "How can I assist you today?"
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { sender: "user", text: input }];
    setMessages(newMessages);
    setInput("");

    setTimeout(() => {
      const botResponse = predefinedResponses[input.toLowerCase()] || "Sorry, I don't understand that.";
      setMessages(prevMessages => [...prevMessages, { sender: "bot", text: botResponse }]);
    }, 1000);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "#FAF5EF" }}>
      {/* Sidebar */}
      <Paper sx={{ width: 280, p: 2, borderRight: "1px solid #ddd" }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Chat</Typography>
        <List>
          {[
            { name: "Siqi Chen", message: "I just shared a link about this conversation", time: "3h" },
            { name: "Sarah Huo", message: "When do you plan to deliver the project?", time: "4h" },
            { name: "Alex Sims", message: "Let's go to the Italian restaurant", time: "5h" },
          ].map((user, index) => (
            <ListItem key={index} button>
              <ListItemAvatar>
                <Avatar>{user.name[0]}</Avatar>
              </ListItemAvatar>
              <ListItemText primary={user.name} secondary={user.message} />
              <Typography variant="caption" sx={{ color: "gray" }}>{user.time}</Typography>
            </ListItem>
          ))}
        </List>
      </Paper>

      {/* Chat Window */}
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2 }}>
        {/* Top Search Bar */}
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          <Typography variant="h5">Siqi Chen</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <Avatar sx={{ ml: 1 }}>SC</Avatar>
          </Box>
        </Box>

        {/* Chat Messages */}
        <Paper sx={{ flex: 1, p: 2, overflowY: "auto", borderRadius: 2 }}>
          {messages.map((msg, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: msg.sender === "user" ? "flex-end" : "flex-start",
                mb: 1,
              }}
            >
              {msg.sender === "bot" && <Avatar sx={{ mr: 1 }}>B</Avatar>}
              <Paper
                sx={{
                  p: 1.5,
                  bgcolor: msg.sender === "user" ? "#FFC78E" : "#EDEDED",
                  borderRadius: 2,
                  maxWidth: "70%",
                }}
              >
                <Typography>{msg.text}</Typography>
              </Paper>
              {msg.sender === "user" && <Avatar sx={{ ml: 1 }}>U</Avatar>}
            </Box>
          ))}
        </Paper>

        {/* Input Field */}
        <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
          <TextField
            fullWidth
            placeholder="Type"
            variant="outlined"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            sx={{ borderRadius: 2, bgcolor: "#F7F7F7" }}
          />
          <Button onClick={sendMessage} variant="contained" sx={{ ml: 1, bgcolor: "#FF8E3C" }}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
