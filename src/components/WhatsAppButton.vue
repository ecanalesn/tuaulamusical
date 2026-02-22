<template>
  <div class="whatsapp-widget">
    <!-- Chat Bubble -->
    <div v-if="showChat" class="chat-bubble">
      <div class="chat-header">
        <div class="chat-info">
          <i class="fab fa-whatsapp"></i>
          <span>WhatsApp</span>
        </div>
        <button class="close-btn" @click="closeChat">×</button>
      </div>
      <div class="chat-message">
        <p>Hola 👋, soy Estefanía, ¿En qué puedo ayudarte?</p>
      </div>
      <button class="open-chat-btn" @click="openWhatsApp">
        Abrir chat
        <i class="fas fa-paper-plane"></i>
      </button>
    </div>
    
    <!-- WhatsApp Button -->
    <button class="btn-wa" @click="toggleChat">
      <i class="fab fa-whatsapp" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: 'WhatsAppButton',
  data() {
    return {
      showChat: false
    }
  },
  methods: {
    toggleChat() {
      this.showChat = !this.showChat
    },
    closeChat() {
      this.showChat = false
    },
    openWhatsApp() {
      const phoneNumber = '34616471534'
      const message = 'Hola, me interesa conocer más sobre las clases de música.'
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    }
  }
}
</script>

<style scoped>
.whatsapp-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.btn-wa {
  width: 60px;
  height: 60px;
  background: #25D366;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 30px;
  text-decoration: none;
  box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  transition: all 0.3s ease;
  animation: pulse 2s infinite;
  cursor: pointer;
  outline: none;
}

.chat-bubble {
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  background: white;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.chat-header {
  background: #25D366;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.chat-info {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
}

.chat-info i {
  font-size: 20px;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
  padding: 0;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background 0.2s;
}

.close-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.chat-message {
  padding: 20px;
  background: white;
}

.chat-message p {
  margin: 0;
  color: #333;
  line-height: 1.4;
  font-size: 14px;
}

.open-chat-btn {
  background: #25D366;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 20px 20px 20px;
  transition: all 0.3s ease;
  width: calc(100% - 40px);
  justify-content: center;
}

.open-chat-btn:hover {
  background: #128C7E;
  transform: translateY(-1px);
}

.open-chat-btn i {
  font-size: 12px;
}

.btn-wa:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
  color: white;
  text-decoration: none;
  border: none;
  outline: none;
}

.btn-wa:focus {
  border: none;
  outline: none;
}

@keyframes pulse {
  0% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
  50% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0.1);
  }
  100% {
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
  }
}

@media screen and (max-width: 768px) {
  .whatsapp-widget {
    bottom: 15px;
    right: 15px;
  }
  
  .btn-wa {
    width: 50px;
    height: 50px;
    font-size: 24px;
  }
  
  .chat-bubble {
    width: 280px;
    bottom: 70px;
  }
}
</style>
