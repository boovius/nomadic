User.delete_all
Tribe.delete_all

tribe = Tribe.create(
  name: "Nomadic",
  home_zip: "90210",
  work_zip: "90066"
  )

users = User.create([
  {
    tribe: tribe,
    first_name:"Count",
    last_name:"Dracula",
    work_zip: "90210",
    home_zip: "90066",
    uid: SecureRandom.hex,
    provider: "facebook"
  },
  {
    tribe: tribe,
    first_name:"Machiko",
    last_name:"Yoyo",
    work_zip: "90210",
    home_zip: "90066",
    uid: SecureRandom.hex,
    provider: "facebook"
  },
  {
    tribe: tribe,
    first_name:"Jboo",
    last_name:"Boovius",
    work_zip: "90210",
    home_zip: "90066",
    uid: SecureRandom.hex,
    provider: "facebook"
  },
  {
    tribe: tribe,
    first_name:"Nathues",
    last_name:"Bigshot",
    work_zip: "90210",
    home_zip: "90066",
    uid: SecureRandom.hex,
    provider: "facebook"
  },
  {
    tribe: tribe,
    first_name: "Benjamin",
    last_name: "Button",
    work_zip: "90210",
    home_zip: "90066",
    uid: SecureRandom.hex,
    provider: "facebook"
  }
  ])