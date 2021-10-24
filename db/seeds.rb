puts "🌱 Seeding..."
puts "Deleting old data..."
User.destroy_all
Ingredient.destroy_all
Recipe.destroy_all

puts "Creating users..."
dan = User.create(username: "DannyLeeBeasley", password: "TrickyPassword13!")
katie = User.create(username: "KatieBeasley", password: "NeverGuess27!")

puts "Creating ingredients..."
salt = Ingredient.create(name: "Salt", image:"https://w2.chabad.org/media/images/745/WiIZ7453042.jpg")
fresh_cracked_black_pepper =Ingredient.create(name: "Fresh Cracked Black Pepper", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/1280x1280/products/5091/9704/black-pepper-cafe-restaraunt-grind__51833.1540751690.jpg?c=2")
crushed_red_pepper = Ingredient.create(name: "Crushed Red Pepper", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/5097/9708/crushed-red-pepper__12390.1540713424.jpg?c=2")
garlic_powder = Ingredient.create(name: "Garlic Powder", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4950/10693/garlic-powder__80779.1540713339.jpg?c=2")
chili_powder = Ingredient.create(name: "Chili Powder", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4871/11141/ChiliPowder__58800.1621928606.jpg?c=2")
ground_cumin = Ingredient.create(name: "Ground Cumin", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4904/9607/ground-cumin-powder__07473.1540713307.jpg?c=2")
ground_cayenne = Ingredient.create(name: "Ground Cayenne", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/5098/9709/red-cayene-pepper-ground__88154.1540751694.jpg?c=2")
ground_allspice = Ingredient.create(name: "Ground Allspice", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4752/9542/ground-allspice__63984.1540713215.jpg?c=2") 
sweet_paprika = Ingredient.create(name: "Sweet Paprika", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/5080/11023/paprika-hungarian-sweet__83203.1580303031.jpg?c=2")
smoked_paprika = Ingredient.create(name: "Smoked Paprika", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/5082/10749/paprika-smoked-sweet__12660.1540776008.jpg?c=2")
ground_cinnamon = Ingredient.create(name: "Ground Cinnamon", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4882/9928/saigon-cinnamon__98142.1540713294.jpg?c=2")
dried_oregano = Ingredient.create(name: "Dried Oregano", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/5075/9695/mexican-oregano-greek-cut__33239.1540713410.jpg?c=2")
dried_basil = Ingredient.create(name: "Dried Basil", image: "https://cdn11.bigcommerce.com/s-9d454/images/stencil/2560w/products/4781/9557/dried-basil__03886.1540713234.jpg?c=2")

fresh_parsley = Ingredient.create(name: "Fresh Parsley", image: "https://chefsmandala.com/wp-content/uploads/2018/03/Parsley-Fresh-Flat-IT.jpg")
fresh_cilantro = Ingredient.create(name: "Fresh Cilantro", image: "https://cdn.shopify.com/s/files/1/0095/6258/7195/products/cilantro.jpg?v=1575429635")
fresh_mint = Ingredient.create(name: "Fresh Mint", image: "https://kitchenlily.com/wp-content/uploads/2020/01/How-to-store-mint-keep-it-fresh-for-long.jpg")
fresh_oregano = Ingredient.create(name: "Fresh Oregano", image: "https://envato-shoebox-0.imgix.net/25cf/1526-8c01-4216-a70d-c8c4a535866b/Canon_090919_0767.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=4b1919e16bdd65af461609858d6dfbb1")
fresh_basil = Ingredient.create(name: "Fresh Basil", image: "https://cdn.shopify.com/s/files/1/0257/5676/2202/products/AdobeStock_2353758_1024x1024.jpg?v=1579366807")

baby_spinach = Ingredient.create(name: "Baby Spinach", image: "https://solidstarts.com/wp-content/uploads/Spinach-for-Babies-scaled.jpg")
white_onion = Ingredient.create(name: "White Onion", image: "https://i5.walmartimages.com/asr/da6d7d4b-2004-4603-ad6a-38664278af05_1.cbba93cf3e8555bb2386d1f508ac2dd7.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff")
shallots = Ingredient.create(name: "Shallots", image: "https://assets.bonappetit.com/photos/57bf2ffc6a6acdf3485df79f/master/w_1600%2Cc_limit/shallot-silo.jpg")
green_onion = Ingredient.create(name: "Green Onion", image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_1078b6b8-f905-4e82-bb5d-f2d613bfa162.jpg")
garlic = Ingredient.create(name: "Garlic", image: "https://www.mcgill.ca/oss/files/oss/styles/hd/public/garlic.jpg?itok=GlTU4c3n&timestamp=1486146272")
tomatillos = Ingredient.create(name: "Tomatillos", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2019%2F10%2F01%2Ftomatillos-2000.jpg")
red_bell_pepper = Ingredient.create(name: "Red Bell Pepper", image: "https://m.media-amazon.com/images/S/assets.wholefoodsmarket.com/PIE/product/56ea234b340e3111001bffd6_365_-red-bell-peppers.1-copy.jpg")
yellow_bell_pepper = Ingredient.create(name: "Yellow Bell Pepper", image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_4fdf8171-7dae-458a-a500-ae2969af48fd.jpg")
fresh_fresno = Ingredient.create(name: "Fresh Fresno", image: "https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_5526c385-f34d-4c40-a6e8-8dcf7dae5c4a.jpg")
fresh_jalepeno = Ingredient.create(name: "Fresh Jalepeno", image: "https://holylandbrand.com/shop/wp-content/uploads/2020/09/jalapeno.jpg")
zucchini = Ingredient.create(name: "Zucchini", image: "https://i5.walmartimages.com/asr/33be66a0-cbfc-4d37-bd3f-38b06cfe39d6_1.a3a9085102f3a8f794f5965143a363c1.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff")
carrots = Ingredient.create(name: "Carrots", image: "https://media.istockphoto.com/photos/fresh-carrots-isolated-on-white-background-picture-id545454816?k=20&m=545454816&s=612x612&w=0&h=zTbL2GTPiWKU7kNyC1mqsQfbBvQIQNKtRgm_uLzUKkk=")

lime = Ingredient.create(name: "Lime", image: "https://chefsmandala.com/wp-content/uploads/2018/03/Lime-Whole-Half.jpg")

diced_tomatoes = Ingredient.create(name: "Diced Tomatoes", image: "https://www.jessicagavin.com/wp-content/uploads/2020/08/types-of-canned-tomatoes-diced-600x400.jpg")
chipotle_in_adobo = Ingredient.create(name: "Chipotle In Adobo", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2020%2F01%2FGettyImages-625853150-2000.jpg&q=85")
black_beans = Ingredient.create(name: "Black Beans", image: "https://www.isabeleats.com/wp-content/uploads/2020/01/how-to-cook-canned-black-beans-small-3.jpg")
kidney_beans = Ingredient.create(name: "Kidney Beans", image: "https://static8.depositphotos.com/1009864/929/i/950/depositphotos_9293175-stock-photo-canned-red-kidney-beans.jpg")

all_purpose_flour = Ingredient.create(name: "All Purpose Flour", image: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/flour-in-bowl-bread-flour-vs-all-purpose-flour-1611940896.jpg?crop=0.631xw:1.00xh;0.311xw,0&resize=640:*")
panko_breadcrumbs = Ingredient.create(name: "Panko Breadcrumbs", image: "https://www.chopstickchronicles.com/wp-content/uploads/2019/10/Panko-LR-edited-10-2-e1571979163688-500x500.jpg")
flour_tortillas = Ingredient.create(name: "Flour Tortillas", image: "https://www.cookingclassy.com/wp-content/uploads/2020/03/flour-tortillas-11.jpg")
wide_rice_noodles = Ingredient.create(name: "Wide Rice Noodles", image: "https://www.westpointnaturals.com/wp-content/uploads/2017/10/White-Rice-Noodles-Wide.jpg")
cheese_tortellini = Ingredient.create(name: "Cheese Tortellini", image: "https://www.maxdelivery.com/nkz/gifs/60084497.jpg")

parmesan = Ingredient.create(name: "Parmesan Cheese", image: "https://oliveoilmarketplace.com/wp-content/uploads/imported/Parmesan.jpg")
monterey_jack = Ingredient.create(name: "Monterey Jack Cheese", image: "https://static.onecms.io/wp-content/uploads/sites/9/2017/06/how-monterey-jack-got-its-name-fwx.jpg")

ground_beef = Ingredient.create(name: "Ground Beef", image: "https://embed.widencdn.net/img/beef/4hh1pywcnj/800x600px/Grind_Fine_85.psd?keep=c&u=7fueml")
italian_sausage = Ingredient.create(name: "Italian Sausage", image: "https://tasteofartisan.com/wp-content/uploads/2019/12/Italian-sausage-recipe-2-500x375.jpg")
skirt_steak = Ingredient.create(name: "Skirt Steak", image: "https://www.farm2fork.co.uk/wp-content/uploads/2016/05/Beef-Skirt-Steak.jpg")
salmon_filet = Ingredient.create(name: "Salmon Filet", image: "https://cdn.shopify.com/s/files/1/0066/8493/4205/products/scottish_salmon_2_large.jpg?v=1541976322")
shredded_rotisserie_chicken = Ingredient.create(name: "Shredded Rotisserie Chicken", image: "https://www.gimmesomeoven.com/wp-content/uploads/2013/09/Easy-Slow-Cooker-Shredded-Chicken-1.jpg")

conola_oil = Ingredient.create(name: "Canola Oil", image: "https://naturallivingfamily.com/wp-content/uploads/2017/05/canola-oil-nutrition-facts-pros-cons-what-you-need-to-know.jpg")
refined_sesame_oil = Ingredient.create(name: "Refined Sesame Oil", image: "https://www.gardeningknowhow.com/wp-content/uploads/2018/07/sesame-oil.jpg")
unsalted_butter = Ingredient.create(name: "Unsalted Butter", image: "https://fortmyersoliveoil.com/wp-content/uploads/2016/06/butter_2.jpg")
evoo = Ingredient.create(name: "Extra Virgin Olive Oil", image: "https://hakeemnatures.com/wp-content/uploads/2018/11/185042080.jpg")

red_wine_vinegar = Ingredient.create(name: "Red Wine Vinegar", image: "https://mk0nutritionadvxtj6i.kinstacdn.com/wp-content/uploads/2017/07/composition-of-red-wine-vinegar.jpg")
chicken_broth = Ingredient.create(name: "Chicken Broth", image: "https://keviniscooking.com/wp-content/uploads/2020/04/How-to-Make-Chicken-Stock-5.jpg")
dijon_mustard = Ingredient.create(name: "Dijon Mustard", image: "https://www.thespruceeats.com/thmb/POjGKVz1EfRY5F3LsAQjUgPJzaA=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-56110366-588542c43df78c2ccdafa3bc.jpg")
soy_sauce = Ingredient.create(name: "Soy Sauce", image: "https://thenymelrosefamily.com/wp-content/uploads/2019/11/homemade-soy-sauce-in-a-white-dish.jpg")
oyster_sauce = Ingredient.create(name: "Oyster Sauce", image: "https://fullofplants.com/wp-content/uploads/2021/04/vegan-oyster-sauce-vegetarian-mushroom-strir-fry-sauce-thumb-2.jpg")
fish_sauce = Ingredient.create(name: "Fish Sauce", image: "https://miro.medium.com/max/700/1*TJiNLOvmLBDrisNShh9B_g.jpeg")
honey = Ingredient.create(name: "Honey", image: "https://www.jessicagavin.com/wp-content/uploads/2019/02/honey-pin.jpg")

light_brown_sugar = Ingredient.create(name: "Light Brown Sugar", image: "https://woodlandfoods.com/img/WF_Images/H388-light-brown-sugar-main.jpg")
hershey_kisses = Ingredient.create(name: "Hershey Kisses", image: "https://www.candywarehouse.com/item-images/125880-01_hersheys-kisses-large-milk-chocolate-kisses-6-piece-box.jpg?resizeid=102&resizeh=500&resizew=500")
instant_coffee = Ingredient.create(name: "Instant Coffee", image: "https://www.takaski.com/wp-content/uploads/2019/06/UCC-The-Blend-114-Instant-Coffee-Made-in-Japan3.jpg")
red_wine = Ingredient.create(name: "Red Wine", image: "https://cdn.hiconsumption.com/wp-content/uploads/2017/02/Sempli-Vaso-Vino-Wine-Decanter.jpg")
light_lager = Ingredient.create(name: "Light Lager", image: "https://cdn.shopify.com/s/files/1/2785/6868/products/420x-ThisBeersForYou_ba6bd4e5-21b8-41d6-a21d-d01b47f2adbd_x700.jpg?v=1605567722")

puts "Creating Recipes..."
tortellini_soup = Recipe.create(user_id: 1, name: "Tortellini Soup", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/2/19/0/FN_Spinach-Tortellini-Soup_s4x3.jpg.rend.hgtvcom.826.620.suffix/1392869571244.jpeg", description: "Papaw's recipe; a favorite of his in his workplace cafeteria, he ate it every week and tried to recreate it until he honed in on this recipe.", ingredient_ids: [1, 2, 12, 13, 19, 20, 23, 32, 40, 41, 44, 51, 53])
enchiladas = Recipe.create(user_id: 2, name: "Chicken Enchiladas Roasted Tomatillo Salsa", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2007/2/22/0/tu0203_enchilada.jpg.rend.hgtvcom.826.620.suffix/1382538510662.jpeg", description: "The roasted vegetables in these enchiladas create a depth of flavor that you will just get lost in.", ingredient_ids: [1, 2, 6, 15, 20, 23, 24, 28, 31, 36, 38, 42, 47, 51, 53])
skirt_steak_chimichurri = Recipe.create(user_id: 1, name: "Grilled Skirt Steak with Green and Smokey Red Chimichurri", image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/22/0/QF0111H_grilled-skirt-steak-with-green-and-smokey-red-chimichurri_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371599786530.jpeg", description: "The red and green chimichurri compliment each other beuatifully. Perfect for an outdoor summer dinner date!", ingredient_ids: [1, 2, 3, 10, 14, 16, 17, 23, 33, 45, 48, 51, 52])
thai_thai_drunken_noodles = Recipe.create(user_id: 2, name: "Thai Drunken Noodles", image: "https://data.thefeedfeed.com/static/2020/02/28/15829232455e597dede79c2.jpg", description: "Get your veggies in AND get your pasta fix with this gluten free comfort bowl!", ingredient_ids: [18, 21, 22, 23, 25, 26, 28, 29, 30, 31, 39, 47, 49, 55, 56, 57, 58])

puts "Creating Recipe Ingredients..."
RecipeIngredient.create(recipe_id: 1, ingredient_id: 1, amount: 1, unit: "Tsp")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 2, amount: 1, unit: "Tsp")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 12, amount: 1, unit: "Tsp")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 13, amount: 1, unit: "Tsp")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 19, amount: 2, unit: "Cups")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 20, amount: 1, unit: "")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 23, amount: 2, unit: "Cloves")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 32, amount: 60, unit: "Oz")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 40, amount: 12, unit: "Oz")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 44, amount: 1, unit: "Lbs")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 51, amount: 2, unit: "Tbls")
RecipeIngredient.create(recipe_id: 1, ingredient_id: 53, amount: 48, unit: "Oz")

RecipeIngredient.create(recipe_id: 2, ingredient_id: 24, amount: 1, unit: "Lbs")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 20, amount: 1.5, unit: "")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 23, amount: 7, unit: "Cloves")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 28, amount: 2, unit: "")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 6, amount: 3.5, unit: "Tsp")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 1, amount: 3, unit: "Tsp")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 15, amount: 1, unit: "Cups")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 31, amount: 0.5, unit: "")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 51, amount: 2, unit: "Tbls")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 36, amount: 0.25, unit: "Cups")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 53, amount: 2, unit: "Cups")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 47, amount: 3, unit: "Cups")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 2, amount: 2, unit: "Tsp")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 38, amount: 10, unit: "")
RecipeIngredient.create(recipe_id: 2, ingredient_id: 42, amount: 0.5, unit: "Lbs")

