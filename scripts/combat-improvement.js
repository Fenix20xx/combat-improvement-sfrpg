class CombatImprovement {
  static Id = 'combat-improvement';
  
  Hook.on("Init": function() {
    console.log("Combat Improvement is Running!");
  });

  Hook.on("ready", function() {
    console.log("Code runs once gamedata is availaible");
  });

  Hook.on()
  
  static TEMPLATES = {
    COMBATIMPROVER: `modules/${this.ID}/templates/combatimprovement.hbs`
  }
}