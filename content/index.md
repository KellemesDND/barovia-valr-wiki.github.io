---
title: "🦇 Valrs Curse of Strahd Campaign"
---

Thought it would be cool to make a little site for the notes.

---
<div style="display:flex; gap:20px; flex-wrap: wrap;">

  <div style="flex:1; min-width:250px; background:#2b1b1b; color:white; padding:15px; border-radius:8px;">
    <h2>🗺️ Locations</h2>
    <p>Explore towns, castles, dungeons, and more.</p>
    <ul>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Camp/">Camps</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Castle/">Castles</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Dungeon/">Dungeons</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/House/">Houses</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Misc/">Misc</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Region/">Regions</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Town/">Towns</a></li>
    </ul>
  </div>

  <div style="flex:1; min-width:250px; background:#2b1b1b; color:white; padding:15px; border-radius:8px;">
    <h2>🧙 NPCs & Factions</h2>
    <p>Keep track of important characters and groups.</p>
    <ul>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/NPCs/">NPCs</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Factions/">Factions</a></li>
    </ul>
  </div>

  <div style="flex:1; min-width:250px; background:#2b1b1b; color:white; padding:15px; border-radius:8px;">
    <h2>⚔️ Quests & Items</h2>
    <p>Track active quests and important loot.</p>
    <ul>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Quests/">Quests</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Items/">Items</a></li>
    </ul>
  </div>

  <div style="flex:1; min-width:250px; background:#2b1b1b; color:white; padding:15px; border-radius:8px;">
    <h2>🔮 Tarokka</h2>
    <p>Fortunes and Strahd’s enemies.</p>
    <ul>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Tarokka/Fortunes/">Fortunes</a></li>
      <li><a href="https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Tarokka/Strahd's Enemies/">Strahd's Enemies</a></li>
    </ul>
  </div>

  <div style="flex:1; min-width:250px; background:#2b1b1b; color:white; padding:15px; border-radius:8px;">
    <h2>🛡️ Party Members</h2>
    <p>Our adventuring party so far:</p>
    <ul>
      <li>🐇 Lorrent – Harengon Life Cleric</li>
      <li>🗿 Valkar – Goliath War Cleric</li>
      <li>🏹 Marcus – Human Ranger</li>
      <li>🎵 Gonk – Orc Bard</li>
    </ul>
  </div>

<div style="width:100%; background:#2b1b1b; color:white; padding:15px; border-radius:8px; margin-top:20px;">
  <h2>🗺️ Map of Barovia</h2>
  <p>Areas our party has explored so far.</p>

  <div id="map-container" style="position:relative;">
    <!-- Base map image -->
    <img src="./assets/barovia-map.png" style="width:100%; border-radius:5px;" alt="Map of Barovia" />

    <!-- Fog overlay for unexplored areas -->
    <div style="position:absolute; top:20%; left:10%; width:15%; height:15%; background:rgba(0,0,0,0.6); border-radius:3px;"></div>
    <div style="position:absolute; top:50%; left:40%; width:20%; height:20%; background:rgba(0,0,0,0.6); border-radius:3px;"></div>
  </div>
</div>

<script>
// Define all possible locations with coordinates (percentages relative to the image)
const locations = {
  "Camp": {xPercent: 15, yPercent: 25, url:"https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Camp/"},
  "Town": {xPercent: 40, yPercent: 55, url:"https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Town/"},
  "Castle": {xPercent: 70, yPercent: 20, url:"https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Castle/"},
  "Dungeon": {xPercent: 25, yPercent: 75, url:"https://kellemesdnd.github.io/barovia-valr-wiki.github.io/Location/Dungeon/"},
  // Add more locations as needed
};

// Array of explored locations
const explored = ["Camp", "Town"];

// Add markers for explored locations
const mapContainer = document.getElementById("map-container");
for (const loc of explored) {
  const marker = document.createElement("a");
  marker.href = locations[loc].url;
  marker.style.position = "absolute";
  marker.style.left = locations[loc].xPercent + "%";
  marker.style.top = locations[loc].yPercent + "%";
  marker.textContent = "📍";
  marker.style.fontSize = "24px";
  marker.style.transform = "translate(-50%, -50%)"; // center the emoji
  marker.title = loc;
  mapContainer.appendChild(marker);
}
</script>

</div>



