User.destroy_all
Animation.destroy_all
Project.destroy_all

carlos = User.find_or_create_by(username:"Carlos", password:"password")
erin = User.find_or_create_by(username:"Erin", password:"password")
becka = User.find_or_create_by(username:"Becka", password:"password")
taylor = User.find_or_create_by(username:"Taylor", password:"password")
aaron = User.find_or_create_by(username:"Aaron", password:"password")

button1 = Animation.find_or_create_by(name:"Button1", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button2 = Animation.find_or_create_by(name:"Button2", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button3 = Animation.find_or_create_by(name:"Button3", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button4 = Animation.find_or_create_by(name:"Button4", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button5 = Animation.find_or_create_by(name:"Button5", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button6 = Animation.find_or_create_by(name:"Button6", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")
button7 = Animation.find_or_create_by(name:"Button7", settings:"{\"prct0\":{\"enabled\":true,\"prct\":\"0%\",\"left\":\"20%\",\"top\":\"20%\",\"transform\":{\"rotate\":\"0deg\",\"scale\":\"3.2, .2\",\"translate\":\"0px, 0px\",\"skew\":\"0deg, 0deg\"},\"filter\":{\"blur\":\"10px\",\"brightness\":\"0.0\",\"contrast\":\"10%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"0px 0px 0px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}},\"prct100\":{\"enabled\":true,\"prct\":\"100%\",\"left\":\"50%\",\"top\":\"50%\",\"transform\":{\"rotate\":\"110deg\",\"scale\":\"2.5, 1.0\",\"translate\":\"0px, 0px\",\"skew\":\"10deg, 10deg\"},\"filter\":{\"blur\":\"1px\",\"brightness\":\"1.0\",\"contrast\":\"100%\",\"greyscale\":\"0%\",\"hueRotate\":\"0deg\",\"dropShadow\":\"3px 3px 3px black\",\"invert\":\"0%\",\"opacity\":\"0%\",\"saturate\":\"0%\",\"sepia\":\"0%\"}}}")

proj1 = Project.find_or_create_by(name:"Project1", user_id: carlos.id, animation_id: button1.id)
proj2 = Project.find_or_create_by(name:"Project2", user_id: carlos.id, animation_id: button2.id)
proj3 = Project.find_or_create_by(name:"Project3", user_id: carlos.id, animation_id: button3.id)
proj4 = Project.find_or_create_by(name:"Project4", user_id: erin.id, animation_id: button4.id)