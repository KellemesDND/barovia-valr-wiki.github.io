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
  <img id="map-small" src="./assets/barovia-map.png" style="width:100%; border-radius:5px; cursor:pointer;" alt="Map of Barovia" title="Click to zoom" />

  <div id="map-modal" style="display:none; position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.9); justify-content:center; align-items:center; z-index:1000;">
    <img src="./assets/barovia-map-large.png" style="max-width:90%; max-height:90%; border-radius:5px;" />
  </div>
</div>

<script>
const smallMap = document.getElementById("map-small");
const modal = document.getElementById("map-modal");

smallMap.onclick = () => { modal.style.display = "flex"; };
modal.onclick = () => { modal.style.display = "none"; };
</script>


</div>
