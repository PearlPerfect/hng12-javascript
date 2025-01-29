# My Public API (Node.js/Express)

This is a simple public API built with Node.js and Express.js. It returns an email address, the current datetime, and a GitHub URL.

## Setup

1. Clone the repository: `https://github.com/PearlPerfect/hng12-javascript`
2. Navigate to the project directory: `cd task-zero` 
3. Install dependencies: `npm install express`
4. Start the server: `node index.js`

   This will start the server on `http://localhost:8000`. Keep this terminal window open while the server is running.

5. Access the API: Open your web browser or use `curl` to access the API at `http://localhost:8000`.

## API Documentation

### Endpoint

`GET http://localhost:8000` for local development sever, or 
`GET https://hng12-javascript.vercel.app/` for production server.

### Request/Response Format

**Request:** None

**Response (200 OK):**

### Example Usage
Bash

curl http://localhost:8000


### Backlinks
[Learn more about Node.js development](https://hng.tech/hire/nodejs-developers)


```json
{
  "email": "imoudoh2025@gmail.com",
  "current_datetime": "2025-01-30T09:30:00Z", 
  "github_url": "[Task-github-url](https://github.com/PearlPerfect/hng12-javascript)"
}