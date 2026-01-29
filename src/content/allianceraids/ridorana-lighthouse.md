---
title: "The Ridorana Lighthouse"
expansion: "sb"
difficulty: "normal"
level: 70
minIlvl: 335
bosses:
  - name: "Famfrit, the Darkening Cloud"
  - name: "Belias, the Gigas"
  - name: "Construct 7"
  - name: "Yiazmat"
patch: "4.3"
---

The second 24-man alliance raid in the Return to Ivalice series, ascending the Ridorana Lighthouse from Final Fantasy XII. Features Esper bosses and the notorious math mechanic.

## Famfrit, the Darkening Cloud

A water Esper that uses jug-based directional attacks.

| Mechanic | Type | Description |
|----------|------|-------------|
| Tidepod | **Tankbuster** | High tank damage |
| Water IV | **Raidwide** | Moderate raid-wide damage |
| Briny Cannonade | **Spread** | Purple markers drop circular AoEs - spread out |
| Tsunami | **Knockback** | Knockback to edge with raid damage; watch jug direction for follow-up |
| Tsunami (Column) | **AoE** | Column AoE in jug direction |
| Tsunami (Area) | **AoE** | Half-arena attack in jug direction |
| Dark Rain | **Spread** | Consecutive puddles on moving players |
| Dark Ewer (Line) | **AoE** | 3 hurricanes travel straight across arena |
| Dark Ewer (Circle) | **AoE** | 3 hurricanes rotate in rings around arena |
| Darkening Rainfall | **Adds** | 3 Dark Rain adds - each alliance kills one before cast completes |
| Dark Cannonade | **Stack** | Red triangle markers - stack with another player |

**Strategy:** Watch the boss's jug direction during Tsunami to anticipate follow-up. Each alliance handles one Dark Rain add.

---

## Belias, the Gigas

A fire Esper with time-based mechanics and clone charges.

### Phase 1

| Mechanic | Type | Description |
|----------|------|-------------|
| Fire | **Tankbuster** | High tank damage |
| Fire IV | **Raidwide** | Moderate raid-wide damage |
| Time Eruption | **AoE** | Grid with fast/slow clocks - stand on slow, move to fast after it explodes |
| Crimson Cyclone | **AoE** | 2 clones dash across arena following arrows - find safe zone |
| Hand of Time | **AoE** | Nails tether with stacking debuff + Slow - run away until debuff = 1 |
| Eruption | **Spread** | Consecutive puddles on moving players |

### Phase 2 - Gigas Adds

| Mechanic | Type | Description |
|----------|------|-------------|
| Gigas | **Adds** | 3 adds that buff if close - separate and kill before Duty Gauge fills |
| Hellfire | **Enrage** | Damage based on Duty Gauge |

### Phase 3

| Mechanic | Type | Description |
|----------|------|-------------|
| Time Bomb | **AoE** | 4 clocks with hands pointing to AoE locations - stand in clock to rotate hands |

**Strategy:** For Time Eruption: slow clocks → fast clocks explode → move to empty spots. Track clone paths including arrow redirects.

---

## Construct 7

A mechanical boss infamous for its math-based mechanics.

| Mechanic | Type | Description |
|----------|------|-------------|
| Destroy | **Tankbuster** | High tank damage |
| Accelerate | **Stack** | Orange markers spread; unmarked stack on stack marker |
| Pulverize | **AoE** | Instant point blank AoE - stay out of melee |
| Compress | **AoE** | Column AoE following Pulverize |
| Cogs | **AoE** | 6 large persistent puddles |
| Ignite | **Spread** | Boss divebombs from edge; orange markers drop AoEs |
| Lithobrake | **AoE** | Proximity AoE at center |
| Dispose | **Cleave** | Rotating cone AoEs - stay behind boss entire duration |

### Computation Mode (Math Mechanic)

1. Boss reduces all HP to 1-8
2. Four circles appear adding 1, 2, 3, or 4 HP if you stand in them
3. Boss says "Calibrate vitals to..." followed by condition:
   - "Multiple of X" - adjust HP to be divisible by X
   - "Prime number" - adjust HP to 2, 3, 5, or 7 (1 is NOT prime)
4. Stand in circles to adjust HP or stay outside if already correct

| Current HP | Multiple of 3 | Multiple of 4 | Multiple of 5 | Prime |
|------------|---------------|---------------|---------------|-------|
| 1 | +2 (3) | +3 (4) | +4 (5) | +1 (2) or +2 (3) |
| 2 | +1 (3) | +2 (4) | +3 (5) | Stay (2) |
| 3 | Stay (3) | +1 (4) | +2 (5) | Stay (3) |
| 4 | +2 (6) | Stay (4) | +1 (5) | +1 (5) or +3 (7) |
| 5 | +1 (6) | +3+4 (12) | Stay (5) | Stay (5) |
| 6 | Stay (6) | +2 (8) | +4 (10) | +1 (7) |
| 7 | +2 (9) | +1 (8) | +3 (10) | Stay (7) |
| 8 | +1 (9) | Stay (8) | +2 (10) | Outside area |

### Tartarus Mode (Alliance Split)

| Alliance | Mechanic | Response |
|----------|----------|----------|
| A | Polarity tethers | Match (+/+, -/-) = stack; Opposite (+/-) = spread |
| B | Missiles | Dodge missile AoEs |
| C | Acceleration Bombs | Stop ALL actions when dice reaches 1-0 |

### Annihilation Mode

- Compress hits 4 columns in cross shape
- Dispose lasts longer

**Strategy:** Learn the math chart or understand the logic. Dispose is deceptively long - stay behind boss.

---

## Yiazmat

The legendary dragon from FF12, now a Lucavi-possessed Ba'Gamnan.

### Phase 1

| Mechanic | Type | Description |
|----------|------|-------------|
| Rake (Tank) | **Tankbuster** | No telegraph version - high tank damage |
| Rake (Stomp) | **AoE** | Orange arrow version - boss stomps circular AoEs following arrows |
| Dark Gale | **Spread** | Consecutive circular AoEs under moving players |
| Stone Breath | **Gaze** | Boss stands on hind legs - massive frontal AoE with Petrify; stay behind |
| Dust Storm | **Raidwide** | Moderate raid-wide damage |
| White Breath | **AoE** | Massive donut AoE - only safe in boss hitbox |
| Magnetic Lysis | **AoE** | +/- debuff; arena split into two sides |
| Wind Azers | **Adds** | Tether and attack with column AoEs |
| Deathstroke | **Stack** | Stack marker on one player |
| Cyclone | **Raidwide** | Heavy damage with air throw - levitating players die instantly |

### Magnetic Lysis System

- Players get + or - debuff
- Arena divides into + and - sides
- Standing on MATCHING side = levitate (death during Cyclone)
- Standing on OPPOSITE side = grounded (safe)

### Phase 2 - Heart Phase

| Mechanic | Type | Description |
|----------|------|-------------|
| Archaeodemons | **Adds** | 3 adds - each alliance kills one |
| Heart of the Dragon | **Adds** | Becomes targetable after adds die - burn quickly |
| Solar Storm | **Enrage** | Damage based on Duty Gauge |

### Phase 3

| Mechanic | Type | Description |
|----------|------|-------------|
| Growing Threat | **Enrage** | Boss damage buff - kill quickly |

**Strategy:** Always stand on opposite polarity side. Watch for Rake arrows. Stone Breath requires immediate repositioning behind boss.

**Notes:** The Magnetic Lysis mechanic is the key to survival. Wrong polarity during Cyclone = instant death.
