const cakes = (recipe, available) => Math.min(...Object
  .entries(recipe)
  .map(([ingredient, needed]) => Math.floor(available[ingredient] / needed) || 0));