RecipeIngredient.create(recipe_id: 3, ingredient_id: 45, amount: 1.5, unit: "Lbs")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 14, amount: 3, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 16, amount: 0.5, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 17, amount: 0.5, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 48, amount: 0.5, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 52, amount: 0.25, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 3, amount: 1.5, unit: "Tsp")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 23, amount: 11, unit: "Cloves")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 45, amount: 1.5, unit: "Lbs")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 51, amount: 0.5, unit: "Cups")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 17, amount: 2, unit: "Tbls")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 33, amount: 1, unit: "Tlbs")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 10, amount: 1, unit: "Tbls")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 1, amount: 2, unit: "Tbls")
RecipeIngredient.create(recipe_id: 3, ingredient_id: 2, amount: 1, unit: "Tbls")


RecipeIngredient.create(recipe_id: 4, ingredient_id: 39, amount: 8, unit: "Oz")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 55, amount: 0.33, unit: "Cup")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 56, amount: 3, unit: "Tbls")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 57, amount: 1, unit: "Tbls")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 58, amount: 2, unit: "Tsp")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 49, amount: 2, unit: "Tbsp")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 47, amount: 1, unit: "Cup")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 21, amount: 2, unit: "")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 23, amount: 3, unit: "Cloves")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 27, amount: 2, unit: "")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 29, amount: 1, unit: "")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 25, amount: 1, unit: "")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 30, amount: 2, unit: "")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 18, amount: 1, unit: "Cup")
RecipeIngredient.create(recipe_id: 4, ingredient_id: 22, amount: , unit: "")
# RecipeIngredient.create(ingredient_id: 1, recipe_id: 1, )
# recipe_ids = Recipe.all.map(&:id)
# ingredient_ids = Ingredient.all.map(&:id)
# amounts = [.2, .5, .75, 1, 2, 5]
# units = ['cups', 'teaspoons', 'tablespoons', 'pinch', 'pound', 'ounce']
# ingredient_ids.each do |i_id|
#   recipe_ids.each do |r_id|
#     RecipeIngredient.create(recipe_id: r_id, ingredient_id: i_id, amount: amounts.sample, unit: units.sample)
#   end
# end

puts "✅ Done seeding!"

