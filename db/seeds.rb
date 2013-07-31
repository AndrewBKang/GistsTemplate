# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

# a = User.new(username: "andrew")
# a.password = "password"
# a.save
b = User.new(username: "bob")
b.password = "password"
b.save
c = User.new(username: "charles")
c.password = "password"
c.save
Gist.create(body: "hi there", title: "greetings", user_id: 1)
Gist.create(body: "bye there", title: "farewell", user_id: 1)
Gist.create(body: "i like pie", title: "pies", user_id: 1)
Gist.create(body: "search engine fun", title: "google", user_id: 1)
Gist.create(body: "codecodecodecodecodecode", title: "appacademy", user_id: 1)
