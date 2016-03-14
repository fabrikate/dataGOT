CREATE (Ned:Stark {name:'Ned Stark', occupation:'Hand to King Robert, Warden of the North', dead:true, mannerOfDeath:'Beheaded for treason', personResp4Death:'Joffery Baratheon'})
CREATE (Lyanna:Stark {name:'Lyanna Stark', occupation:'Highborn Lady', dead:true, mannerOfDeath:'Unknown'})
CREATE (Catelyn:Stark {name:'Catelyn Stark', occupation:'Wardeness of the North', dead:true, mannerOfDeath:'Killed at Red Wedding', personResp4Death: 'Walder Frey', houseResp4Death:'Lannister'})
CREATE (Robb:Stark {name:'Robb Stark', occupation:'King in the North', dead:true, mannerOfDeath:'Killed at Red Wedding', personResp4Death: 'Walder Frey', houseResp4Death:'Lannister'})
CREATE (Sansa:Stark {name:'Sansa Stark', occupation:'Highborn Lady', dead:false})
CREATE (Arya:Stark {name:'Arya Stark', occupation:'Faceless Man in training', dead:false})
CREATE (Bran:Stark {name:'Bran Stark', occupation:'Three eyed raven in training', dead:false})
CREATE (Rickon:Stark {name:'Rickon Stark', occupation:'Highborn Boy', dead:false})
CREATE (Jon:Snow {name:'Jon Snow', occupation:"Lord Commander of Night's Watch", dead:true, mannerOfDeath:'Stabbed by mutaniers', houseResp4Death:"Night's Watch"})
CREATE (Roose:Bolton {name:'Roose Bolton', occupation:'Warden of the North', dead:false})
CREATE (Ramsay:Bolton {name:'Ramsay Bolton', occupation:'Natural Born son', dead:false})
CREATE (Walder:Frey {name:'Walder Frey', occupation:'Lord of Riverrun', dead:false})

CREATE (Tywin:Lannister {name:'Tywin Lannister', occupation:'Hand to King Aerys, Joffery, Tommen', dead:true, mannerOfDeath:'Killed by crossbow in the privy', personResp4Death:'Tyrion Lannister'})
CREATE (Cersei:Lannister {name:'Cersei Lannister', occupation:'Queen Regent', dead:false})
CREATE (Jaime:Lannister {name:'Jaime Lannister', occupation:'Commander of the Kingsguard', dead:false})
CREATE (Tyrion:Lannister {name:'Tyrion Lannister', occupation:'Master of Coin', dead:false})
CREATE (Joffery:Baratheon {name:'Joffery Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Poisioned at his wedding', personResp4Death:'Petyr Baelish', houseResp4Death:'Tyrell'})
CREATE (Myrcella:Baratheon {name:'Myrcella Baratheon', occupation:'Princess of Westeros', dead:'book:no, series:yes', mannerOfDeath:'Posioned on her trip home', personResp4Death:'Ellaria Sand'})
CREATE (Tommen:Baratheon {name:'Tommen Baratheon', occupation:'King of Westeros', dead:false})

CREATE (Robert:Baratheon {name:'Robert Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Drunken hunting accident', houseResp4Death:'Lannister', personResp4Death:'Cersei Lannister'})
CREATE (Stannis:Baratheon {name:'Stannis Baratheon', occupation:'Rightful King of Westeros', dead:'book:no series:yes', mannerOfDeath:'Killed after battle', personResp4Death:'Brienne Tarth'})
CREATE (Renly:Baratheon {name:'Renly Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Killed by shadow', personResp4Death:'Stannis Baratheon'})

