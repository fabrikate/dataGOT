// alive state as an integer ( 3 would be alive, dead, brought back)
// add HODOR

CREATE (Ned:Stark {name:'Ned Stark', occupation:'Hand of the King', dead:true, mannerOfDeath:'Beheaded for treason', personResp4Death:'Joffery Baratheon'})
CREATE (Lyanna:Stark {name:'Lyanna Stark', occupation:'Highborn Lady', dead:true, mannerOfDeath:'Complications of Childbirth'})
CREATE (Benjen:Stark {name:'Benjen Stark', occupation:"First Ranger of the Night's Watch / Cold Hands", dead: true, resurrected: true, mannerOfDeath: 'White Walker ambush'})
CREATE (Catelyn:Stark {name:'Catelyn Stark', occupation:'Wardeness of the North', dead:true, mannerOfDeath:'Killed at Red Wedding', personResp4Death: 'Walder Frey', houseResp4Death:'Lannister'})
CREATE (Robb:Stark {name:'Robb Stark', occupation:'King in the North', dead:true, mannerOfDeath:'Killed at Red Wedding', personResp4Death: 'Walder Frey', houseResp4Death:'Lannister', crownedRoyal: true})
CREATE (Sansa:Stark {name:'Sansa Stark', occupation:'Highborn Lady', dead:false})
CREATE (Arya:Stark {name:'Arya Stark', occupation:'Faceless Man in training', dead:false})
CREATE (Bran:Stark {name:'Bran Stark', occupation:'Three eyed raven in training', dead:false})
CREATE (Rickon:Stark {name:'Rickon Stark', occupation:'Highborn Boy', dead:true, mannerOfDeath:'Killed before battle of the bastards', personResp4Death: 'Ramsay Bolton'})
CREATE (Jon:Snow {name:'Jon Snow', occupation:"King in the North", dead:false, resurrected: true, mannerOfDeath:'Stabbed by mutaniers', houseResp4Death:"Night's Watch", crownedRoyal: true})
CREATE (Roose:Bolton {name:'Roose Bolton', occupation:'Warden of the North', dead:true, mannerOfDeath:'Stabbed by son, Ramsay'})
CREATE (Ramsay:Bolton {name:'Ramsay Bolton', occupation:'Natural Born son', dead:true, mannerOfDeath: 'Eaten by his Dogs', houseResp4Death: 'Stark'})
CREATE (Walder:Frey {name:'Walder Frey', occupation:'Lord of Riverrun', dead:true, mannerOfDeath: 'Throat slit', personResp4Death: 'Stark'})
CREATE (Tywin:Lannister {name:'Tywin Lannister', occupation:'Hand of the King', dead:true, mannerOfDeath:'Killed by crossbow in the privy', personResp4Death:'Tyrion Lannister'})
CREATE (Cersei:Lannister {name:'Cersei Lannister', occupation:'Queen Regent', dead:false})
CREATE (Jaime:Lannister {name:'Jaime Lannister', occupation:'Commander of the Kingsguard', dead:false})
CREATE (Tyrion:Lannister {name:'Tyrion Lannister', occupation:'Hand to the Queen', dead:false})
CREATE (Joffery:Baratheon {name:'Joffery Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Poisioned at his wedding', personResp4Death:'Petyr Baelish', houseResp4Death:'Tyrell'})
CREATE (Myrcella:Baratheon {name:'Myrcella Baratheon', occupation:'Princess of Westeros', dead:'book:no, series:yes', mannerOfDeath:'Posioned on her trip home', personResp4Death:'Ellaria Sand'})
CREATE (Tommen:Baratheon {name:'Tommen Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath: 'Jumped from Red Keep Window'})

CREATE (Robert:Baratheon {name:'Robert Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Drunken hunting accident', houseResp4Death:'Lannister', personResp4Death:'Cersei Lannister'})
CREATE (Stannis:Baratheon {name:'Stannis Baratheon', occupation:'Rightful King of Westeros', dead:'book:no series:yes', mannerOfDeath:'Killed after battle', personResp4Death:'Brienne Tarth'})
CREATE (Renly:Baratheon {name:'Renly Baratheon', occupation:'King of Westeros', dead:true, mannerOfDeath:'Killed by shadow', personResp4Death:'Stannis Baratheon'})

CREATE (Margaery:Tyrell {name:'Margaery Tyrell', occupation:'Queen of Westeros', dead:true, mannerOfDeath: 'Wildfire in the sept of Baelor', personResp4Death: 'Cersei Lannister'})
CREATE (Olenna:Tyrell {name:'Olenna Tyrell', occupation:'Highborn lady', dead:false})
CREATE (Loras:Tyrell {name:'Loras Tyrell', occupation:'Highgarden heir / Kingsguard', dead:true, mannerOfDeath: 'Wildfire in the sept of Baelor', personResp4Death: 'Cersei Lannister'}})
CREATE (Brienne:Tarth {name:'Brienne Tarth', occupation:'Sworn Shield of Sansa Stark', dead:false})
CREATE (Petyr:Baelish {name:'Petyr Baelish', occupation:'Lord of Harenhall', dead:false})
CREATE (Daenerys:Targaryen {name:'Daenerys Targaryen', occupation:'Queen of Myreen', dead:false})
CREATE (Rhaegar:Targaryen {name:'Rhaegar Targaryen', occupation:'Prince of Westeros', dead:true, mannerOfDeath:'Killed in battle', personResp4Death:'Robert Baratheon', houseResp4Death:'Baratheon'})
CREATE (Viserys:Targaryen {name:'Viserys Targaryen', occupation:'Beggar King', dead:true, mannerOfDeath:'Hot Gold poured over head', personResp4Death:'Khal Drogo'})
CREATE (Jorah:Mormont {name:'Jorah Mormont', occupation:'disgraced Queensguard of Daenerys', dead:false})
CREATE (Jeor:Mormont {name:'Jeor Mormont', occupation:"Lord Commander of the Night's Watch", dead:true, mannerOfDeath:'Stabbed in mutany', houseResp4Death:"Night's Watch"})
CREATE (Samwell:Tarly {name:'Samwell Tarly', occupation:"Knight of the Night's Watch", dead: false})
CREATE (Lysa:Arryn {name:'Lysa Arryn', occupation:'Lady of the Veil', dead:true, mannerOfDeath:'Pushed through sky door', personResp4Death:'Petyr Baelish'})
CREATE (Oberyn:Martell {name:'Oberyn Martell', occupation:'Prince of Dorne', dead:true, mannerOfDeath:'Head crushed during Trial by Combat', personResp4Death:'Gregor Clegane'})
CREATE (Elia:Martell {name:'Elia Martell', occupation:'Princess of Westeros', dead:true, mannerOfDeath:'Killed in Raid of Kings Landing', personResp4Death:'Gregor Clegane', houseResp4Death:'Lannister'})

CREATE (JonA:Arryn {name:'Jon Arryn', occupation:'Hand of the King', dead:true, mannerOfDeath:'Posioned', personResp4Death:'Lysa Arryn'})
CREATE (Theon:Greyjoy {name:'Theon Greyjoy', occupation:'Highborn man of House Greyjoy', dead:false})
CREATE (Sandor:Glegane {name:'Sandor Clegane', occupation:'Outlaw', dead:true, mannerOfDeath:'Killed in battle', resurrected: true})
CREATE (Gregor:Glegane {name:'Gregor Clegane', occupation:'Lannister Bannerman', dead:true, resurrected: true})
CREATE (Barriston:Selmy {name:'Barriston Selmy', occupation:'Commander of Queensguard', dead:'true/false', mannerOfDeath:'Killed in battle', houseResp4Death:'Sons of the Harpy'})
CREATE (Melisandre:RedGod {name:'Melisandre', occupation:'Red Priestess', dead:false})
CREATE (Shae:NoName {name:'Shae', occupation:'Hand maiden to Sansa Stark', dead:true, mannerOfDeath:"Killed in Tywin Lannister's bed"})
CREATE (Daavos:Seaworth {name:'Daavos Seaworth', occupation:'Hand to the King', dead:false})
CREATE (Shireen:Baratheon {name:'Shireen Baratheon', occupation:'Highborn lady', dead:'book:no, series:yes', mannerOfDeath:'Burned alive', personResp4Death:'Melisandre'})
CREATE (Khal:Drogo {name:'Khal Drogo', occupation:'Dothraki Khal', dead:true, mannerOfDeath:'Infected wound'})
CREATE (Daario:Naharis {name:'Daario Naharis', occupation:'Small Council of Mereen', dead:false})
CREATE (Walda:Bolton {name:'Walda Bolton', occupation: 'Wardeness of the North', dead:true, mannerOfDeath: 'Attacked by Dogs', personResp4Death: 'Ramsay Bolton'})

CREATE
(Lysa)-[:MARRIED]->(JonA),
(Ned)-[:WARD]->(JonA),
(Joffery)-[:KILLED]->(Ned),
(Theon)-[:WARD]->(Ned),
(Melisandre)-[:LOVER]->(Stannis),
(Melisandre)-[:ALLEGIANT_TO]->(Stannis),
(Melisandre)-[:ALLEGIANT_TO]->(Jon),
(Daavos)-[:ALLEGIANT_TO]->(Stannis),
(Daavos)-[:ALLEGIANT_TO]->(Jon),
(Melisandre)-[:KILLED]->(Shireen),
(Stannis)-[:PARENT]->(Shireen),

(Ned)-[:MARRIED]->(Catelyn),
(Ned)-[:SIBLING]->(Lyanna),
(Rhaegar)-[:LOVER]->(Lyanna),
(Ned)-[:ALLEGIANT_TO]->(Robert),
(Catelyn)-[:SIBLING]->(Lysa),
(Lysa)-[:KILLED]->(JonA),
(Petyr)-[:KILLED]->(Lysa),
(Ned)-[:PARENT]->(Robb),
(Lyanna)-[:PARENT]->(Jon),
(Rhaegar)-[:PARENT]->(Jon),
(Ned)-[:PARENT]->(Sansa),
(Ned)-[:PARENT]->(Arya),
(Ned)-[:PARENT]->(Bran),
(Ned)-[:PARENT]->(Rickon),
(Robb)-[:SIBLING]->(Jon),
(Robb)-[:SIBLING]->(Sansa),
(Robb)-[:SIBLING]->(Arya),
(Robb)-[:SIBLING]->(Bran),
(Robb)-[:SIBLING]->(Rickon),
(Samwell)-[:ALLEGIANT_TO]->(Jon),
(Jon)-[:ALLEGIANT_TO]->(Jeor),
(Theon)-[:ALLEGIANT_TO]->(Ramsay),

(Tywin)-[:PARENT]->(Cersei),
(Tywin)-[:PARENT]->(Jaime),
(Tywin)-[:PARENT]->(Tyrion),
(Cersei)-[:SIBLING]->(Jaime),
(Cersei)-[:SIBLING]->(Tyrion),
(Cersei)-[:LOVER]->(Jaime),
(Cersei)-[:PARENT]->(Joffery),
(Cersei)-[:PARENT]->(Myrcella),
(Cersei)-[:PARENT]->(Tommen),
(Jaime)-[:PARENT]->(Joffery),
(Jaime)-[:PARENT]->(Myrcella),
(Jaime)-[:PARENT]->(Tommen),
(Cersei)-[:KILLED]->(Robert),
(Tyrion)-[:KILLED]->(Tywin),
(Tyrion)-[:LOVER]->(Shae),
(Tyrion)-[:KILLED]->(Shae),
(Tywin)-[:LOVER]->(Shae),
(Joffery)-[:MARRIED]->(Margaery),
(Tommen)-[:MARRIED]->(Margaery),
(Joffery)-[:SIBLING]->(Myrcella),
(Joffery)-[:SIBLING]->(Tommen),
(Gregor)-[:KILLED]->(Oberyn),
(Gregor)-[:KILLED]->(Elia),
(Gregor)-[:SIBLING]->(Sandor),
(Gregor)-[:ALLEGIANT_TO]->(Tywin),
(Gregor)-[:ALLEGIANT_TO]->(Cersei),
(Robert)-[:KILLED]->(Rhaegar),

(Robert)-[:MARRIED]->(Cersei),
(Robert)-[:SIBLING]->(Stannis),
(Robert)-[:SIBLING]->(Renly),
(Stannis)-[:SIBLING]->(Renly),
(Stannis)-[:KILLED]->(Renly),
(Brienne)-[:KILLED]->(Stannis),
(Renly)-[:MARRIED]->(Margaery),

(Walder)-[:KILLED]->(Robb),
(Roose)-[:KILLED]->(Robb),
(Roose)-[:PARENT]->(Ramsay),
(Walder)-[:KILLED]->(Catelyn),
(Petyr)-[:KILLED]->(Joffery),
(Olenna)-[:KILLED]->(Joffery),
(Daario)-[:ALLEGIANT_TO]->(Daenerys),

(Olenna)-[:GRANDPARENT]->(Margaery),
(Olenna)-[:GRANDPARENT]->(Loras),
(Margaery)-[:SIBLING]->(Loras),
(Petyr)-[:MARRIED]->(Lysa),
(Rhaegar)-[:MARRIED]->(Elia),
(Rhaegar)-[:SIBLING]->(Daenerys),
(Rhaegar)-[:SIBLING]->(Viserys),
(Daenerys)-[:SIBLING]->(Viserys),
(Daenerys)-[:MARRIED]->(Khal),
(Khal)-[:KILLED]->(Viserys),
(Barriston)-[:ALLEGIANT_TO]->(Daenerys),
(Daenerys)-[:LOVER]->(Daario),
(Jeor)-[:PARENT]->(Jorah),
(Jorah)-[:ALLEGIANT_TO]->(Daenerys),
(Oberyn)-[:SIBLING]->(Elia),
(Brienne)-[:ALLEGIANT_TO]->(Renly),
(Brienne)-[:ALLEGIANT_TO]->(Catelyn),
(Barriston)-[:ALLEGIANT_TO]->(Robert)

(Cersei)-[:KILLED]->(Margaery),
(Cersei)-[:KILLED]->(Loras),
(Arya)-[:KILLED]->(Walder),
(Ramsay)-[:KILLED]->(Roose),
(Ramsay)-[:KILLED]->(Walda),
(Ramsay)-[:KILLED]->(Rickon),
