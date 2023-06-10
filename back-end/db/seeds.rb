require './app' # Assuming your Sinatra app file is named 'app.rb'
# Seed data for users
User.create(name: 'James Hue')
User.create(name: 'Dennis Smith')

# Seed data for foods
Food.create(
  name: 'UKRAINIAN BORSCHT ',
  image: 'https://wander-lush.org/wp-content/uploads/2022/11/UNESCO-food-culture-Ukrainian-Borscht.jpg',
  description: 'Borscht is hearty and nourishing. Its commonly based on a meat stock combined with sauteed vegetables including cabbage, potatoes and tomatoes. Dill, bay leaves, marjoram, horseradish, ginger and even prunes might be used for flavour. Sometimes beef or fish is added for protein, while others prefer to keep the dish vegetarian.Ukraine is commonly considered the home of borscht. Every region or oblast has its own distinctive recipe  for example in Kyiv, lamb is often added while in Lviv, cooks often use Vienna sausage.'
  likes: 2
  )
Food.create(
  name: 'BAGUETTE BREAD',
  image: 'https://wander-lush.org/wp-content/uploads/2022/12/UNESCO-food-culture-2022-French-Baguette-bread.jpg',
  description: 'The baguette - a long, thin baton of white bread - is a symbol of France and one of the country's most beloved food items. It's a tradition that goes all the way back to the reign of King Louis XIV in the 18th cenury.Traditionally, a French baguette (Baguette de Tradition Française) has only four ingredients: wheat flour, water ,yeast, and salt. It is baked daily in bakeries or boulangeries and consumed with almost every meal. A good baguette is around 65 centimetres in length and has a crunchy crust.'
  likes: 1
  )
Food.create(
  name: 'AL-MANSAF',
  image: 'https://wander-lush.org/wp-content/uploads/2022/12/UNESCO-food-culture-2022-Jordan-Mansaf.jpg',
  description: 'Mansaf or Al-Mansaf is the national dish of Jordan in the Middle East. It consists of lamb or chicken cooked in a rich sauce made from fermented yogurt with white rice or bulgur wheat.Mansaf traces its origins back to Bedouin culture. In the past, the end of inter-tribal conflicts would be marked only once leaders sacrificed an animal to prepare and eat Mansaf together. The dish continues to play an important socio-cultural role in Jordanian society even today.'
  likes: 5
  )
Food.create(
  name: 'WASHOKU',
  image: 'https://wander-lush.org/wp-content/uploads/2020/12/UNESCO-Food-Heritage-CanvaPro-Japan-meal.jpg',
  description: 'Japanese food is collectively referred to as Washoku. At its essence, it reflects a deep respect for nature, using natural, locally sourced ingredients such as rice, fish, vegetables and edible wild plants.'
  likes: 7
  )
Food.create(
  name: 'TURKISH COFFEE',
  image: 'https://wander-lush.org/wp-content/uploads/2020/12/UNESCO-Food-Heritage-CanvaPro-Turkish-coffee.jpg',
  description: 'Coffee was first introduced to the Ottoman Empire in the 15th century. It was an instant hit. From that point on, the Ottomans controlled coffee trading routes and were responsible for spreading coffee throughout the empire.'
  likes: 9
  )
Food.create(
  name: 'NSIMA',
  image: 'https://wander-lush.org/wp-content/uploads/2019/03/UNESCO-food-collab-2-2.jpg',
  description: 'In Malawi, its normally eaten with two accompaniments: A protein-heavy dish, and a vegetable dish. The protein dish can be meat, fish or beans, while the vegetable dish is usually a type of dark leafy green, such as mustard or pumpkin leaves.'
  likes: 19
  )
