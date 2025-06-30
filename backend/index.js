const express = require("express");
const app = express();
const cors = require('cors');
const fs = require("fs");
const path = require("path");
const saveTravelerData = () => {
    fs.writeFileSync(
        path.join(__dirname, "travel.json"),
        JSON.stringify(traveler, null, 2),
        "utf-8"
    );
};

const traveler = require('./travel.json');

const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

app.get("/api/travelers", (req, res) => {
    return res.json(traveler);
})

app.get("/travelers", (req, res) => {
    const html = `<ul>
        ${traveler.map(el => `<li>${el.touristSpots.map(image => image.images.map(el => `<img src=${el} style="max-width: 300px; width: 100%" alt=""/>`).join("")).join("")}</li>`).join("")}
    </ul>`
    res.send(html);
})

app.get("/api/travelers/:id", (req, res) => {
    const id = Number(req.params.id);
    const travels = traveler.find(travel => (travel.id === id));
    return res.json(travels);
})

app.put("/api/travelers/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = traveler.findIndex(travel => travel.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "Destination not found" });
    }

    const updatedData = { id, ...req.body };
    traveler[index] = updatedData;

    saveTravelerData();

    res.json({ message: "Destination fully replaced", data: updatedData });
});
app.patch("/api/travelers/:id", (req, res) => {
   const id = Number(req.params.id);
    const updateData = req.body;

    const travelIndex = traveler.findIndex(travel => travel.id === id);

    if (travelIndex === -1) {
        return res.status(404).json({ error: "Destination not found" });
    }

    traveler[travelIndex] = { ...traveler[travelIndex], ...updateData };
    saveTravelerData();
    return res.json({ message: "Destination updated", data: traveler[travelIndex] });
})
app.delete("/api/travelers/:id", (req, res) => {
    const id = Number(req.params.id);
    const travelIndex = traveler.findIndex(travel => travel.id === id);

    if (travelIndex === -1) {
        return res.status(404).json({ error: "Destination not found" });
    }

    const deleted = traveler.splice(travelIndex, 1);
    saveTravelerData();
    return res.json({ message: "Destination deleted", data: deleted[0] });
})
app.post("/api/travelers", (req, res) => {
    const newTravel = req.body;

    const newId = traveler.length > 0 ? traveler[traveler.length - 1].id + 1 : 1;
    const data = { id: newId, ...newTravel };
    console.log(newId);
    console.log(newTravel);
    traveler.push(data);
    saveTravelerData();

    return res.status(201).json({ message: "New travel data added", data });

})

app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));