puts "🌱 Seeding..."
puts "Deleting old data..."
User.destroy_all
Ingredient.destroy_all

puts "Creating users..."
dan = User.create(username: "DannyLeeBeasley", password_digest: "TrickyPassword13!")
katie = User.create(username: "KatieBeasley", password_digest: "NeverGuess27!")

puts "Creating ingredients..."
tube_screamer = Pedal.create(name: "Ibanez TS808 Tube Screamer", effect_type: "overdrive", price: 100, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://m.media-amazon.com/images/I/713LJ9zI96L._AC_SS450_.jpg", category: "gain")
ocd = Pedal.create(name: "Fulltone OCD V2", effect_type: "overdrive", price: 140, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/2161/9961/products/Fulltone-effect-OCD.jpg?v=1520232597", category: "gain")
boss_delay = Pedal.create(name: "Boss DD-8 Digital Delay", effect_type: "delay", price: 170, stereo: true, number_of_inputs: 2, number_of_outputs: 2, image: "https://media.guitarcenter.com/is/image/MMGS7/DD-8-Digital-Delay-Effects-Pedal/L70091000000000-00-500x500.jpg", category: "time")
holy_grail = Pedal.create(name: "Electro-Harmonix Holy Grail", effect_type: "reverb", price: 130, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://www.bhphotovideo.com/images/images500x500/electro_harmonix_nholygrail_holy_grail_neo_digital_1135939.jpg", category: "time")
chorus_ensemble = Pedal.create(name: "Boss CE-5 Chorus Ensemble", effect_type: "chorus", price: 130, stereo: true, number_of_inputs: 1, number_of_outputs: 2, image: "https://static.roland.com/assets/images/products/gallery/ce_5_top_gal.jpg", category: "modulation")
phase_90 = Pedal.create(name: "MXR M101 Phase 90", effect_type: "phaser", price: 80, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/0202/0250/products/MXR_Phase90_front-stock.jpg?v=1419892027", category: "modulation")
polychrome = Pedal.create(name: "Walrus Audio Polychrome Analog Flanger", effect_type: "flanger", price: 200, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://cdn.shopify.com/s/files/1/0906/8480/files/Polychrome-cutout-front_700_1000x.png?v=1618320071", category: "modulation")
vertigo = Pedal.create(name: "Source Audio Vertigo Tremelo", effect_type: "tremelo", price: 170, stereo: true, number_of_inputs: 2, number_of_outputs: 2, image: "https://www.bhphotovideo.com/images/images1000x1000/source_audio_sa243_one_series_vertigo_tremolo_1331715.jpg", category: "modulation")
cry_baby = Pedal.create(name: "Dunlop Cry Baby Standard Wah GCB95", effect_type: "wah", price: 90, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://i.ebayimg.com/images/g/NA4AAOSwzl9f6c5p/s-l640.jpg", category: "modulation")
dyna_comp = Pedal.create(name: "MXR M-102 Dyna Comp Compressor", effect_type: "compressor", price: 80, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://www.pitbullaudio.com/media/catalog/product/1/6/16001102001.main.jpg?quality=100&bg-color=255,255,255&fit=bounds&height=&width=", category: "gain")
polytune = Pedal.create(name: "TC Electronic PolyTune Poly-Chromatic Tuner Pedal", effect_type: "reverb", price: 90, stereo: false, number_of_inputs: 1, number_of_outputs: 1, image: "https://m.media-amazon.com/images/I/71D+Kk+qkgL._AC_SS450_.jpg", category: "tuner")

puts "✅ Done seeding!"

