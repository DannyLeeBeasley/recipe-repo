puts "🌱 Seeding..."
puts "Deleting old data..."
User.destroy_all
Ingredient.destroy_all

puts "Creating users..."
dan = User.create(username: "DannyLeeBeasley", password_digest: "TrickyPassword13!")
katie = User.create(username: "KatieBeasley", password_digest: "NeverGuess27!")

puts "Creating ingredients..."
salt = Ingredient.create(name: "Salt", image:)
fresh_cracked_black_pepper Ingredient.create(name: "Fresh Cracked Black Pepper", image:)
crushed_red_pepper Ingredient.create(name: "Crushed Red Pepper", image:)
garlic_powder = Ingredient.create(name: "Garlic Powder", image:)
chili_powder = Ingredient.create(name: "Chili Powder", image:)
ground_cumin = Ingredient.create(name: "Ground Cumin", image:)
ground_cayenne = Ingredient.create(name: "Ground Cayenne", image:)
ground_allspice = Ingredient.create(name: "Ground Allspice", image:)
sweet_paprika =Ingredient.create(name: "Sweet Paprika", image:)
smoked_paprika = Ingredient.create(name: "Smoked Paprika", image:)
ground_cinnamon = Ingredient.create(name: "Ground Cinnamon", image:)
dried_oregano = Ingredient.create(name: "Dried Oregano", image:)
dried_basil = Ingredient.create(name: "Dried Basil", image:)

fresh_parsley = Ingredient.create(name: "Fresh Parsley", image:)
fresh_cilantro = Ingredient.create(name: "Fresh Cilantro", image:)
fresh_mint = Ingredient.create(name: "Fresh Mint", image:)
fresh_oregano = Ingredient.create(name: "Fresh Oregano", image:)
fresh_basil = Ingredient.create(name: "Fresh Basil", image:)

baby_spinach = Ingredient.create(name: "Baby Spinach", image:)
white_onion = Ingredient.create(name: "White Onion", image:)
shallots = Ingredient.create(name: "Shallots", image:)
green_onion = Ingredient.create(name: "Green Onion", image:)
garlic = Ingredient.create(name: "Garlic", image:)
tomatillos = Ingredient.create(name: "Tomatillos", image:)
red_bell_pepper = Ingredient.create(name: "Red Bell Pepper", image:)
fresh_fresno = Ingredient.create(name: "Fresh Fresno", image:)
fresh_jalepeno = Ingredient.create(name: "Fresh Jalepeno", image:)
zucchini = Ingredient.create(name: "Zucchini", image:)
carrots = Ingredient.create(name: "Carrots", image:)

lime = Ingredient.create(name: "Lime", image:)

diced_tomatoes = Ingredient.create(name: "Diced Tomatoes", image:)
chipotle_in_adobo = Ingredient.create(name: "Chipotle In Adobo", image:)
black_beans = Ingredient.create(name: "Black Beans", image:)
kidney_beans = Ingredient.create(name: "Kidney Beans", image:)

all_purpose_flour = Ingredient.create(name: "All Purpose Flour", image:)
panko_breadcrumbs = Ingredient.create(name: "Panko Breadcrumbs", image:)
flour_tortillas = Ingredient.create(name: "Flour Tortillas", image:)
wide_rice_noodles = Ingredient.create(name: "Wide Rice Noodles", image:)
cheese_tortellini = Ingredient.create(name: "Cheese Tortellini", image:)

monterey_jack = Ingredient.create(name: "Monterey Jack Cheese", image:)

ground_beef = Ingredient.create(name: "Ground Beef", image:)
italian_sausage = Ingredient.create(name: "Italian Sausage", image:)
skirt_steak = Ingredient.create(name: "Skirt Steak", image:)
salmon_filet = Ingredient.create(name: "Salmon Filet", image:)
shredded_rotisserie_chicken = Ingredient.create(name: "Shredded Rotisserie Chicken", image:)

conola_oil = Ingredient.create(name: "Canola Oil", image:)
refined_sesame_oil = Ingredient.create(name: "Refined Sesame Oil", image:)
unsalted_butter = Ingredient.create(name: "Unsalted Butter", image:)
evoo = Ingredient.create(name: "Extra Virgin Olive Oil", image:)

red_wine_vinegar = Ingredient.create(name: "Red Wine Vinegar", image:)
chicken_broth = Ingredient.create(name: "Chicken Broth", image:)
dijon_mustard = Ingredient.create(name: "Dijon Mustard", image:)
soy_sauce = Ingredient.create(name: "Soy Sauce", image:)
oyster_sauce = Ingredient.create(name: "Oyster Sauce", image:)
fish_sauce = Ingredient.create(name: "Fish Sauce", image:)
honey = Ingredient.create(name: "Honey", image:)

light_brown_sugar = Ingredient.create(name: "Light Brown Sugar", image:)
hershey_kisses = Ingredient.create(name: "Hershey Kisses", image:)
instant_coffee = Ingredient.create(name: "Instant Coffee", image:)
red_wine = Ingredient.create(name: "Red Wine", image:)
light_lager = Ingredient.create(name: "Light Lager", image:)

puts "✅ Done seeding!"

