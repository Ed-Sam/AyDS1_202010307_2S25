const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.json({
        nombre: "Edwin Sam - 202010307", 
        cancionFavorita: "Doberman - Deafheaven" 
    });
});

app.listen(PORT, () => {
    console.log(`API corriendo en http://localhost:${PORT}`);
});