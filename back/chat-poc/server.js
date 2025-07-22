// 1. Importation des modules nécessaires
const express = require('express'); // Framework web pour Node.js
const http = require('http'); // Module natif de Node.js pour créer un serveur HTTP
const { Server } = require('socket.io'); // Classe Server de Socket.IO pour la communication temps réel
const path = require('path'); // Module natif pour gérer les chemins de fichiers

// 2. Initialisation du serveur
const app = express(); // Crée une application Express
const server = http.createServer(app); // Crée un serveur HTTP basé sur l'application Express
const io = new Server(server, {
  // 3. Configuration du CORS (Cross-Origin Resource Sharing)
  cors: {
    origin: "http://localhost:8081", // Autorise les requêtes provenant du frontend (port 8081)
    methods: ["GET", "POST"] // Méthodes HTTP autorisées
  }
});

// 4. Gestion des connexions Socket.IO
io.on('connection', (socket) => {
  // Cet événement se déclenche chaque fois qu'un nouveau client se connecte
  console.log('Nouvel utilisateur connecté');

  // Écoute de l'événement 'chat message' envoyé par un client
  socket.on('chat message', (msg) => {
    // Rediffuse le message reçu à TOUS les clients connectés (y compris l'expéditeur)
    io.emit('chat message', msg);
  });

  // Événement déclenché lorsqu'un client se déconnecte
  socket.on('disconnect', () => {
    console.log('Utilisateur déconnecté');
  });
});

// 5. Démarrage du serveur
const PORT = process.env.PORT || 3000; // Utilise le port défini dans l'environnement, ou 3000 par défaut
server.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
}); 