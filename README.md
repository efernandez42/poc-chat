# poc-chat

# PoC - Chat en Temps Réel

Ce projet est une preuve de concept (PoC) pour une fonctionnalité de chat en temps réel entre un client et un service client.

## Architecture

Le PoC est divisé en deux parties distinctes :

1.  **Backend (Node.js + Socket.IO)** : Un serveur léger qui gère la logique du chat, reçoit les messages et les diffuse à tous les clients connectés via WebSocket.
2.  **Frontend (Spring Boot + HTML/JS)** : Un serveur Spring Boot qui sert une simple page HTML. Cette page contient le code JavaScript (client Socket.IO) qui se connecte au backend Node.js pour envoyer et recevoir les messages.

-   Le **backend** tourne sur `http://localhost:3000`.
-   Le **frontend** est servi par Spring Boot sur `http://localhost:8081`.

---

## 🚀 Lancer le PoC

Suivez ces étapes dans l'ordre.

### 1. Lancer le Backend (Node.js)

> **Pré-requis :** Avoir Node.js et npm installés.

1.  Ouvrez un terminal et placez-vous dans le dossier du backend.
2.  Installez les dépendances :
    ```bash
    npm install express socket.io
    ```
3.  Lancez le serveur :
    ```bash
    cd chat-poc
    npm install
    npm start  
    ```
    Le terminal devrait afficher un message confirmant que le serveur écoute sur le port 3000.

### 2. Lancer le Frontend (Spring Boot)

1.  Ouvrez un **second terminal** et placez-vous dans le dossier de ce projet (`front`).
2.  Lancez le serveur Spring Boot avec Gradle :
    ```bash
    npm install
    npm start  
    ```
    Le terminal devrait afficher que l'application a démarré sur le port 8081.

### 3. Tester le Chat

1.  Une fois les deux serveurs lancés, ouvrez votre navigateur et allez à l'adresse :
    [http://localhost:8081](http://localhost:8081)

2.  Entrez un nom et un message, puis cliquez sur "Envoyer".
3.  Ouvrez plusieurs onglets ou fenêtres de navigateur sur la même URL pour simuler une conversation entre plusieurs utilisateurs. Les messages s'afficheront en temps réel sur toutes les pages.

---
