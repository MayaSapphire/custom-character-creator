commonSkills = [
  "Astrophysicist", "Biologist", "Botanist", "Builder", 
  "Charismatic", "Chef", "Chemist", "Cosmologist", 
  "Creative", "Designer", "Demolitions Expert", "Determined", 
  "Diplomat", "Engineer", "Fencer", "Firefighter", 
  "Hauler", "IT Expert", "Jack Of All Trades", "Leader", 
  "Logistics Expert", "Lucky", "Medic", "Nurse", 
  "Pilot", "Radio Expert", "Robotics Expert", "Scavenger", 
  "Shooter", "Solid", "Sprinter", "Survivalist", 
  "Tamer", "Technician", "Tinker", "The Optimist"
]

uniqueSkills = [
  "Analytical", "Antique Perfume", "Blitz", "Bodyguard",
  "Caffeine Junkie", "Cold Blooded", "Confidant", "Crazy Eye",
  "Daredevil", "Detached Crewmember", "Devotion", "Director",
  "Electrician", "Expert", "Fortune Teller", "Frugivore",
  "Genius", "Green Thumb", "Gunner", "Hair Trigger",
  "Hygienist", "Intimidating", "Keen Eye", "Mankind's Only Hope",
  "Meds Junkie", "Metalworker", "Motivator", "Mycologist",
  "NERON's Only Friend", "Observant", "Meticulous", "Opportunist",
  "Panic", "Physicist", "Pickpocket", "Politician",
  "Polymath", "Polyvalent", "Possession", "Premonition",
  "Rebel", "Self-Sacrifice", "Shrink", "Sneak",
  "Strateguru", "Supervisor", "Torturer", "Tracker",
  "Trailblazer", "Treasure Hunter", "U-Turn", "Victimizer",
  "Watchman", "Workaholic"
]

allSkills = commonSkills + uniqueSkills

for skill in allSkills:
  if skill in commonSkills:
    print(f"""
<label class="common-skill">
  <input type="checkbox" name="skills" value="{skill}">
  {skill}
</label>""".format(skill=skill))
  else:
    print(f"""
<label class="unique-skill">
  <input type="checkbox" name="skills" value="{skill}">
  {skill}
</label>""".format(skill=skill))