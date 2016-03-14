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
CREATE (Lyanna:Stark {name:'Lyanna Stark', occupation:'Highborn Lady', dead:true, mannerOfDeath:'Mysterious circumstances'})

CREATE
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
(Oberyn)-[:SIBLING]->(Elia)
