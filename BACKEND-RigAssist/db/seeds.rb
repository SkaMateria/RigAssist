User.destroy_all
Animation.destroy_all
Project.destroy_all

carlos = User.find_or_create_by(username:"Carlos", password:"password")
erin = User.find_or_create_by(username:"Erin", password:"password")
becka = User.find_or_create_by(username:"Becka", password:"password")
taylor = User.find_or_create_by(username:"Taylor", password:"password")
aaron = User.find_or_create_by(username:"Aaron", password:"password")

button1 = Animation.find_or_create_by(name:"Button1", settings:"{rotateX: 20, color: blue, positionX: 3}")
button2 = Animation.find_or_create_by(name:"Button2", settings:"{rotateX: 20, color: blue, positionX: 3}")
button3 = Animation.find_or_create_by(name:"Button3", settings:"{rotateX: 20, color: blue, positionX: 3}")
button4 = Animation.find_or_create_by(name:"Button4", settings:"{rotateX: 20, color: blue, positionX: 3}")
button5 = Animation.find_or_create_by(name:"Button5", settings:"{rotateX: 20, color: blue, positionX: 3}")
button6 = Animation.find_or_create_by(name:"Button6", settings:"{rotateX: 20, color: blue, positionX: 3}")
button7 = Animation.find_or_create_by(name:"Button7", settings:"{rotateX: 20, color: blue, positionX: 3}")

proj1 = Project.find_or_create_by(name:"Project1", user_id: carlos.id, animation_id: button1.id)
proj2 = Project.find_or_create_by(name:"Project2", user_id: carlos.id, animation_id: button2.id)
proj3 = Project.find_or_create_by(name:"Project3", user_id: carlos.id, animation_id: button3.id)
proj4 = Project.find_or_create_by(name:"Project4", user_id: erin.id, animation_id: button4.id)