CREATE (Margaery:Tyrell {name:'Margaery Tyrell', occupation:'Queen of Westeros', dead:false})
CREATE (Olenna:Tyrell {name:'Olenna Tyrell', occupation:'Highborn lady', dead:false})
CREATE (Loras:Tyrell {name:'Loras Tyrell', occupation:'Highgarden heir / Kingsguard', dead:false})
CREATE (Brienne:Tarth {name:'Brienne Tarth', occupation:'Sworn Shield of Catelyn Stark', dead:false})
CREATE (Petyr:Baelish {name:'Petyr Baelish', occupation:'Master of Coin', dead:false})
CREATE (Daenerys:Targaryen {name:'Daenerys Targaryen', occupation:'Queen of Myreen', dead:false})
CREATE (Rhaegal:Targaryen {name:'Rhaegal Targaryen', occupation:'Prince of Westeros', dead:true, mannerOfDeath:'Killed in battle', personResp4Death:'Robert Baratheon', houseResp4Death:'Baratheon'})
CREATE (Viserys:Targaryen {name:'Viserys Targaryen', occupation:'Beggar King', dead:true, mannerOfDeath:'Hot Gold poured over head', personResp4Death:'Khal Drogo'})
CREATE (Jorah:Mormont {name:'Jorah Mormont', occupation:'disgraced Queensguard of Daenerys', dead:false})
CREATE (Jeor:Mormont {name:'Jeor Mormont', occupation:"Lord Commander of the Night's Watch", dead:true, mannerOfDeath:'Stabbed in mutany', houseResp4Death:"Night's Watch"})
CREATE (Samwell:Tarly {name:'Samwell Tarly', occupation:"Knight of the Night's Watch", dead: false})
CREATE (Lysa:Arryn {name:'Lysa Arryn', occupation:'Lady of the Veil', dead:true, mannerOfDeath:'Pushed through sky door', personResp4Death:'Petyr Baelish'})
CREATE (Oberyn:Martell {name:'Oberyn Martell', occupation:'Prince of Dorne', dead:true, mannerOfDeath:'Head crushed during Trial by Combat', personResp4Death:'Gregor Clegane'})
CREATE (Elia:Martell {name:'Elia Martell', occupation:'Princess of Westeros', dead:true, mannerOfDeath:'Killed in Raid of Kings Landing', personResp4Death:'Gregor Clegane', houseResp4Death:'Lannister'})

CREATE
(Ned)-[:MARRIED]->(Catelyn),
(Ned)-[:SIBLING]->(Lyanna),
(Rhaegal)-[:LOVER]->(Lyanna),
(Ned)-[:LOYAL_TO]->(Robert),
(Catelyn)-[:SIBLING]->(Lysa),
(Ned)-[:PARENT]->(Robb),
(Ned)-[:PARENT]->(Jon),
(Ned)-[:PARENT]->(Sansa),
(Ned)-[:PARENT]->(Arya),
(Ned)-[:PARENT]->(Bran),
(Ned)-[:PARENT]->(Rickon),
(Robb)-[:SIBLING]->(Jon),
(Robb)-[:SIBLING]->(Sansa),
(Robb)-[:SIBLING]->(Arya),
(Robb)-[:SIBLING]->(Bran),
(Robb)-[:SIBLING]->(Rickon),
(Samwell)-[:LOYAL_TO]->(Jon),
(Jon)-[:LOYAL_TO]->(Jeor),

(Tywin)-[:PARENT]->(Cersei),
(Tywin)-[:PARENT]->(Jaime),
(Tywin)-[:PARENT]->(Tyrion),
(Cersei)-[:SIBLING]->(Jaime),
(Cersei)-[:SIBLING]->(Tyrion),
(Cersei)-[:LOVER]->(Jaime),
(Cersei)-[:PARENT]->(Joffery),
(Cersei)-[:PARENT]->(Myrcella),
(Cersei)-[:PARENT]->(Tommen),
(Cersei)-[:KILLED]->(Robert),
(Tyrion)-[:KILLED]->(Tywin),
(Joffery)-[:MARRIED]->(Margaery),
(Tommen)-[:MARRIED]->(Margaery),
(Joffery)-[:SIBLING]->(Myrcella),
(Joffery)-[:SIBLING]->(Tommen),

(Robert)-[:MARRIED]->(Cersei),
(Robert)-[:SIBLING]->(Stannis),
(Robert)-[:SIBLING]->(Renly),
(Stannis)-[:SIBLING]->(Renly),
(Stannis)-[:KILLED]->(Renly),
(Renly)-[:MARRIED]->(Margaery),

(Roose)-[:KILLED]->(Robb),
(Roose)-[:PARENT]->(Ramsay),
(Walder)-[:KILLED]->(Catelyn),

(Olenna)-[:GRANDPARENT]->(Margaery),
(Olenna)-[:GRANDPARENT]->(Loras),
(Margaery)-[:SIBLING]->(Loras),
(Petyr)-[:MARRIED]->(Lysa),
(Rhaegal)-[:MARRIED]->(Elia),
(Rhaegal)-[:SIBLING]->(Daenerys),
(Rhaegal)-[:SIBLING]->(Viserys),
(Daenerys)-[:SIBLING]->(Viserys),
(Jeor)-[:PARENT]->(Jorah),
(Jorah)-[:LOYAL_TO]->(Daenerys),
(Oberyn)-[:SIBLING]->(Elia),
(Brienne)-[:LOYAL_TO]->(Renly),
(Brienne)-[:LOYAL_TO]->(Catelyn)
