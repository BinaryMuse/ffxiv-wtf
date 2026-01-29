---
title: "The Second Coil of Bahamut - Turn 3"
expansion: "arr"
difficulty: "normal"
level: 50
minIlvl: 100
bosses:
  - name: "The Avatar"
patch: "2.2"
---

The third turn of the Second Coil features The Avatar, a mechanical boss with complex tower management and debuff mechanics.

## The Avatar

A multi-phase fight requiring precise coordination between handling boss mechanics and managing Biotowers.

### All Phases

| Mechanic | Type | Description |
|----------|------|-------------|
| Diffusion Ray | **Cleave** | Large cone AoE applying DoT (600/tick) - cleansable with Esuna |
| Gaseous Bomb | **Stack** | Non-transferable marker - stack to split damage |
| Homing Missile | **AoE** | Line between Avatar and random non-tank - can be intercepted |

### Phase 2 Mechanics

| Mechanic | Type | Description |
|----------|------|-------------|
| Brain Jack | **Tankbuster** | Forces main tank to attack nearest ally for several seconds |
| Ballistic Missile | **Stack** | Binds two players with circles - requires precise player counts |

**Brain Jack Strategy:**
- Cast every 30 seconds
- Diffusion Ray always follows this attack
- Position a DPS in melee behind boss (not in front) to prevent turning
- This prevents the confused tank from cleaving the party

**Ballistic Missile Strategy:**
- Two players get bound with circles (one large, one small per player)
- After delay: 2 players must be in small circles, 3 in large circles
- Wrong player count = instant death for everyone in those circles

### Phase 3 Mechanics

| Mechanic | Type | Description |
|----------|------|-------------|
| Allagan Field | **Raidwide** | 30-second debuff - damage taken is doubled when it expires |
| Biotowers | **Adds** | Towers at cardinal directions must be managed |

**Allagan Field Strategy:**
- One player gets debuffed for 30 seconds
- All damage they take during the debuff is stored
- When debuff expires, stored damage is doubled and hits the entire raid
- Keep Stoneskin and Adloquium on the debuffed target to minimize damage

**Biotower Management:**
- Four towers at cardinal directions activate in scripted groups
- Each tower gains one charge every 15 seconds
- Towers activate at 4 charges
- If two towers charge simultaneously, Avatar gains defensive/damage buffs
- Properly managed = zero stacks on boss
- Two+ towers at max charges = wipe

**Notes:**
- Tower management is the key to this fight
- Assign players to specific towers
- Coordinate Allagan Field mitigation with healers
- Cleanse Diffusion Ray DoT promptly
