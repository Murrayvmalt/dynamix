//IP5 needs better IF conditionals
//writing strokes needs images 
//IP32 reset program

//input variables 
console.log("test github")
const interQuestions = [12, 12, 10, 10, 14, 14, 10, 16, 20, 12];
const interCheck = [];
const checkTally = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
submitButton = document.getElementById("form_button");
let studentID = document.querySelector("#studentID");
let scores = [];
let today = new Date();
let ipTotal = 6;
let ipActive = [];
//interactivities
let mmOut = "<h3>Mind move activities</h3>";
let interOut = "<h3>Intervention activities</h3>";
let reasses = "";
interButton = document.getElementById("inter_button");

//sets ip array to false for conditionals 
for(let i=0; i < ipTotal+1; i++){
    ipActive.push(false)
}

logChecklist()

//Iinput scores
const score = {
    
    dateCompleted : `${today.getDay()}/${today.getMonth()}/${today.getFullYear()}`,
    drawPerson : 0,
    romberg_test : 0,
    romberg_open : 0,
    romberg_closed : 0,
    oneLeg_test : 0,
    oneLeg_open : 0,
    oneLeg_closed : 0,
    strokes : [],
    engRead : 0,
    afrRead : 0,
    math : 0,
    spelling : 0,
    spelkart : 0, 
    checklist : interCheck
}

//Mind move outputs
const mindMoves = [

    mm0 = {
        title : " ",
        description : " ",
        picture : " ",
        link : " ",
        active : false

    },


    mm1 = {
        title : "3D Mouse Pad March",
        description : `•	Draw a large INFINITY SIGN on the ground and ask the learner to walk on the line. 
                    <br>•	Add some variety and play music while the learner walks around the edge of the shape until the music stops. 
                    <br>•	Do the same activity as above, with the learner balancing a bean bag on their head.
                    <img src="MM1_1.png">
                    <br>•	Delete the sign and place two chairs in the centre of where the circles were. Walk around the chairs in the shape of the infinity sign. 
                    <br>•	Take away the chairs and walk on the outline of an imaginary infinity symbol. Swing the arms rhythmically when the opposite leg steps forward and complete the infinity symbol.
                    <br>•	Continue walking around the edge with the right hand pointing to the left big toe and the left hand pointing to the right big toe.
                    <img src="MM1_2.jpg">
                    <br>•	Find a large, open space and place an interesting object two meters away at eye level. Look closely at the object and start walking around to the left. Move in a clockwise direction and complete the left half of the infinity sign. Then turn right and complete the right half of the infinity symbol without looking away from the object. Vary the height of the object - place it on the floor or the ceiling. Rhythmically walk the shape of the infinity sign without taking the eyes off the object.`,
        picture : "MM1_3.jpg",
        link : "https://www.youtube.com/watch?v=QjLw6gxpOTQ",
        active : false

    },

    mm2 = {
        title : "Abs Trainer",
        description : "The learner must lie flat on their back and touch the opposite elbow (or hand) and knee while turning the head up and down, and left and right. He then progresses to turning only the eyes (up and down, left and right, near and far) while moving the opposite arm and leg. This movement strengthens the core muscles for improved posture while freeing the arms and legs. It promotes crossing the visual and kinaesthetic midlines for easier drawing, writing and reading.",
        picture : "MM2.jpg",
        link : "https://www.youtube.com/watch?v=erCBmzGO3eQ",
        active : false

    },

    mm3 = {
        title : "Antennae Adjuster",
        description : "The learner needs to massage both ear lobes simultaneously from top to bottom using circular movements. This move develops the near senses, auditory processing, auditory perception as well as receptive language ability.",
        picture : "MM3.jpg",
        link : "https://www.youtube.com/watch?v=rud5NMSwmFg",
        active : false

    },

    mm4 = {
        title : "Arm Workout",
        description : "With the  learner standing  with their feet slightly apart, show the learner how to clasp the hands together, fingers intertwined and palms turned outwards. While keeping his body in the upright ‘string-of-beads’ position he has to extend the arms forward to lengthen the arm and shoulder muscles. After maintaining the extended position for a count of eight, the learner must repeat the process with the hands above the head. The hands then need to be dropped down against the body, with palms turned downwards, and then the process needs to be repeated. Let the learner unclasp the hands and move them behind his back and clasp and push the palms downwards, opening up the shoulders to lengthen and relax the muscles. This movement stimulates the muscle tone in the back, shoulders and hands for improved posture, hand-eye coordination and communication skills.",
        picture : "MM4.jpg",
        link : "https://www.youtube.com/watch?v=5o647nJBTZ8",
        active : false

    },

    mm5 = {
        title : "Bilateral Integrator",
        description : "Ask the learner to move his arms in a mirror image as though conducting a choir.  You can also encourage the learner to draw geometric shapes while moving the two hands in mirror image. This is a fun way to develop rhythm, eye-hand coordination, focal and peripheral vision, left and right integration in preparation for fluent speaking, reading and writing.",
        picture : "MM5.jpg",
        link : "https://www.youtube.com/watch?v=bzxirEGZHQw",
        active : false

    },

    mm6 = {
        title : "Bilateral walk",
        description : "Ask the learner to touch the left knee with his right hand, twisting the trunk to bring the opposite shoulder and hip towards each other, extending the other arm and leg. Now he needs to touch the right knee with the left hand, extending the other arm and leg. This movement stimulates left-right integration by crossing the lateral midline and is best done first lying down and then standing up. Repeat at least 10 times. The exercise can also be done while singing or doing some form of rote learning. This move integrates the left and right parts of the brain and body while crossing the midline. When eyes are moved into visual, auditory and kinaesthetic positions, this move also crosses all three midlines.",
        picture : "MM6.jpg",
        link : "https://www.youtube.com/watch?v=wqOpSJv_yo0",
        active : false

    },

    mm7 = {
        title : "Core Workout",
        description : `<b>LYING DOWN, EYES CLOSED</b><br>Step 1: Let the learner lie on his back. Tie a light blue ribbon on the left arm and left leg and a red ribbon on the right arm and right leg. Ask him to slowly move his left arm and leg as if tied together and turn his head to look at his left hand. Slowly move the right arm and leg as if tied together and turn his head to look at the right hand. Repeat 10 times.
                       <img src="MM7_1.jpg">
                       <br><b>Step 2:</b> Let the learner remain lying on their back and slowly move the head in the opposite direction of the extended arm and leg. Repeat 10 times. 
                       <img src="MM7_2.jpg">
                       <br><b>Step 3:</b> While still on their back, tie a light blue ribbon to the left arm and right leg, and a red ribbon to the right arm and left leg. Bring the red arm and leg together and extend the other arm and leg without any head movement. Then bring the blue arm and leg together without any head movement. Repeat 10 times. Relax.
                       <img src="MM7_3.jpg">
                       <br>Once steps 1-3 can be completed without difficulty, proceed to step 4. If not, repeat the first three steps daily until the sequence can be completed with ease. It may take weeks, and in the beginning, the learner may need help to move the appropriate arm and leg. Repeat this process patiently to build a strong foundation for all the other moves.
                       <br><b>Step 4:</b> Let the learner crawl straight towards you on all fours while moving his head to the left and the right.
                       <img src="MM7_4.jpg">
                       <br><b>STANDING, EYES CLOSED<b>
                       <br><b>Step 5:</b> Once the learner can do steps 1-4 with confidence and without hesitation while lying down, repeat steps 1-3 while standing and with his eyes closed.
                       <br><b>Step 6:</b> Move his opposite arm and leg together while following the shape of the infinity symbol with open eyes, but without any head movement.
                       <img src="MM7_5a.jpg">`,
        picture: "MM7_5b.jpg",//many
        link : "https://www.youtube.com/watch?v=DpxVVC-OBB0",
        active : false

    },

    mm8 = {
        title : "Finger Fight",
        description : "The learner must push the forefinger against the thumb, maintaining the pressure for a count of eight, then let go. Repeat for each finger. This move differentiates the parts of the hands. It also improves muscle tone in both hands, penmanship, fine motor control and communication skills.",
        picture : "MM8.jpg",
        link : "https://www.youtube.com/watch?v=z3iO_cLBrOs",
        active : false

    },

    mm9 = {
        title : "Focus Adjuster",
        description : `The learner must face forward, then focus on the thumb held at elbow distance.  Maintaining focus, the learner slowly brings the thumb to the tip of the nose then slowly out to arm’s length. Next, he must focus on the thumb and then on a point further away, and back on the thumb.  Bring the thumb back to the tip of the nose while continuing to focus on the thumb. Repeat 10 times. The learner must then rub his hands together and place them over the eyes. This move promotes near to far vision, focus in midfield, eye-hand coordination and visual perception.
                    <img src="MM9_1.jpg">
                    <img src="MM9_2.jpg">
                    <img src="MM9_3.jpg">
                    <img src="MM9_2.jpg">`,
        picture : "MM9_1.jpg",//many
        link : "https://www.youtube.com/watch?v=UGJoXmBpFos",
        active : false

    },

    mm10 = {
        title : "Hand Massage",
        description : `Firmly massage the learner’s hand by applying pressure to the muscles between the bones of the hand to relax the hand from wrist to fingers. Apply pressure to each finger from the base of the finger to the nail. Spread the palm of the hand wide open and hold it for eight seconds. Repeat with the other hand. This move improves muscle tone, proprioception, pencil grip, fine motor control and speech.
                      <img src="MM10_1.png">`,
        picture : "MM10_2.png",//many
        link : "https://www.youtube.com/watch?v=zIWVel9qOs8",
        active : false

    },

    mm11 = {
        title : "Homolateral walk",
        description : "The learner must slowly lift his left arm and leg together, with his head turned to look at the hand. He can then relax for a moment and then lift the right arm and leg with his head turned to the right side. Always follow this with a Bilateral Walk. This move develops hip flexion, the left and right brain, it interrupts reflexive movement and relieves impulsive and hyperactive movement.",
        picture : "MM11.jpg",
        link : "https://www.youtube.com/watch?v=HJU8yExIs9E",
        active : false

    },

    mm12 = {
        title : "Leg Workout",
        description : "The learner sits on a chair and straightens both legs in front while resting the heels of the feet on the floor. He then raises both legs off the floor and flexes and points both feet to become aware of any tightness in the calf muscles. He then rests the left leg on the floor and flexes the right foot and holds it for a count of eight in the flexed position. After relaxing the foot he raises the right foot again and flexes it for a count of eight. Repeat at least three times with the right foot, and then raise both legs off the floor and flex and point them to feel if there is any difference in the tightness of the calf muscles. Now the learner must rest the right foot on the floor and hold the left foot in a flexed position for a count of eight. Relax the foot and raise and flex the left foot again for a count of eight. Repeat this move at least three times with the left foot. Raise both legs off the floor. Flex and point both feet and be aware of any difference of tightness in the calf muscles. Horse-riding or walking on the heels could also help to lengthen the calf and hamstring muscles, reduce hyperactivity and improve impulse control.",
        picture : "MM12.jpg",
        link : "https://www.youtube.com/watch?v=ggKUfCdKuz4",
        active : false

    },

    mm13 = {
        title : "Mind Moves Massage",
        description : "Ask the learner to lie down and extend their arms at 90˚ angles to the side of the body. <br>Place your hands (or two soft balls), on top of the learner’s head.<br>Trace the outline of the learner’s body firmly and simultaneously in mirror-image.<br>Change your body position to trace under the hands and arms, and down the sides of the body.<br>Ask the learner to raise their knees with their feet on the floor, plant the feet firmly on the ground for eight seconds.<br>Repeat at least three times.",
        picture : "MM13.jpg",
        link : "https://youtu.be/tzM3XFS_RyM",
        active : false

    },

    mm14 = {
        title : "Mind Moves Massage",
        description : `At the Mind Moves Institute, we have found that learners who experience barriers to learning progress faster when the proprioceptors in the body and the gravitational receptors under the feet are stimulated. This is done when the silhouette of their body is firmly traced and their feet are planted firmly on the ground.
        <img src="MM14_1.jpg">
        <img src="MM14_2.jpg">
        <img src ="MM14_3.jpg"`,
        picture : "",//many
        link : "https://www.youtube.com/watch?v=m3wpkGVJ_8A",
        active : false

    },

    mm15 = {
        title : "Mouse pad",
        description : "The learner has to focus on the thumb held at elbow distance from the eyes, then move the thumb upwards, first around the left eye and then around the right eye outlining the shape of an infinity sign. Repeat five times. The learner must then swop hands and repeat the same process, always first drawing a circle around the left eye and then around the right eye. This move stimulates the visual, auditory and kinaesthetic receptive ability while crossing the midline to integrate the left and right parts of the brain and body. It develops eye-hand coordination and visual integration.",
        picture : "MM15.jpg",
        link : "https://www.youtube.com/watch?v=VmkSv8F5kQs",
        active : false

    },

    mm16 = {
        title : "Neck flexor",
        description : `The learner must stand up straight, imagining that his neck and spine are a ‘string-of-beads’. He then needs to pull at the imaginary string above the head until the beads hang in a straight line. He can now slowly turn the head as far to the left as possible, holding it in the extended position for a count of eight. Then slowly turn the head as far to the right as possible, keeping the spine straight, and holding it in the extended position for a count of eight. The learner’s hips and shoulders should face forward while only the head rotates. This movement relaxes the tension in the neck and shoulders to free up eye movement and improve listening skills. The vestibular stimulation also improves crossing the visual, auditory and kinaesthetic midlines, as well as posture and balance when done with eyes closed and eyes open.
                    <img src="MM16_1.jpg">`,
        picture : "MM16_2.jpg",//many,
        link : "https://www.youtube.com/watch?v=hQpfA6TUY1E",
        active : false

    },

    mm17 = {
        title : "Neck rotator",
        description : "The learner must stand up straight, imagining that his neck and spine are a ‘string-of-beads’. He then needs to pull at the imaginary string above the head until the beads hang in a straight line. He can now slowly turn the head as far to the left as possible, holding it in the extended position for a count of eight. Then slowly turn the head as far to the right as possible, keeping the spine straight, and holding it in the extended position for a count of eight. The learner’s hips and shoulders should face forward while only the head rotates. This movement relaxes the tension in the neck and shoulders to free up eye movement and improve listening skills. The vestibular stimulation also improves crossing the visual, auditory and kinaesthetic midlines, as well as posture and balance when done with eyes closed and eyes open.",
        picture : "MM17.jpg",
        link : "https://www.youtube.com/watch?v=9L-RaP8g1JY",
        active : false

    },

    mm18 = {
        title : "Palm Stretch",
        description : `Ask the learner to extend the fingers as wide as possible for a count of eight, then relax. Make a tight fist, hold for a count of eight and relax. This move improves muscle tone in the hands, penmanship, fine motor control and bilateral integration. It also promotes fluent speech.
                        <img src="MM18_1.jpg">`,
        picture : "MM18_2.jpg",//many
        link : "https://www.youtube.com/watch?v=12SGfygX9MU",
        active : false

    },

    mm19 = {
        title : "Rise and Shine",
        description : `Stand behind the learner. With the learner’s arms wide open guide his arms to close over his chest to hug and accept himself, while the parent simultaneously gives him a sincere and affirming hug. Breathe deeply and slowly. Do a few of these hugs to enable a learner to rise in posture and shine with confidence. 
                    <img src="MM19_1.jpg">`,
        picture : "MM19_2.jpg",//many
        link : "https://www.youtube.com/watch?v=dnu7TxTc-7g",
        active : false

    },

    mm20 = {
        title : "Spine stretch",
        description : "For this Mind Move the learner will lie flat on his stomach on the floor with his arms relaxed down at the sides. He then needs to breathe in slowly while the core muscle action pushes his head and shoulders off the floor, freeing the arms and hands. He has to keep his feet on the floor and his upper body suspended in the air for a count of eight.  He then turns his head from left to right, and while slowly breathing out, lower his body until it relaxes on the floor. This movement strengthens the core muscles and separates the head action from the arm action. It promotes visual integration through crossing the midline and working in the midfield, resulting in improved drawing, writing and reading skills.",
        picture : "MM20.jpg",
        link : "https://www.youtube.com/watch?v=ngAM_AOtRG4",
        active : false

    },

    mm21 = {
        title : "Spine Walk",
        description : 'The learner must lie on the floor on his back and "walk" with the hips and shoulders bending towards one side then the other while the back stays glued to the floor. (Be careful of carpet burns!) This movement strengthens the core muscles and inhibits the Spinal Galant Reflex, to promote sitting still, sitting upright, focus and concentration.',
        picture : "MM21.jpg",
        link : "No video",
        active : false

    },

    mm22 = {
        title : "Temporal Toner",
        description : "Starting in front of the ears, the learner must use both hands simultaneously, gently tapping upwards around the ears. This movement promotes temporal lobe stimulation to improve listening skills, auditory perception, vestibular stimulation, proprioception and balance. It also promotes integration between listening and communicating both in verbal and written form.",
        picture : "MM22.jpg",
        link : "https://www.youtube.com/watch?v=R_wgE1CJ1Lo",
        active : false

    },

    mm23 = {
        title : "Trunk Rotator",
        description : "Ask the learner to lie flat on his back and spread the arms wide and bend and raise the knees to hip level, with feet on or close to the floor. Slowly drop the knees to the left until the left knee touches the floor, and then to the right until the right knee touches the floor. The learner’s shoulders and lower back should stay glued to the floor and feet should remain down in the middle. This movement strengthens the core muscles while separating the shoulder action from the hip action to promote sitting, focus and concentration. It also forms the basis for crossing the lateral midline.",
        picture : "MM23.jpg",
        link : "https://www.youtube.com/watch?v=7KfiHwO32xM",
        active : false

    },

    mm24 = {
        title : "Visual workout",
        description : `The learner has to keep his head straight and look at one thumb, held at elbow distance from the eyes. He then moves the thumb to the left (at nose level), and then slowly to the right, crossing the visual midline. He first has to do this with the eyes closed, imagining the position of the thumb. He then opens the eyes and checks whether the eyes and thumb are in the same position. Repeat this movement five times and then repeat it five times with the eyes open. The learner must now repeat this exercise with the thumb held up and eyes turned up into a visual position (without turning the head), first with his eyes closed and then with his eyes open. He then repeats the exercise with the thumb and eyes down into a kinaesthetic position, first closed and then open. Rub the hands together briskly and place the warm palms over the eyes to relax them. This move stimulates easy transition between visual, auditory and kinaesthetic learning. It promotes eye-hand coordination and crossing the lateral midline.
                    <img src="MM24_1.jpg">`,
        picture : "MM24_2.jpg",//many
        link : "https://www.youtube.com/watch?v=vku4f_JXo74",
        active : false

    }
]

//intervention activies output + score keeping heading 4 missing
interActivities = [
    
    //done
    ia0 = {
        heading : "zero",
        active : false,
        score : 0,
        maxScore : 100,
        activities : [
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false 
            }
        ]
    },

    //tagged
    ia1 = {
        heading : "Stable NEURO DYNAMIX Balance Bars",
        active : false,
        score : 0,
        maxScore : 26,
        activities : [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_0"
            },

            ia1_1 = {
                description : "Use the 3 bars to create a straight balance beam that is flat on the ground and walk the length of the beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_1" 
            },

            ia1_2 = {
                description : "As confidence increases, walk backwards and sideways on the straight balance beam that is flat on the ground", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_2" 
            },

            ia1_3 = {
                description : "Add a beanbag either on their head or between the chin and neck to increase the challenge level", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_3" 
            },

            ia1_4 = {
                description : "Jump off the last beam, at first small jumps, then larger jumps and into a hoop or over an obstacle (or two)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_4" 
            },

            ia1_5 = {
                description : "Create a straight balance beam elevated off the ground and walk the length of the beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_5" 
            },

            ia1_6 = {
                description : "Walk forwards, backwards and sideways on a straight balance beam elevated off the ground", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_6" 
            },

            ia1_7 = {
                description : "Dip walk (walk and dip one foot pointed to the side of the beam and touching the ground)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_7" 
            },

            ia1_8 = {
                description : "Walk on tippy-toes: forwards, backwards and sideways", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_8" 
            },

            ia1_9 = {
                description : "Combine any of these activities with a beanbag either on their head or between the chin and neck to increase the challenge level", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_9" 
            },

            ia1_10 = {
                description : "Jump down the beam, at first small jumps and then larger jumps and into a hoop or over an obstacle (or two)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_10"
            },

            ia1_11 = {
                description : "Kick walk", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_11" 
            },

            ia1_12 = {
                description : "Kick walk on tippy-toes", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_12"
            },

            ia1_13 = {
                description : "To stimulate creativity skills, learners can play imagination games, such as pretending they are crossing a river full of crocodiles; are walking on a slippery surface; are walking through goo; walk like a giant/tiny mouse, gallop or skip", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia1_13" 
            }
                
        ]
    },

    //done
    ia2 = {
        heading : "Stable NEURO DYNAMIX Balance Bars and changing directions Balance Bars",
        active : false,
        score : 0,
        maxScore : 16,
        activities: [

            ia2_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_0" 
            },

            ia2_1 = {
                description : "Position each of the bars in a zig-zag pattern", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_1" 
            },

            ia2_2 = {
                description : "Position each of the bars angled to the LEFT so that the learner turns only to the LEFT while walking on the balance beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_2" 
            },

            ia2_3 = {
                description : "Position each of the bars to the RIGHT so that the learner turns only to the RIGHT while walking on the balance beams", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_3" 
            },

            ia2_4 = {
                description : "Place a hoop in the middle of a straight balance beam.  The learner walks in a straight line on the beam, bends, climbs through the hoop while still on the balance beam, stands up straight and walks to the end of the balance beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_4" 
            },

            ia2_5 = {
                description : "Add a beanbag on the head or tucked in under the chin to raise the challenge level", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_5" 
            },

            ia2_6 = {
                description : "Put beanbags in a straight line, about one step apart, three beanbags per bar so the learner can step from one beanbag to the next. They need to stand to regain their balance before taking the next step. Stepping onto the beanbag that is on the balance bar, means they balance twice", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_6" 
            },

            ia2_7 = {
                description : "Place one beanbag on each of the bars and let the learner walk to a beanbag, grasp it with the toes of one foot and pass it to the learner’s hand while maintaining balance. Walk on and do the same with the other two beanbags. Stop at the end of the last balance bar and throw the beanbags in a hoop or container, throw them one by one", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_7" 
            },

            ia2_8 = {
                description : "Put a hula hoop flat on the ground, then a stable balance beam, then another hoop. The learner needs to jump in the hoop with two feet together, walk heel-toe on the balance beam, jump off the balance beam and out of the hoop with two feet together. ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia2_8" 
            }
        ]

    },  

    //done
    ia3 = {
        heading : "UNSTABLE NEURO DYNAMIX BALANCE BARS",
        active : false,
        score : 0,
        maxScore : 14,
        activities: [
            
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_0"
            },

            ia3_1 = {
                description : "Put one of the bars on a stable surface (LOW side first). Learners will have to step on the LOW side so the bar stays stable. They need to take the next step that will tip the bar upward and then stabilise before stepping off the bar. Go slowly and safely to allow them the opportunity to gain confidence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_1" 
            },

            ia3_2 = {
                description : "Put one of the bars on a stable surface (HIGH side first). Learners will have to step on the HIGH side which will tip the other side of the bar upward. They need to stabilise and take the next step that will tip the bar downward and stabilise before stepping off the bar. Go slowly and safely to allow them the opportunity to gain confidence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_2" 
            },

            ia3_3 = {
                description : "Use two bars and put the first bar on a stable surface (HIGH side first), the second bar with the LOW side first. A learner will have to step onto the HIGH side first that will tip the other side of the bar upward. They need to stabilise and take the next step that will tip the bar downward and stabilise before stepping onto the next bar with the LOW side first so the second bar stays stable. The next step will tip the bar. They need to stabilise before stepping off the bar. Go slowly and safely to allow them the opportunity to gain confidence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_3" 
            },

            ia3_4 = {
                description : "Put one of the bars on a stable surface (LOW sides first). Learners will have to step onto the LOW bar and take the next step that will tip the bar downward. Stabilise before stepping onto the next bar with the HIGH side first. This creates lots of instability and even some anxiety - be there to support them. They need to stabilise before taking the next step that will lower the bar before stepping off the bar. Go slowly and safely to allow them the opportunity to gain confidence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_4" 
            },

            ia3_5 = {
                description : "Put the three NEURO DYNAMIX Balance Bars (HIGH sides first) in a straight line. Learners will have to step on the HIGH side that will tip the other side of the bar upward. They need to stabilise and take the next step that will tip the bar downward and stabilise before stepping onto the next bar that will tip that bar. Go slowly and safely", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_5" 
            },

            ia3_6 = {
                description : "Use one of the NEURO DYNAMIX Balance Bars and two hoop stands. Turn the balance bar on its side and fit each end of the balance bar into the two hoop stands to create a raised obstacle. Place this obstacle between any of the unstable bars positioned in a way you think is fit to raise the challenge level of three consecutive unstable bars. Slow and rhythmic walking shows skill while rushing means that momentum and not the vestibular system is doing the job", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_6" 
            },

            ia3_7 = {
                description : "Place the three NEURO DYNAMIX Balance Bars at different angles to each other to challenge the vestibular system to pay even more attention to changes in direction, stability, height and sequence.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia3_7" 
            }
        ]

    }, 

    //done
    ia4 = {
        heading : "",
        active : false,
        score : 0,
        maxScore : 52,
        activities: [
            
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_0" 
            },

            ia4_1 = {
                description : "Throw and catch a beanbag up and down. Throw just hard enough to be able to catch it again", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_1" 
            },

            ia4_2 = {
                description : "Throw and catch a beanbag to another learner. Judge direction, weight, speed and distance to reach the other learner", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_2" 
            },

            ia4_3 = {
                description : "Play musical chairs with a beanbag, but instead of moving along the chairs, a beanbag is passed around", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_3" 
            },

            ia4_4 = {
                description : "Beanbags are useful for developing balance. Put beanbag on head, arms wide like aeroplane arms, walk on balance beam, stable and unstable", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_4" 
            },

            ia4_5 = {
                description : "Put beanbag under the chin and hold it tight with the chin, arms wide, walk along the NEURO DYNAMIX Balance Beam, stable and unstable", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_5" 
            },

            ia4_6 = {
                description : "Put one beanbag on each shoulder, walk along the NEURO DYNAMIX Balance Beam and concentrate on keeping the beanbags on the shoulders (beanbag should not fall off)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_6" 
            },

            ia4_7 = {
                description : "Open the arms wide, bend them at the elbow, put one beanbag on top of each elbow, and walk on the NEURO DYNAMIX Stable and Unstable Balance Beams", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_7" 
            },

            ia4_8 = {
                description : "Put a beanbag on the head and one on each shoulder and walk on the NEURO DYNAMIX Stable and Unstable Balance Beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_8" 
            },

            ia4_9 = {
                description : "Walk on the stable and unstable balance beam while throwing and catching the beanbag. If the beanbag falls, they must bend down, pick it up and continue without losing balance", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_9" 
            },

            ia4_10 = {
                description : "Throw a beanbag from one hand to the other while walking on the stable and unstable NEURO DYNAMIX Balance Beam", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_10" 
            },

            ia4_11 = {
                description : "Put beanbags in a zigzag line or a curved line. The learner must step on the beanbags", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_11" 
            },

            ia4_12 = {
                description : "Encourage the learners to put their hands on their hips and jump with both legs together over each beanbag and land between the beanbags", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_12" 
            },

            ia4_13 = {
                description : "Place beanbags a distance apart on the ground. The learner should walk from beanbag to beanbag, STOP, grasp the beanbag with their toes and throw it into, or through, a hula hoop", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_13" 
            },

            ia4_14 = {
                description : "Ask the learner to balance a beanbag on his head while lowering the body to pick up another beanbag on the ground then throw it into a bucket", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_14" 
            },

            ia4_15 = {
                description : "Let the learners race against one another while balancing beanbags on their heads", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_15" 
            },

            ia4_16 = {
                description : "Put a pile of colourful beanbags on one side of the playground and a bucket or hoop on the other. Encourage the learners to choose a beanbag and be creative in the way they move the beanbag to the bucket. They can hop, run, jump, crawl, or skip while holding the beanbag, balancing it on the head, another body part or even a spoon", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_16" 

            },
            ia4_17 = {
                description : "Throw a beanbag into a specific target, like a hula hoop, a basket or a bucket", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_17" 
            },

            ia4_18 = {
                description : "Throw a beanbag over a hula hoop in a stand into a basket or bucket", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_18" 
            },

            ia4_19 = {
                description : "Ask a learner to use the right hand to throw a few beanbags across the body into a hula hoop, a basket or bucket on his left side. Start with the learner’s dominant hand. Collect the beanbags and use the non-dominant hand to throw a few beanbags across the body into a hula hoop, a basket or bucket on his opposite side to the non-dominant hand", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_19" 
            },

            ia4_20 = {
                description : "Encourage the learners to throw a beanbag into the air and clap before catching the beanbag", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_20" 
            },

            ia4_21 = {
                description : "Ask the learners to throw a beanbag into the air and jump before catching the beanbag", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_21" 
            },

            ia4_22 = {
                description : "Encourage the learners to throw a beanbag into the air, clap and turn before catching the beanbag", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_22" 
            },

            ia4_23 = {
                description : "Practice juggling skills - use 2 beanbags, juggle them and see how long the learner can keep the beanbags in the air ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_23" 
            },

            ia4_24 = {
                description : "Play some music and let the learner dance while throwing the beanbag at each other. When the music stops, they need to freeze.  If the beanbag is dropped during the freeze, that learner is ‘out’", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_24" 
            },

            ia4_25 = {
                description : "Let a few learners stand in a line with a bucket full of beanbags in front of them. The learner first in the line grabs a beanbag, passes it to the learner behind him overhead, the next one passes the bag under the legs, and repeat the over-and-under-passing until the last learner gets the beanbag and runs to the front. Repeat the process", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_25" 
            },

            ia4_26 = {
                description : "Sing a song, say a rhyme, repeat bonds or times tables while rhythmically throwing and catching a beanbag. ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia4_26" 
            },            
        ]

    }, 

    //done
    ia5 = {
        heading : "Hula Hoops",
        active : false,
        score : 0,
        maxScore : 18,
        activities: [
            
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_0" 
            },

            ia5_1 = {
                description : "Start hooping and see in what direction the hoop is turning, then start walking around in circles, following the hoop’s direction", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_1" 
            },

            ia5_2 = {
                description : "Walk back and forth or side to side while hooping", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_2" 
            },

            ia5_3 = {
                description : "Place the hoop around different parts of the body – the neck, wrist, ankle, etc", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_3" 
            },

            ia5_4 = {
                description : "Hoop around one hand and then bring the other hand in and keep on hooping with hands together.  After a while take out the first hand and keep on hooping", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_4" 
            },

            ia5_5 = {
                description : "Lie down on your back, lift both your legs and first hoop around both legs, then take  one leg out of the hula hoop and keep hooping around the other, then change legs while hooping. This is challenging, but don’t shy away from this activity. You may want to do the Mind Moves Core Workout for a few weeks to strengthen the core before attempting to hoop around the legs", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_5" 
            },

            ia5_6 = {
                description : "See who can keep the hoop around their waist the longest", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_6" 
            },

            ia5_7 = {
                description : "Encourage the learner to roll a hoop with their dominant hand until it falls over, and measure the distance or time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_7" 
            },

            ia5_8 = {
                description : "Rolling the hoop by tracing a line drawn with chalk", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_8" 
            },

            ia5_9 = {
                description : "Use a hula hoop to learn to skip with a rope. The solid arc of the hoop makes timing more predictable and the hoop does not get tangled up like the rope sometimes does", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia5_9" 
            }
        ]

    }, 

    //done
    ia6 = {
        heading : "NEURO DYNAMIX Hoop Stand",
        active : false,
        score : 0,
        maxScore : 18,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_0" 
            },

            ia6_1 = {
                description : "Place a hoop firmly in a NEURO DYNAMIX Hoop Stand on the floor. Encourage a learner to crawl on all fours through the hoop", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_1" 
            },

            ia6_2 = {
                description : "Encourage the learner to find as many creative ways as possible to move through the hoop and reward their effort with enthusiasm", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_2" 
            },

            ia6_3 = {
                description : "Place a hoop firmly in a NEURO DYNAMIX Hoop Stand and place it on top of a chair or table. The learner must stand 2m away, aim and throw a ball or beanbag through the hoop. Once they are successful at this distance, encourage the learner to take one step back, aim and throw a ball or beanbag through the hoop. Their posture must be upright to show that they throw with the arm, their posture mustn’t be bent suggesting that the learner is using their whole upper body to throw", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_3" 
            },

            ia6_4 = {
                description : "Put the hoop firmly in the NEURO DYNAMIX Hoop Stand on the ground. Encourage the learner to kick a ball through the hoop. Looking for the ball, looking at the hoop and kicking the ball through the hoop promotes visual-motor coordination", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_4" 
            },

            ia6_5 = {
                description : "Two learners work together and use one ball and a hoop in the NEURO DYNAMIX Hoop Stand on a chair. Each learner stands on opposite sides of the hoop and throws the ball to the other through the hoop. If there is only one learner the hoop can be placed a meter from a wall so the ball can bounce back for the learner to track and catch", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_5" 
            },

            ia6_6 = {
                description : "Use the hoops and stands with beanbags and balance beams to create a complex obstacle course", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_6" 
            },

            ia6_7 = {
                description : "Like the two chairs shown in the diagram place two hoops in the two NEURO DYNAMIX Hoop Stands and place the stands two meters apart. Take one beanbag and stand between the two hoop stands, one to your LEFT and one to your RIGHT. Walk two meters forwards, turn and look at the hoops in the hoop stands. Put the beanbag down to indicate where you must stand. The learner must start on the far side of the hoop stand that is to your RIGHT and look over their shoulder at you with their bodies turned away from you. While still looking at you, they walk around the hoops, between the hoops, around the hoop to your LEFT and back to the beginning. It may be helpful to first swop places: ask the learner to stand in your place while you demonstrate how you want them to walk around the hoops in stands. (Mind Moves: 3D Mouse Pad March).", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_7" 
            },

            ia6_8 = {
                description : "Once the learner has mastered walking around the hoops without taking their eyes off you, encourage the learner to gallop and then skip around the hoops in the NEURO DYNAMIX Hoop Stands", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_8" 
            },

            ia6_9 = {
                description : "Use one of the NEURO DYNAMIX Balance Bars and two NEURO DYNAMIX Hoop Stands. Turn the balance bar on its side and fit each end into the two hoop stands to create a thin, raised balance beam. Encourage the learner to step on the raised beam and walk heel-to-toe to the end. Slow and rhythmic walking shows skill while rushing means that momentum and not the vestibular system is doing the job.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia6_9" 
            }
        ]

    }, 

    //done
    ia7 = {
        heading : "NEURO DYNAMIX STEPPERS",
        active : false,
        score : 0,
        maxScore : 14,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_0"
            },

            ia7_1 = {
                description : "Step on the steppers and walk forwards, backwards and sideways, while keeping the ropes taut and the steppers against the feet", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_1" 
            },

            ia7_2 = {
                description : "Walk in circles to the left, STOP, and walk in circles to the right", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_2" 
            },

            ia7_3 = {
                description : "Play some music and encourage the learner to march to the beat of the music", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_3" 
            },

            ia7_4 = {
                description : "Once the learners have gained confidence, let them walk on different kind of surfaces like sand, tar, paving or grass to experience the difference in sensory feedback from the surfaces", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_4" 
            },

            ia7_5 = {
                description : "Use chalk or masking tape to create a writing pattern to make it more challenging", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_5" 
            },

            ia7_6 = {
                description : "Design an obstacle course together with low and small obstacles like stepping over beanbags, into and out of a hula hoop on the floor or over a stable balance bar supported by two NEURO DYNAMIX Hoop Stands", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_6" 
            },

            ia7_7 = {
                description : "Place two hoops in the two NEURO DYNAMIX Hoop Stands and place the stands two meters apart. Take one beanbag and stand between the two hoop stands, one to your LEFT and one to your RIGHT. Walk two meters forwards, turn and look at the hoops in the hoop stands. Put the beanbag down to indicate where you must stand. The learner must start on the far side of the hoop stand that is to your RIGHT and look over their shoulder at you with their bodies turned away from you. The learner needs to step onto the steppers and while looking at you, walk around the hoops, between the hoops, around the hoop to your LEFT and back to the beginning.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia7_7" 
            }

        ]

    }, 

    //done
    ia8 = {
        heading : "NEURO DYNAMIX Step-and-Catch",
        active : false,
        score : 0,
        maxScore : 14,
        activities: [
            
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_0" 
            },
            
            ia8_1 = {
                description : "The learner puts a beanbag on the front end and stands behind the raised side of the wooden bar and steps down on the raised side flipping the beanbag into the air. The learner needs to catch it. The learner will need time to experiment where to step to flip the beanbag the best and how hard to step to flip it just hard enough to catch", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_1" 
            },
            ia8_2 = {
                description : "The learner needs to step so hard that the learner gets a chance to clap once before catching the beanbag", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_2" 
            },
            ia8_3 = {
                description : "As the learner becomes more proficient, encourage the learner to turn around - the learner steps, turns around and then catches the beanbag. Make sure the learner sometimes turns to the left and sometimes to the right so that they can turn left or right equally easily and catch in time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_3" 
            },
            ia8_4 = {
                description : "An advanced activity would be to step, turn, clap, catch. Turning the eyes up to search and find the beanbag activates many of the brain circuitry needed for the visual part of writing and reading", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_4" 
            },
            ia8_5 = {
                description : "There is a natural progression in these activities from a two-hand catch against the body to a two-hand catch away from the body, followed by catching with the dominant hand to catching with the non-dominant hand to catching with a nominated hand. A nominated hand is a hand someone else calls out (left hand or right hand) as the learner steps on the bar", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_5" 
            },
            ia8_6 = {
                description : "Repeating all the activities above with a ball, for example, a tennis ball, which offers a whole new set of variables that the learner needs to adjust to. Using a heavier ball like a cricket ball or a smaller ball like a golf ball keeps this activity challenging for many months as it is strongly suggested that a learner only progresses to a new level of a challenge once the learner has mastered the previous activity with confidence, speed and agility", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_6" 
            },
            ia8_7 = {
                description : "To develop collaboration and teamwork one learner steps down on the launch bar and the other learner catches the beanbag or variety of balls.  ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia8_7" 
            }
        ]

    }, 

    //done
    ia9 = {
        heading : "NEURO DYNAMIX Skipping Rope",
        active : false,
        score : 0,
        maxScore : 12,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_0" 
            },

            ia9_1 = {
                description : "Jump forward both feet together, 10 consecutive times and uninterruptedly", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_1" 
            },

            ia9_2 = {
                description : "Jump backwards both feet together,10 consecutive times and uninterruptedly", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_2" 
            },

            ia9_3 = {
                description : "Jump with one foot leading, 10 consecutive times and uninterruptedly. ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_3" 
            },

            ia9_4 = {
                description : "Jump along a path and over different terrain with one foot leading", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_4" 
            },

            ia9_5 = {
                description : "Jump on the same spot with both feet together while singing a song", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_5" 
            },

            ia9_6 = {
                description : "Jump on the same spot with both feet together while, while learning the times tables ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia9_6" 
            }
        ]

    }, 

    //done
    ia10 = {
        heading : "NEURO DYNAMIX Building Blocks",
        active : false,
        score : 0,
        maxScore : 32,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_0" 
            },

            ia10_1 = {
                description : "Place the block to the left of the learner sitting at a table. Count the blocks, by picking up a block on the left and placing it to the right of the learner without passing the block from one hand to another. Encourage the learner to alternate the hand that picks up a block on the left and places it on the right of their body.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_1" 
            },

            ia10_2 = {
                description : "Use a blindfold and match, sort and group the NEURO DYNAMIX Building Blocks according to shape", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_2" 
            },

            ia10_3 = {
                description : "While still blindfolded touch and name the shapes.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_3" 
            },

            ia10_4 = {
                description : "Add the blocks from the NEURO DYNAMIX Shape and Number Board and Visual Motor Board to the building blocks. Blindfold the learner. Now match, sort and group the blocks according to shape", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_4" 
            },

            ia10_5 = {
                description : "Use your phone and time how long it takes the learner to match, sort and group the blocks according to shape with a blindfold.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_5" 
            },

            ia10_6 = {
                description : "Encourage the learner to improve their time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_6" 
            },

            ia10_7 = {
                description : "Match, sort and group the blocks according to size. As there is more than one answer it teaches estimation and decision making", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_7" 
            },

            ia10_8 = {
                description : "Match, sort and group the blocks according to size while blindfolded. These two groupings may differ, discuss why? Open ended questions stimulate critical thinking skills", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_8" 
            },

            ia10_9 = {
                description : "Use the blocks to add and subtract numbers irrespective of the size or shape of the blocks. The NEURO DYNAMIX Building Blocks provide the learner with a concrete experience to learn focus and logical reasoning", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_9" 
            },

            ia10_10 = {
                description : "Compare and divide the NEURO DYNAMIX Building Blocks into two groups with the identical blocks in each group. Ask the learner to build any construction with the blocks in the group on the left. When done ask the learner to replicate the grouping while constantly looking from left to right. The continuous movement of the head to look from left to right strengthens vestibular function", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_10" 
            },

            ia10_11 = {
                description : "Use a static and working clock to set a time limit to the activity. Set the static clock five minutes ahead of the current time. Hang both clocks above eye level. This allows the learner to take five minutes to complete the activity. They need to look up and compare the clocks and stop when they look the same. Encourage the learner to beat the clock, while building a construction to his left and replicating it on the right", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_11" 
            },

            ia10_12 = {
                description : "Still using the same two groups now construct a building with 5 blocks to the left of the learner. Use the NEURO DYNAMIX Hula Hoop Stand and Mouse Pad Board to place a divider between the construction and the second group of blocks on the right. Ask the learner to look at the blocks and memorise the design. Replicate the design on the right without peeping to remember the sequence. As soon as the learner succeeds, ask the learner if they would like to raise the number of blocks by two or three blocks on each side of the divider. The two groups of blocks must have the same number, shape and size blocks. Indicate the number of blocks that the learner replicated correctly on your INTERVENTION GUIDE along with the date as evidence of progress", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_12" 
            },

            ia10_13 = {
                description : "Select any 5 blocks from each group. The five blocks in each group must have the same shape and be the same size. Use a clipboard and hang it above eye level. Place one group of 5 blocks in a sequence on the ledge of the clipboard. Ask the learner to look up at the sequence that you have placed on the ledge, memorise the sequence and replicate the sequence with the second group of 5 identical blocks on the desk in front of the learner. A learner may not look at your sequence a second time. If they can’t remember or make a mistake change the sequence of the blocks. . They need to look at that sequence to remember what they see to develop their visual memory, sequencing and closure. If 5 blocks pose too much of a challenge, start with 3 blocks. Success breeds success, allow the learner to taste success and then add another block to each group. Remember the blocks in each group must be identical", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_13" 
            },

            ia10_14 = {
                description : "Once a learner can replicate the sequence without looking up to check, increase the number of blocks in each group. The learner must assess their efforts after every attempt to teach them self-management skills", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_14" 
            },

            ia10_15 = {
                description : "Encourage the learner to continue to increase the number of blocks in a sequence until he can remember a sequence of ten blocks. The example must always be presented above the level of the learner’s nose to activate the seeing part in the brain (called the occipital lobes). The occipital lobe on the left tends to focus on the detail (phonics), while the occipital lobe on the right pays more attention to the shape or pattern of the word (gestalt or whole word)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_15" 
            },

            ia10_16 = {
                description : "The learner can also do this activity without help and place the sequence of blocks on the ledge themselves. The continuous movement of the head in looking up and down strengthens vestibular function and exercises the different eye muscles needed for writing and reading", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia10_16" 
            },
        ]

    }, 

    //done
    ia11 = {
        heading : "NEURO DYNAMIX Matching and Sorting Board",
        active : false,
        score : 0,
        maxScore : 28,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_0" 
            },

            ia11_1 = {
                description : "Use the textured squares. Ask the learner to mix the textures and place them to the left of the NEURO DYNAMIX Sorting Board. Blindfold the learner and ask him to sort the textures and place each texture in its box", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_1" 
            },

            ia11_2 = {
                description : "Use the textured squares. Use the alarm on your phone and ask the learner to mix the textures and place them to the left of the NEURO DYNAMIX Sorting Board. Now blindfold the learner and ask him to sort the textures and place each texture in its box. Time the learner. Repeat this activity a few times over a few days to see if the learner becomes more proficient at matching and sorting", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_2" 
            },

            ia11_3 = {
                description : "Use the textured squares and the tweezers. Ask the learner to mix the textures and place them to the left of the Sorting Board. Use the tweezers between their thumb and index finger to sort the textures, match and group them in the boxes. Sort the textures together and put them away", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_3" 
            },

            ia11_4 = {
                description : "Use the textured squares, the tweezers and the two clocks. Place the static clock to the right of the working clock at eye level. Set the static clock five minutes ahead of the current time. This allows the learner to take five minutes to complete the activity. They constantly need to look up and compare the clocks. Ask the learner to mix the textures and place them to the left of the NEURO DYNAMIX Sorting Board. Use the tweezers between their thumb and index finger to sort the textures and match and group them in the boxes.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_4" 
            },

            ia11_5 = {
                description : "Use the cubes and ask the learner to mix the cubes and place them to the left of the NEURO DYNAMIX Sorting Board. Sort the cubes, match and group them in the boxes", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_5" 
            },

            ia11_6 = {
                description : "Use the cubes, the tweezer and the two clocks. Place the static clock to the right of the working clock at eye level. Set the static clock for five minutes ahead of the current time. This allows the learner to take five minutes to complete the activity. They constantly need to look up and compare the clocks. Ask the learner to mix the cubes and place them to the left of the NEURO DYNAMIX Sorting Board. Use the tweezers between their thumb and index finger to sort the cubes, match and group them in the boxes, put them away", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_6" 
            },

            ia11_7 = {
                description : "Use the textures, cubes, tweezers and the two clocks. Place the static clock to the right of the working clock at eye level. Set the static clock for 10 minutes ahead of the current time. This allows the learner to take ten minutes to complete the activity. They need to look up and compare the clocks. Stop when they look the same. Ask the learner to mix the textures and cubes and place them to the left of the NEURO DYNAMIX Sorting Board. Use the tweezers between their thumb and index finger to sort the textures and cubes according to colour in the boxes. Sort the cubes and textures and put them away.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_7" 
            },

            ia11_8 = {
                description : "Repeat the activity but adjust the time to what would be a realistic time for the learner to experience success", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_8" 
            },

            ia11_9 = {
                description : "Tip the NEURO DYNAMIX Shape and Number Board and remove the shapes from the NEURO DYNAMIX Visual Motor Board. Put the boards away and mix the shapes. Encourage the learner to move the pile of shapes to the left. Place the NEURO DYNAMIX Shape Sorter in front of the learner. Blindfold the learner and ask the learner to start sorting and decide which shape goes where in the NEURO DYNAMIX Sorting Board. Place the same shapes, irrespective of size into the same box. Remove the blindfold and let the learner evaluate their performance", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_9" 
            },

            ia11_10 = {
                description : "Ask the learner to stay blindfolded. Set the alarm on your phone for 1 minute. Count how many shapes the learner could organise correctly in 1 minute. Keep record of the learner’s performance and compare progress as the learner repeats the activity over a few weeks. Slow progress means the level of the activity is too high for the learner, move to an easier activity and build their skills systematically", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_10" 
            },

            ia11_11 = {
                description : "While blindfolded sort the shapes into two piles: a pile for the NEURO DYNAMIX Shape and Number Sorting Board and a pile for the NEURO DYNAMIX Visual Motor Board. Return each shape to the correct board. Setting an alarm adds pressure, sometimes it turns a challenging activity into a frustrating activity. Avoid frustration, it tends to be de-motivating. Both time and the number of objects handled within a specific time offer a measurable benchmark to record progress", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_11" 
            },

            ia11_12 = {
                description : "The same activity can be done using the static and working clocks. This is appropriate for a ‘beginner sorter’. Place the working clock in front of the learner and the static clock to the right next to the working clock. Set the static clock for 5 minutes ahead of the current time and tell the learner to stop when the hands on both clocks look the same", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_12" 
            },

            ia11_13 = {
                description : "A learner needs to discover that the same objects can belong to different groups. This skill will be helpful when they start writing and reading and discover that one letter can make more than one sound, or can combine with other sounds to make a new group of sounds. Colourful shapes work well for this activity when the learner sorts according to colour and thereafter according to shape.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_13" 
            },

            ia11_14 = {
                description : "Encourage the learner to choose objects to sort, decide how to sort them and explain why they decided to sort them like that. Sweets are not a healthy choice but it is a fun way to teach a complex concept. If you have Smarties, Jelly Tots and Sour Worms, the learner can sort according to kind, according to colour, according to shape, according to like and dislike, according to smooth or sugar-coated, etc", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia11_14" 
            }
        ]

    }, 

    //done
    ia12 = {
        heading : "NEURO DYNAMIX Shape and Number Board",
        active : false,
        score : 0,
        maxScore : 42,
        activities: [

            ia12_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_0"
            },

            ia12_1 = {
                description : "Ask the learner to tip out the shapes and place them to the left of the board. Set the alarm on your phone and time how long it takes the learner to complete the board. Note the time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_1"
            },

            ia12_2 = {
                description : "Repeat the activity. Compare the time and ask the learner if the experience was different to the previous time?", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_2" 
            },

            ia12_3 = {
                description : "Ask the learner to use the tweezers to remove the shapes and move them to the left of the board. Use a clean blindfold to close the learner’s eyes. Set the alarm on your phone and time how long it takes the learner to complete the board. They need to use their fingers to feel the board and identify which shape they need to find and fit. They need to complete the shapes in the same sequence as they appear on the board - from the top left-hand corner to the bottom right-hand corner. Notice if there is any movement of the mouth while the learner uses the tweezers. If you notice mouth movement record it.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_3" 
            },

            ia12_4 = {
                description : "Repeat the activity. Compare the time and ask the learner if the experience was different to the previous time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_4" 
            },

            ia12_5 = {
                description : "Repeat the activity but remove the blindfold. The learner needs to use the tweezers to remove the shapes and place them on the left. Once all the shapes have been removed use the tweezers to return the shapes to their places on the board", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_5" 
            },

            ia12_6 = {
                description : "Repeat the previous activity and use the alarm on your phone to time how long it takes to remove and fit the shapes using the tweezers. Compare the time and ask the learner if the experience was different to the previous time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_6" 
            },

            ia12_7 = {
                description : "Focus on the number of holes in each shape. Touch and count how many holes are there when the learner adds all the holes in the circles together (1x5=5), rectangles (2x5=10), triangles (3x5=15) and squares (4x5=20).", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_7" 
            },

            ia12_8 = {
                description : "Use the shapes to count in ones (circles), twos (rectangles), threes (triangles) and fours (squares). It is a simple introduction to the times tables. Always count rhythmically. Rhythm makes remembering easier", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_8" 
            },
            ia12_9 = {
                description : "Count how many shapes are there on each peg (5). Count how many blocks are there in total (4 heaps with 5 blocks each = 20). Following the direction of reading and touch-count each heap from the top left-hand corner of the board to the bottom right-hand corner", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_9" 
            },

            ia12_10 = {
                description : "Move the board away and only work with the shapes. Ask the learner to create a pattern (repetitive sequence) using all 20 shapes. Ask the learner to start on the left of their body and continue the pattern to the right until all the blocks are used. If the learner runs out of space ask the learner how the problem can be solved? (Start a new line on the left or go down on the right to create a border pattern)", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_10" 
            },

            ia12_11 = {
                description : "Repeat the same activity but against time. The two clocks can be used and the static clock set 10 minutes ahead of the current time to allow 10 minutes for this activity. Note that the quality of their work stays the same by emphasising that the shapes must be positioned in the same way every time, with no rotation. This is to plant the seed that letter symbols cannot be turned around they must consistently be written in the same way.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_11" 
            },

            ia12_12 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_12" 
            },

            ia12_13 = {
                description : "Use the blindfold and repeat the activity. The learner is now using not only touch but visual memory to locate, position and sequence shapes. The sequence may never be the same twice in a row. Encourage the learner to come up with creative patterns. Acknowledge effort, it spurs on internal motivation and setting goals before an activity starts", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_13" 
            },

            ia12_14 = {
                description : "Encourage the learner to use a ribbon to thread the shapes to make a patterned necklace. Allow the learner to figure out how to get the ribbon through the holes. Creative problem solving is one of the skills of the future", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_14" 
            },

            ia12_15 = {
                description : "Always start with the blocks to the left of the learner irrespective of which hand is dominant. Repeat the activity and ask the learner to change the sequence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_15" 
            },

            ia12_16 = {
                description : "Use the blindfold to enhance proprioception and a ribbon to thread the shapes to make a patterned necklace. Time how long it takes the learner to thread all the blocks", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_16" 
            },

            ia12_17 = {
                description : "Repeat the activity and encourage the learner to improve on their previous time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_17" 
            },

            ia12_18 = {
                description : "Ask the learner to create 10 sums using the 20 shapes, two blocks per sum. Add up the number of holes of each of the two-block sums and write the answer on a sheet of paper. Ask the learner to reflect on the way the sums were organised and the way they organised the answers", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_18" 
            },

            ia12_19 = {
                description : "Set the static clock and allow ten minutes for this activity. Place the working clock above eye level on the left and the static clock above eye level and to the right to encourage left-right eye movements. Ask the learner to repeat the previous activity and make improvements to their previous plan. No two sums may have the same combination of blocks", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_19" 
            },

            ia12_20 = {
                description : "Set the static clock and allow 20 minutes for this activity. Use a blank page, a pencil and 4 blocks – one circle, one rectangle, one triangle and one square. Ask the learner to use these 4 blocks to create a border pattern around the edge of the page by tracing the shapes. The learner may turn the page, but it must remain in front of the learner and not moved to the side of their body. Remember to write the date and the time on the page. If the learner ran out of time indicate how many shapes were copied on the page and file as evidence", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_20" 
            },

            ia12_21 = {
                description : "Repeat this activity on another day. Set the static clock and allow 20 minutes for this activity. Encourage the learner to do a different pattern from the previous attempt. Compare the previous attempt with the present attempt and discuss the findings", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia12_21" 
            }
        ]

    }, 

    //done
    ia13 = {
        heading : "NEURO DYNAMIX Mouse Pad Board",
        active : false,
        score : 0,
        maxScore : 24,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_0" 
            },

            ia13_1 = {
                description : "Place the board on the table. Ask the learner to trace the infinity sign on the NEURO DYNAMIX Mouse Pad Board with their index finger starting in the middle and moving up and to the left, around, cross the midline and up to the right, with their eyes closed", 
                dateDone : [],
                scoreRecorded : [],
               active : false,
                tag : "ia13_1" 

            },
            ia13_2 = {
                description : "Place the board on a ledge at eye level. Ask the learner to trace the infinity sign on the NEURO DYNAMIX Mouse Pad Board with their finger starting in the middle and moving up and to the left, around, cross the midline and up to the right, with their eyes open. The learner’s head must not move, only the eyes must move. If the learner cannot keep their head still, stand behind the learner and hold their head so their nose stays in line with the crossing point of the infinity sign", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_2" 
            },

            ia13_3 = {
                description : "Place the board on the table. Give the learner a marble and ask the learner to hold the board and roll the marble in the groove of the NEURO DYNAMIX Mouse Pad Board, first to the left, then up and to the right. Their eyes must follow the marble. You may notice head movement. Encourage the learner to keep their head still and straight, if the learner finds it impossible to keep their head still, hold their head gently to encourage eye movement", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_3" 
            },

            ia13_4 = {
                description : "Use your cell phone and set it for 30 seconds. Count how many times the learner can complete the track in thirty seconds without the marble falling out", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_4" 
            },

            ia13_5 = {
                description : "Once the learner is competent at rolling the marble smoothly along the track, ask them to repeat the activity with their eyes closed", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_5" 
            },

            ia13_6 = {
                description : "Use your cell phone and set it for 30 seconds. Count how many times can the learner complete the track in thirty seconds without the marble falling out and with eyes closed", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_6" 
            },

            ia13_7 = {
                description : "Once the learner is competent at rolling the marble smoothly along the track, ask them to repeat the activity with their eyes closed", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_7" 
            },

            ia13_8 = {
                description : "Use your cell phone and set it for 30 seconds. Count how many times can the learner complete the track in thirty seconds without the marble falling out and with eyes closed.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_8" 
            },
            ia13_9 = {
                description : "Paste a large piece of paper against a wall at eye level. Ask the learner to use a crayon to draw an infinity sign - first with the dominant hand and then switch hands and do it with the non-dominant hand. Encourage the learner to find a rhythm. Note that the learner does not shift their body to the side. The middle of the page must stay aligned with the learner’s midline.  To add some creativity switch colour as well", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_9" 
            },

            ia13_10 = {
                description : "Do the same activity, with eyes closed. The head must stay still", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_10" 
            },

            ia13_11 = {
                description : "Use a water pistol or spray bottle filled with water. Find a big wall outside and spray an infinity sign on the wall, the bigger the better, but the head must stay still", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_11" 
            },

            ia13_12 = {
                description : "Focus on the thumb held at elbow distance from the eyes and move the thumb upwards, first around the left eye and then around the right eye. Swop hands and repeat the same process, always drawing a circle around the left eye and then around the right eye to improve reading direction.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia13_12" 
            }                
               
        ]

    }, 

    //done
    ia14 = {
        heading : "NEURO DYNAMIX Writing Pattern Board",
        active : false,
        score : 0,
        maxScore : 12,
        activities: [
            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_0"
            },

            ia14_1 = {
                description : "Show the learner the board then blindfold him. Ask the learner to use the holes at the back of the board to gently remove the patterns. They need to feel the holes rather than tip the board over to see the holes before removing the patterns. Encourage the learner to remove the writing patterns from top to bottom and place them to the left of the board. Encourage the learner to trace the space where the first pattern was on the board with their index finger. Move the index finger from left to right. Repeat the action with all three other patterns. Ask the learner to find the pattern that fits into the first space and fit it gently into the board. Do this with the other three patterns as well", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_1" 
            },

            ia14_2 = {
                description : "Use your stopwatch and time how long it takes the learner to repeat this activity. Record the date and time. Repeat once more and compare the times. If the learner battles to fit the patterns into the board, remove the blindfold and allow the learner to see what they are doing. Time their efforts and record them. When the learner is ready to be blindfolded do so and ask the learner to complete the activity without the pressure of time. If the learner is both confident and competent introduce the stopwatch", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_2" 
            },

            ia14_3 = {
                description : "Ask the learner to close their eyes, remove the patterns from top to bottom and place them to the left of the board. Pass the learner a marble. Start at the pattern at the top and position the marble on the left. Gently tip the board to enable the marble to roll to the right. Right the board so the marble doesn’t fall out. Continue the same activity with the other three patterns moving the marble from left to right. Should the marble fall out, start from the top again. Put the marble away and ask the learner to replace the patterns on the board", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_3" 
            },

            ia14_4 = {
                description : "Remove the shapes gently, move the board away and turn it over. Use a pencil and a blank page in landscape position and trace the patterns on the paper in the exact sequence as they appear on the board. Turn the board over and compare their efforts. Replace the patterns. Use felt-tipped pens or pencils to turn each pattern into a picture.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_4" 
            },

            ia14_5 = {
                description : "Repeat the activity but this time, remember what the second pattern looked like and trace it at the top of the page. Trace the last pattern next and then the second and third pictures. Compare their sequence with the instructions and the patterns on the board. Celebrate the learner’s visual memory and if incorrect, place the board above the level of the learner’s nose and look at the patterns. Looking up activates visual memory. It may now be easier for the learner to mentally swop the positions of the patterns before copying them onto paper. Replace the patterns", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_5" 
            },

            ia14_6 = {
                description : "Remove the patterns and place them to their left. Place the board on the desk with the spaces for the patterns facing up. Place a blank page on the board. Remove the paper from a crayon and place the crayon flat against the board to do a shape rubbing. Be sure that the learner rubs from left to right while the board stays in front of them. This enables the learner to cross the visual and kinaesthetic midlines quite a few time. Replace the patterns. Ask the learner to write their name on each of the patterns on the paper. The letters of their name need to follow with the curves and lines of the patterns", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia14_6" 
            }
        ]

    }, 

    //done
    ia15 = {
        heading : "NEURO DYNAMIX Visual-Motor Perception Board",
        active : false,
        score : 0,
        maxScore : 16,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_0" 
            },

            ia15_1 = {
                description : "Ask the learner to use the holes at the back to remove the shapes and place them to the left of the board. Set the alarm on your phone and time how long it takes the learner to return all the shapes in sequence. Repeat the activity and compare the times", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_1" 
            },

            ia15_2 = {
                description : "Use a clean blindfold to cover the learner’s eyes. Ask the learner to remove the shapes carefully and place them to the left of the board. Set the alarm on your phone and time how long it takes the learner to return all the shapes in sequence. They need to use their fingers to feel the board and identify which shape they need to find starting at the top left-hand corner. They need to complete the shapes in the same sequence as they appear on the board - from the top left-hand corner to the bottom right-hand corner", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_2" 
            },

            ia15_3 = {
                description : "Remove the shapes and place the board vertically above eye level with the bottom of the board in line with the learner’s nose. Place a blank page in a landscape position in front of the learner. Ask the learner to use a pencil and trace each shape in the correct sequence and position as on the board. They may look up to see which shape comes next", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_3" 
            },

            ia15_4 = {
                description : "Place the board vertically above eye level with the bottom of the board in line with the learner’s nose. Place the board at an angle so the pieces do not fall out. Ask the learner to copy the shapes on a blank page that is turned in a landscape position starting from the top left-hand corner (+) and ending with the last shape in the bottom right-hand corner (□). Write the date on the back of the paper and file it in the learner’s progress folder", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_4" 
            },

            ia15_5 = {
                description : "Repeat the activity but without the board on display to see the sequence of patterns. When done ask the learner to compare their picture to the sequence on the board. If the sequence was not correct, encourage the learner to look at the board while you hold it in the air without any shapes falling out. Remove the board and ask the learner to draw the shapes. Compare the outcome. Write the date and indicate which one was the first attempt. Continue this activity over a few weeks until the shapes are neat and the sequence correct", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_5" 
            },

            ia15_6 = {
                description : "Remove the shapes using the holes at the back of the board and place the shapes to their left. Place the board on the desk with the spaces for the shapes facing up. Place a blank page on the board. Remove the paper from a crayon and place the crayon flat against the board to do a shape rubbing. Be sure that the learner rubs from left to right while the board stays in front of them. This enables the learner to cross the visual and kinaesthetic midline quite a few times. Blindfold the learner before replacing the shapes", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_6" 
            },

            ia15_7 = {
                description : "Use the rubbing and encourage the learner to turn each shape into a picture. Discuss the shapes and the pictures", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_7" 
            },

            ia15_8 = {
                description : "Use a blank page and a pencil to create a work of art by tracing the various shapes. It can be a realistic or an abstract picture. Encourage creativity", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia15_8" 
            }
        ]

    }, 

    //done
    ia16 = {
        heading : "NEURO DYNAMIX 100 Board",
        active : false,
        score : 0,
        maxScore : 36,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_0" 
            },

            ia16_1 = {
                description : "By using a NEURO DYNAMIX 100 Board a learner can see the number as they say it, which means they start to connect the number name to the symbol that represents that number", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_1" 
            },

            ia16_2 = {
                description : "Directionality is important to understand numbers. The NEURO DYNAMIX 100 Board allows the learner the opportunity to learn about ‘horizontal’ and ‘vertical’:<br>Horizontal is like lying down. <br>On the NEURO DYNAMIX 100 Board ‘horizontal’ means that as the learner moves a counter from left to right, the number consistently increases by 1. Ask the learner to place a counter on the 1 (one) on the board and add one more counter for every number they read up to 10.<br>Show the learner the numbers consistently repeat the same pattern in the next 9 lines when moving your finger from left to right (1,2,3,4,5 …). Draw the learner’s attention to the number words from eleven to twenty and that they are very different from other number words.<br>On the NEURO DYNAMIX 100 Board ‘vertical’ means from top to bottom. Place a counter on number one. Encourage the learner to move the counter down one block, the learner will notice the numbers are increasing by 10 with every move. Each number ends in a 1 (11, 21, 31, 41, 51, etc.) but all the tens consistently increase by 1 each time<br>Vertical is like standing up. ", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_2" 
            },

            ia16_3 = {
                description : "After learning the number words up to twenty, it is important to learn the number words such as thirty, forty, fifty, sixty until hundred", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_3" 
            },

            ia16_4 = {
                description : "Ask the learner to use their index finger and point from left to right and count up to 20", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_4" 
            },

            ia16_5 = {
                description : "Point from right to left to count down from 20", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_5" 
            },

            ia16_6 = {
                description : "Ask the learner to point to 10 and count in 10’s to 100", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_6" 
            },

            ia16_7 = {
                description : "Point to 100 and count ‘down’ in 10’s pointing from bottom up (90, 80, 70 …).", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_7" 
            },

            ia16_8 = {
                description : "Start at 23 and count up in 10’s to 93. Ask the learner what + 10 would be (103).", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_8" 
            },
            ia16_9 = {
                description : "Start at any number and count down in 10’s. Counting down means moving up on the NEURO DYNAMIX 100 Board", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_9" 
            },

            ia16_10 = {
                description : "Count forward in ones from any given number (37, 38, 39 …) while pointing to the number on the NEURO DYNAMIX 100 Board", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_10" 
            },

            ia16_11 = {
                description : "Start pointing and counting in ones to any number, stop and ask the learner to continue", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_11" 
            },

            ia16_12 = {
                description : "Counting on is a mental math skill where, when adding two numbers, the learner begins counting from the largest number and add the second number to it. Counting on helps the learner to figure out how many they will have once more is added", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_12" 
            },

            ia16_13 = {
                description : "Start to teach the learner how to add and subtract by using a marker. The equation 13 + 6 can be demonstrated by placing a marker on thirteen and moving it six places forward to 19", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_13" 
            },

            ia16_14 = {
                description : "Subtraction can be demonstrated with the marker on, for example, nineteen and moving the marker six spaces backwards. Repetition builds confidence and skill", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_14" 
            },

            ia16_15 = {
                description : "Practise adding ten to numbers. Show the learner adding ten is just one vertical move on the NEURO DYNAMIX 100 Board", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_15" 
            },

            ia16_16 = {
                description : "Introduce skip counting by using 12 markers. This is a concrete way to demonstrate the times tables while the learner discovers the visual patterns that emerge", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_16" 
            },

            ia16_17 = {
                description : "Count by 2s (3,4,5 …) starting on an even number", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_17" 
            },

            ia16_18 = {
                description : "Count by 2s (3,4,5 …) starting on an odd number", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia16_18" 
            },

        ]

    }, 

    //done
    ia17 = {
        heading : "NEURO DYNAMIX Letter Symbols",
        active : false,
        score : 0,
        maxScore : 38,
        activities: [

            ia1_0 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_0" 
            },

            ia17_1 = {
                description : "To keep things simple but interesting, ask the learner to create their own personal phonics chart. They need to get their creative juices flowing and they may not use any words from an existing chart or phonics programme. The purpose is not to promote phonics as it is a questionable approach to learn a non-phonetic language such as English. The purpose is to use a specific sound at the beginning sound of a specific word to learn how to write that specific sound. Download and use MY PERSONAL ALPHABET for this activity. It can take many hours. The more personal the words, the more invested the learner is in their own learning. Refrain from suggesting and prompting. Allow the learner the time to listen to words in their minds, savour them on their tongues and then choose the ones they want on their chart. They may draw or write the words or do both. It is their chart, let them make the rules. NO names of people or places, please! NEURO DYNAMIX is about basics and focuses on lower case letters only. The learner may ask you to write their words if they are still too young or unsure to write them themselves. Do not rush through this activity. The successful conversion of sound to symbol is an important step towards literacy", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_1" 
            },

            ia17_2 = {
                description : "Once MY PERSONAL ALPHABET is complete ask the learner to read their chart from left to right using the NEURO DYNAMIX way of referring to a letter. The principle used is: <br>the /letter symbol/ in word<br>the /a/ in avatar<br>the /b/ in burger<br>the /c/ in coke<br>the /d/ in drone<br>the /e/ in emoji .<br>Kindly refrain from using the generic form of: an a or a b. A letter symbol only has sound within the context of a word", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_2" 
            },

            ia17_3 = {
                description : "Use the poster with one stick figure. Explain that it is a picture of the learner facing the paper. They are looking at the back of the head. The learner needs to use their own body as a starting point for every letter. After saying the posture rhyme, put the alphabet poster on the clipboard above eye level, and look at every letter. Start at the top left corner with the /a/ for ... (the learner’s word). Ask the learner to use the tip of a red felt-tipped pen to make a dot to show the starting point of each letter on their body on the poster. Encourage the learner to say: “I am important because all the letters in the whole wide world start on me.” Stop after a few letters and do the Mind Moves Arm Workout to stretch the tension out while breathing slowly and deeply. Repeat the previous letter symbols to consolidate before moving on. Remember the / / in word.<br>Quicker is not better, master one letter symbol before they attempt the next one", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_3" 
            },

            ia17_4 = {
                description : "Use the poster with one stick figure. Ask the learner to look at the alphabet poster on the clipboard, make a red dot where a letter symbol would start on the body on the poster with one stick figure.  Write each of the letter symbols on the figure with the index finger of their dominant hand to feel the letter without the pressure of seeing if they have done it perfectly or not. Say the / / in word while starting the letter on their body and shaping it. Use the index finger of the non-dominant hand to draw an infinity sign starting on their body, go up and to the left, around, up through the midline and to the right. This is challenging for most learners. Start with all the letters that are shaped to the left first. Do the first few letters together to solidify the rules: start on the body; in the correct place; be sure in which direction to move; complete the letter symbol with the index finger of the dominant hand; complete an infinity sign with the index finger of the non-dominant hand. Once the learner can write a letter symbol correctly and with confidence with their index finger, ask them to use a black or blue felt-tipped pen to write the letter on the poster with one stick figure. When done, encourage the learner to look up to check their figure against the figure on the poster that is on the clipboard and above eye level. Record how many letters the learner could figure out and position correctly. Make a note of which letters those were. Remind the learner to say the / / in word", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_4" 
            },

            ia17_5 = {
                description : "Progress to the letters started and shaped on the figure and followed by the letters that are shaped to the right", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_5" 
            },

            ia17_6 = {
                description : "Repeat this activity until the learner has correctly positioned each and every letter of the alphabet. Indicate the date and number of new letters, but continue to repeat the position and formation of all the previous letters too. Remember repetition builds pathways. <br>-	Put away the poster with one figure.<br>-	Remove the poster with all the letters and replace with the poster of all the letters shaped to the left of the learner. <br>-	Use the NEURO DYNAMIX Matching and Sorting Board and the NEURO DYNAMIX Letter Symbols. <br>-	Place the little blocks to the left of the learner irrespective of which hand is dominant.<br>-	Find all the blocks with letters shaped towards the left and place them in one box. <br>-	Say the / / in word as the learner puts a block in a box. The learner may look at the poster to confirm", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_6" 
            },

            ia17_7 = {
                description : "", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_7" 
            },

            ia17_8 = {
                description : "Remove the poster and replace with the poster of all the letters shaped on the learner. Find all the blocks with letters shaped on the learner and place them in one box. The learner may look at the poster to confirm. Remove the poster and replace with the poster of all the letters shaped to the right of the learner. Find all the blocks with letters shaped to the right of the learner and place them in one box. The learner may look at the poster to confirm", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_8" 
            },

            ia17_9 = {
                description : "Ask the learner if they would like to make any changes to their MY PERSONAL ALPHABET. They can create a whole new chart, or just change some words of leave it as is. Converting sound into letter symbols is complex. Fun lowers anxiety and improves learning", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_9" 
            },

            ia17_10 = {
                description : "Use the two clocks and set the static clock 10 minutes ahead of the current time to allow the learner 10 minutes to repeat the activity above. Record the time if the learner has beaten the clock, and count the number of blocks that remained once the 10 minutes are up", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_10" 
            },

            ia17_11 = {
                description : "Repeat this activity again without the help of the three posters. Note the time or number of blocks left after 10 minutes. Discuss the learner’s progress", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_11" 
            },

            ia17_12 = {
                description : "Place the blocks to the left of the learner irrespective of which hand is dominant. Place the poster with all the letters of the alphabet on the clipboard and above eye level. The learner may look up to read the poster saying the / / in word. Set your alarm and time how long it takes the learner to sort the letters into three boxes according to where on the body the letter is: body only (a, c, e, i, m, n, o, e, s, u, v, w, x, z). This is an example of grouping according to a single characteristic. Sort according to head and body (b, d, f, h, k, l, t) or body and legs (g, j, q, p, y) are examples of grouping according to multiple characteristics. Record the date and time.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_12" 
            },

            ia17_13 = {
                description : "Repeat the activity with the intention of doing it faster. Record the date and time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_13" 
            },

            ia17_14 = {
                description : "Repeat the activity with the intention of doing it faster, but without the poster on the clipboard. The learner does not need to remember, the learner needs to be able to reason it out. Record the date and time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_14" 
            },

            ia17_15 = {
                description : "Repeat the activity with the intention of doing it faster. Record the date and time", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_15" 
            },

            ia17_16 = {
                description : "If a learner struggles, STOP before frustration levels peak. Go back to a less challenging activity and work your way towards this last activity", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_16" 
            },

            ia17_17 = {
                description : "This is transition time! The learner starts to look at a word and copy the sequence of letter symbols while saying the whole word. Take all the blocks and place them to the left of the learner. Use clipboard and the MIND DYNAMIX Letter Symbols to build words. Build a word by placing the blocks on the ledge of the clipboard. Ask the learner to look at the word that you have built, say what it says and then build the word on the desk. The learner is only allowed to look at the word once and then they need to search for the letters in the pile to their left and build the word in front of them. Encourage the learner to look up and check that their word is correct. Read the word aloud. Increase the number of letters in a word to match the learner’s level of ability and then challenge them again. The learner can also challenge you.", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_17" 
            },

            ia17_18 = {
                description : "Encourage the learner to write every word in their MY PERSONAL ALPHABET", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_18" 
            },

            ia17_19 = {
                description : "Use a book. Any book. Ask the learner to find a difficult word. Look in the book and find the letter blocks to write that word. Ask the learner to turn the book over and build the word on the ledge of the clipboard. Turn the book over and ask the learner to compare and correct if necessary. Ask the learner to look at the word on the clipboard, take a photo with their eyes and build the word on the table by finding the blocks and building the word on the table without looking up. Once done, compare and correct or celebrate progress", 
                dateDone : [],
                scoreRecorded : [],
                active : false,
                tag : "ia17_19" 
            }

        ]    
    }, 

]//END OBJECT
 
//buttons
submitButton.addEventListener("click", (event) => {
    console.time('button1')
    asses1() //update scores draw a person, romberg and one leg stand 
    for(let i=0; i < 9; i++){
        score.strokes.push(document.querySelector(`#strokes_${i+1}`).value);        
    }
    score.engRead = document.querySelector("#engRead").value;
    score.afrRead = document.querySelector("#afrRead").value;
    score.math = document.querySelector("#math").value;
    score.spelling = document.querySelector("#spelling").value;
    score.spelkart = document.querySelector("#spelkart").value;
    scores.push(score)//adds anything added into running scores
    resetScores()
    
    //check boxes
    for(let i=0; i < interQuestions.length; i++){
        for(let k=0; k < interQuestions[i]; k++){
            if (scores[0].checklist[i][k].checked == true)
                checkTally[i]++
    } 
}   
    //IP1
    if (checkTally[0] >= 10)
    {    
        ipActive[0] = true;
        ipActive[1] = true;
        mindMoves[3].active = true;
        mindMoves[13].active = true;
        mindMoves[19].active = true;

        // interActivities[1].active = true;
        // interRange(interActivities[1].activities, 11, 13);
    }

    //IP5(battle and sharp) function display ipActive 5 included
    ip5()

    //removes input form 
    document.getElementById("input").innerHTML = "";

    //test
    interActivities[1].active = true;
    interRange(interActivities[1].activities, 1, 1)
    interActivities[10].active = true;
    interRange(interActivities[10].activities, 1, 1)
    ipActive[5] = true
    //end test
    
    //display function
    mmAndInter()
    
    mmOut += '<hr>'
    //display to screen 
    document.getElementById("mmOut").innerHTML = mmOut;
    document.getElementById("interOut").innerHTML = interOut;
    document.getElementById("inter_button").innerHTML = `<button type="button" class="submit" id = "inter_button">submit</button>`
    console.timeEnd('button1')
})

interButton.addEventListener("click", (event) =>  {
    console.log(ipActive)
    console.time('button2')
    //resets output variables
    mmOut = "<h3>Mind move activities</h3>";
    interOut = "<h3>Intervention activities</h3>";
    let nextMain = false
    //moves scores from active intervention activities into arrays removes if scored 2(greyed out)??
    
    if (ipActive[0]){ //orginal ip 1-5
        interActivities.forEach(element => {
            if(element.active){
                element.activities.forEach(element_2 => {
                    if(element_2.active){
                        let tempEle = document.getElementById(`${element_2.tag}`).value
                        element_2.scoreRecorded.push(tempEle)
                        if (tempEle == 2){
                            element_2.active = false;
                        }
                    }
                })
            }
        }) //end of for each           
    }
    
    if (ipActive[5]){ //new IP 6+
        ipActive[0] = false;
        interActivities.forEach(element => {
            let nextSub = false;
            if (nextMain){
                element.active = true;
                element.activities[1].active = true
                nextMain = false;
                }
            else if(element.active){
                element.activities.forEach(element_2  => {
                    if (nextSub && !element_2.active){ 
                        element_2.active = true;
                        nextSub = false
                    }
                    else if(element_2.active){
                        let tempEle = document.getElementById(`${element_2.tag}`).value
                        element_2.scoreRecorded.push(tempEle)
                        if (tempEle == 2){
                            nextSub = true;
                            element.score += 2;
                            element_2.active = false;
                        if (element.score == element.maxScore){
                            element.active = false;
                            nextMain = true;
                        }

                        }
                    }

                })
            }
        }) 
    }//end of for each       
    
    // interActivities[8].active = true;
    // interRange(interActivities[8].activities, 1, 1);
    
    //IP2 (should be after 2 weeks)
    if (ipActive[1]){
        alert("two weeks have past") 
        ipActive[1] = false;
        ipActive[2] = true;
        //same mind moves as IP1
        interActivities[1].active = true;
        interRange(interActivities[1].activities, 1, 4);
        interActivities[10].active = true;
        interRange(interActivities[10].activities, 1, 2);   
    }

    //IP3 
    if (ipActive[2]){
        if ((rangeTop(1, 1, 4) + rangeTop(10, 1 , 2)) >= 4){
        ipActive[2] = false;
        ipActive[3] = true;
        mindMoves[13].active = false;
        mindMoves[14].active = true;

        interRange(interActivities[1].activities, 5, 10);
        interRange(interActivities[10].activities, 3, 5);
        }
    }

    //IP4
    if (ipActive[3]){
        if(rangeTop(1, 1, 10) + rangeTop(10, 1, 5) == 14){
            ipActive[3] = false;
            ipActive[4] = true;
            mindMoves[7].active = true;
            }
    }   
    
       //log reassesment scores          
    if (ipActive[4] && reasses.length > 10){
        asses1()
        scores.push(score)
        resetScores()
        reasses = ' ';
        ipActive[4] = false;
        ip5()
        }
    //end of IP 4
    if(((rangeTop(1, 1, 10) + rangeTop(10, 1, 5)) == 15) && reasses.length < 1 && ipActive[0]){
        ipActive[4] = true;
        // interActivities[10].activities[10] = false;
        // interActivities[1].activities = false;
        reasses += reasses1()
             }
 
    //IP 5
    ip5()
 

    //output
    mmAndInter()
    mmOut += '<hr>'
    document.getElementById("mmOut").innerHTML = mmOut;
    document.getElementById("interOut").innerHTML = interOut;
    document.getElementById("reasses").innerHTML = reasses;
    document.getElementById("inter_button").innerHTML = `<button type="button" class="submit" id = "inter_button">submit</button>`
    console.timeEnd('button2')
})

//storage 
document.getElementById("mmOut").innerHTML = "<p>mm3 test<p>";
//later
const inputValues = {
    a0000 : {
        name : "Murray von Maltitz",
        id : 'abcd',
        age : 29,
        teacherID : '12345',
    }
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//functions

function interRange(array, first, last){
    for (let i = first; i <= last; i++){
        array[i].active = true;
    }
}

//output function 
function mmAndInter(){
        //display mind move activities
        mindMoves.forEach(element => {
            if (element.active)
            {
                mmOut += `<div class="container">`
                mmOut += `<h4> ${element.title}</h4>` 
                mmOut += `<p> ${element.description}</p>`
                if (element.picture.length > 2)
                    mmOut += `<img src="${element.picture}">`
                mmOut += `<a  href="${element.link}" target="_blank"><p> ${element.link}</a>`
                mmOut += `</div>`
                mmOut += `<hr>`
            }
        
        });
    
        interActivities.forEach(element => {
            if(element.active){
                if (element.maxScore != element.score)
                interOut += `<h4>${element.heading}</h4>`
                else element.active = false
                element.activities.forEach(element_2 => {
                    if(element_2.active){
                        interOut += `<p>${element_2.description}</p>`
                        interOut += `<select name="${element_2.tag}" id="${element_2.tag}">
                                    <option value="0" >0: No attempt</option>
                                    <option value="1" >1: attempt but uncoordinated</option>
                                    <option value="2" >2: coordinate & confident</option>
                                    </select>`
                        interOut += `<hr>`
                    }
                })
            }
        })//end of forEach   
}// end of function

//sets all MM to false
function clearMM(){
    mindMoves.forEach(element => {
        element.active = false;
    })
}

//retutns last score in array 
function lastScore(main, sub){
    return interActivities[main].activities[sub].scoreRecorded[interActivities[main].activities[sub].scoreRecorded.length -1]
}

//returns amount of activities completed
function rangeTop(main ,start, end){
    let temp = 0
    for (let i = start; i <= end; i++){
        if(lastScore(main, i) == 2){
            temp++
        }
    }
    return temp 
}

//checks if 80% 
function percentage(i){
    return ((interActivities[i].score/interActivities[i].maxScore)*100)
    }                                                                                                                                                                                   

function meanPercentage(gross, fine){
    return ((((interActivities[gross].score/interActivities[gross].maxScore)*100) + ((interActivities[fine].score/interActivities[fine].maxScore))*100)/2); 
}

//ip 5
function ip5(){
    if (scores[scores.length - 1].drawPerson < 24 && scores[scores.length - 1].romberg_closed > 2 && scores[scores.length - 1].romberg_open > 2 && scores[scores.length - 1].oneLeg_closed > 2 && scores[scores.length - 1].oneLeg_closed > 2)
    {   
        ipActive[5] = true;
        mindMoves[3].active = true;
        mindMoves[7].active = true;
        mindMoves[14].active = true;
        mindMoves[19].active = true;

        //intervention activities 1
        interActivities[1].active = true;
        interRange(interActivities[1].activities, 11, 13)
                        
        //intervention activities 2
        interActivities[2].active = true;
        interRange(interActivities[2].activities, 1, 5)
        
         //intervention activities 10
        interActivities[10].active = true;
        interActivities[10].activities[4] = true;
        interActivities[10].activities[6] = true;
    } 
    //IP5 SHARP this needs to change
    if (scores[scores.length - 1].drawPerson >= 24 && scores[scores.length - 1].romberg_closed <= 2 && scores[scores.length - 1].romberg_open <= 2 && scores[scores.length - 1].oneLeg_closed <= 2 && scores[scores.length - 1].oneLeg_closed <= 2)
    {
        //mind moves
        ipActive[6] = true;
        mindMoves[3].active = true;
        mindMoves[11].active = true;
        mindMoves[6].active = true;
        mindMoves[19].active = true;

        //intervention activities 1
        interActivities[1].active = true;
        interRange(interActivities[1].activities, 11, 13);
        //intervention activities 2
        interActivities[2].active = true;
        interRange(interActivities[2].activities, 1, 8);
        //intervention activities 10
        interActivities.active = true;
        interRange(interActivities[10].activities, 4, 10);
    }
}

//creates new inputs for drawperson, romberg and one leg
function reasses1(){
    return `<h3> reasses the following</h3>
                    <div class="drawPerson">
                        <label for="drawPerson">Draw a person score:</label>
                        <input type="number" id="drawPerson" name="drawPerson" value="0">
                    </div>
                    <div class="romberg">
                        <h5>TEST POSITION</h5>
                        <p>Stand up straight, feet together, arms and hands to the side, looking straight ahead.</p>
                        <select name="romberg_test" id="romberg_test">
                            <option value="0" >0: None of the observations noted </option>
                            <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
                            <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
                            <option value="3" >3: Any of the above but more marked</option>
                            <option value="4" >4: Any of the above but more marked</option>
                         </select>
                            <h5>EYES OPEN</h5>
                            <p>The learner is instructed to continue looking straight ahead without moving. This position should be maintained for approximately 8 seconds.</p>
                            <select name="romberg_open" id="romberg_open">
                                <option value="0" >0: None of the observations noted </option>
                                <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
                                <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
                                <option value="3" >3: Any of the above but more marked</option>
                                <option value="4" >4: Any of the above but more marked</option>
                            </select>
                            <h5>EYES CLOSED</h5>
                            <p>Ask the learner to maintain the position, but to close the eyes and ‘imagine’ that the learner is looking straight ahead. Hold that position for approximately 8 seconds.</p>
                            <select name="romberg_closed" id="romberg_closed">
                                <option value="0" >0: None of the observations noted </option>
                                <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
                                <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
                                <option value="3" >3: Any of the above but more marked</option>
                                <option value="4" >4: Any of the above but more marked</option>
                            </select>
                    </div>
                    <div class="oneLeg">
                        <h5>TEST POSITION</h5>
                        <p>Ask the learner to stand straight and bend one knee at 90° angle.
                            <br>1 year 1 second
                            <br>2 years- 2 seconds
                            <br>3.5-4 years 8 seconds
                            <br>6 years 10 seconds right or left
                            <br>8 years 30 seconds.</p>
                        <select name="oneLeg_test" id="oneLeg_test">
                            <option value="0" >0: No abnormality tested</option>
                            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
                            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
                            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
                            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
                        </select>
                        <h5>EYES OPEN</h5>
                        <p>Stand on one leg with EYES OPEN.</p>
                        <select name="oneLeg_open" id="oneLeg_open">
                            <option value="0" >0: No abnormality tested</option>
                            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
                            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
                            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
                            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
                        </select>
                        <h5>EYES CLOSED</h5>
                        <p>Stand on one leg with EYES CLOSED.</p>
                        <select name="oneLeg_closed" id="oneLeg_closed">
                            <option value="0" >0: No abnormality tested</option>
                            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
                            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
                            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
                            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
                        </select> 
                    </div>`
}

    //moves inputs into objects, drawerson, romberg and one leg
function asses1(){
    score.drawPerson = document.querySelector("#drawPerson").value;
    score.romberg_test = document.querySelector("#romberg_test").value;
    score.romberg_open = document.querySelector("#romberg_open").value;
    score.romberg_closed = document.querySelector("#romberg_closed").value;
    score.oneLeg_test = document.querySelector("#oneLeg_test").value;
    score.oneLeg_open = document.querySelector("#oneLeg_open").value;
    score.oneLeg_closed = document.querySelector("#oneLeg_closed").value;
}

//creates new inputs for intervention checklist, drawPerson, romberg, oneLeg & strokes
function reasses2(){
    return `<h3> reasses the following</h3>
    <h4>1. GRAVITATIONAL SECURITY & VESTIBULAR DEVELOPMENT</h4>
    <div>
        <input type="checkbox" id="inter1_1" name="inter1_1">Constantly runny nose<br>
        <input type="checkbox" id="inter1_2" name="inter1_2">Poor posture, slumps in chair<br>
        <input type="checkbox" id="inter1_3" name="inter1_3">Poor balance (loses balance when trying to fasten shoe laces)<br>
        <input type="checkbox" id="inter1_4" name="inter1_4">Seek lots of movement: swinging, rocking, bouncing (compared to same aged peers) to maintain attention<br>
        <input type="checkbox" id="inter1_5" name="inter1_5">Sit with feet around legs of chair or feet on chair<br>
        <input type="checkbox" id="inter1_6" name="inter1_6">Rocks on chair<br>
        <input type="checkbox" id="inter1_7" name="inter1_7">Difficulty with judging direction/depth/height/weight/distance<br>
        <input type="checkbox" id="inter1_8" name="inter1_8">Cannot jump with both feet together<br>
        <input type="checkbox" id="inter1_9" name="inter1_9">Poor endurance when standing and/or sitting – seeks support to lean on <br>
        <input type="checkbox" id="inter1_10" name="inter1_10">Poor balance in everyday tasks – falls more frequently and bumps into things more often than other children<br>
        <input type="checkbox" id="inter1_11" name="inter1_11">Indicate fear of swinging or activities requiring balance.<br>
        <input type="checkbox" id="inter1_12" name="inter1_12">Fear of heights<br>
    </div>   
    <h4>2. GROSS MOTOR SKILLS & GRAVITATIONAL SECURITY</h4>
    <div>
        <input type="checkbox" id="inter2_1" name="inter2_1">Walks and runs in a uncoordinated manner<br>
        <input type="checkbox" id="inter2_2" name="inter2_2">Cannot do a segmented roll, roll like a solid log<br>
        <input type="checkbox" id="inter2_3" name="inter2_3">Cannot gallop rhythmically<br>
        <input type="checkbox" id="inter2_4" name="inter2_4">Catch a large ball against the body <br>
        <input type="checkbox" id="inter2_5" name="inter2_5">Difficulty throwing a ball at a target<br>
        <input type="checkbox" id="inter2_6" name="inter2_6">Cannot skip with a rope<br>
        <input type="checkbox" id="inter2_7" name="inter2_7">Flap or drag feet, do not lift the feet when walking<br>
        <input type="checkbox" id="inter2_8" name="inter2_8">Avoids unstable surfaces  <br>
        <input type="checkbox" id="inter2_9" name="inter2_9">Cannot skip rhythmically  <br>
        <input type="checkbox" id="inter2_10" name="inter2_10">Cannot catch a tennis ball with one hand<br>
        <input type="checkbox" id="inter2_11" name="inter2_11">Difficulty kicking a ball at a target<br>
        <input type="checkbox" id="inter2_12" name="inter2_12">Difficulty learning to ride a two wheel bicycle<br>    
    </div> 
    <h4>3. AUDITORY PERCEPTION</h4>
    <div>
        <input type="checkbox" id="inter3_1" name="inter3_1">History of repeated ear infections <br>
        <input type="checkbox" id="inter3_2" name="inter3_2">Easily distracted by sounds, seem to hear sounds that go unnoticed by others<br>    
        <input type="checkbox" id="inter3_3" name="inter3_3">Appear to have difficulty understanding or paying attention to what is said to him/her<br>    
        <input type="checkbox" id="inter3_4" name="inter3_4">Appear to have difficulty with determining the location of sounds<br>    
        <input type="checkbox" id="inter3_5" name="inter3_5">Difficulty with repeating five words in the same order<br>    
        <input type="checkbox" id="inter3_6" name="inter3_6">Overly sensitive to loud noises compared to peers <br>    
        <input type="checkbox" id="inter3_7" name="inter3_7">Seems unaware of sound – loud or normal sounds<br>        
        <input type="checkbox" id="inter3_8" name="inter3_8">Difficulty following simple directions in sequence comparison to peers<br>    
        <input type="checkbox" id="inter3_9" name="inter3_9">Difficulty with discriminating sounds of letters – isolated or in speech<br>    
        <input type="checkbox" id="inter3_10" name="inter3_10">Delayed speech development<br>  
    </div> 
    <h4>4. BILATERAL INTEGRATION (laterality & crossing the midline)</h4>       
    <div>
        <input type="checkbox" id="inter4_1" name="inter4_1">Do not know left and right<br> 
        <input type="checkbox" id="inter4_2" name="inter4_2">Hand dominance not established<br> 
        <input type="checkbox" id="inter4_3" name="inter4_3">Difficulty writing while facing forward, angle body/book<br> 
        <input type="checkbox" id="inter4_4" name="inter4_4">Poor stabilization of paper when writing<br> 
        <input type="checkbox" id="inter4_5" name="inter4_5">Difficulty adjusting paper when cutting<br> 
        <input type="checkbox" id="inter4_6" name="inter4_6">Poor manipulation of dressing fasteners<br> 
        <input type="checkbox" id="inter4_7" name="inter4_7">Switches hands during writing<br> 
        <input type="checkbox" id="inter4_8" name="inter4_8">Keeps work on one side of desk<br>     
        <input type="checkbox" id="inter4_9" name="inter4_9">Starts increasing further away from the margin<br> 
        <input type="checkbox" id="inter4_10" name="inter4_10">Difficulty with bag/pencil sharpener/shoes<br>              
    </div>   
    <h4>5. SPATIAL ORIENTATION</h4>
    <div>
        <input type="checkbox" id="inter5_1" name="inter5_1">Do not know position in space (on, under, next to, in between)<br> 
        <input type="checkbox" id="inter5_2" name="inter5_2">Difficulty with matching and sorting<br> 
        <input type="checkbox" id="inter5_3" name="inter5_3">Avoids movement prefers quiet activities<br> 
        <input type="checkbox" id="inter5_4" name="inter5_4">Constantly loses belongings<br> 
        <input type="checkbox" id="inter5_5" name="inter5_5">Struggle with punctuation and spacing of words<br> 
        <input type="checkbox" id="inter5_6" name="inter5_6">Poor task completion<br> 
        <input type="checkbox" id="inter5_7" name="inter5_7">Poor memory<br> 
        <input type="checkbox" id="inter5_8" name="inter5_8">Difficulty with copying shapes<br> 
        <input type="checkbox" id="inter5_9" name="inter5_9">Mirror writing  <br> 
        <input type="checkbox" id="inter5_10" name="inter5_10">Prefers to be on their own<br> 
        <input type="checkbox" id="inter5_11" name="inter5_11">Loses place easily when reading<br> 
        <input type="checkbox" id="inter5_12" name="inter5_12">Struggles to count on<br> 
        <input type="checkbox" id="inter5_13" name="inter5_13">Cannot read time<br> 
        <input type="checkbox" id="inter5_14" name="inter5_14">Letter reversals, indicate which letters are reversed<br> 
    </div> 
    <h4>6. MOTOR PLANNING </h4>
    <div>
        <input type="checkbox" id="inter6_1" name="inter6_1">Difficulty following multi-step directions<br> 
        <input type="checkbox" id="inter6_2" name="inter6_2">Difficulty initiating tasks<br>
        <input type="checkbox" id="inter6_3" name="inter6_3">Difficulty learning new tasks<br>
        <input type="checkbox" id="inter6_4" name="inter6_4">Often look around and imitate others<br>
        <input type="checkbox" id="inter6_5" name="inter6_5">Has difficulty maintaining/clapping rhythms<br>
        <input type="checkbox" id="inter6_6" name="inter6_6">Performance of tasks is slow<br>
        <input type="checkbox" id="inter6_7" name="inter6_7">Poor task completion<br>
        <input type="checkbox" id="inter6_8" name="inter6_8">Poor organization skills<br>
        <input type="checkbox" id="inter6_9" name="inter6_9">Does poorly on times tests<br>
        <input type="checkbox" id="inter6_10" name="inter6_10">Has difficulty with motor tasks with several steps<br>
        <input type="checkbox" id="inter6_11" name="inter6_11">Not able to express thoughts clearly<br>
        <input type="checkbox" id="inter6_12" name="inter6_12">Limited vocabulary in language of learning<br>
        <input type="checkbox" id="inter6_13" name="inter6_13">Difficulty singing songs and saying rhymes<br>
        <input type="checkbox" id="inter6_14" name="inter6_14">Unable to tell a story in the correct sequence<br>
    </div>
    <h4>7. FINE  MOTOR</h4>
    <div>
        <input type="checkbox" id="inter7_1" name="inter7_1">Drops things easily<br> 
        <input type="checkbox" id="inter7_2" name="inter7_2">Hand tires/pains easily<br>
        <input type="checkbox" id="inter7_3" name="inter7_3">Writing pressure too light/too heavy  <br>
        <input type="checkbox" id="inter7_4" name="inter7_4">Have difficulty with drawing, copying or cutting<br>
        <input type="checkbox" id="inter7_5" name="inter7_5">Awkward grasp on pencil/scissors (grasp too tight, lose or unable to control the instrument)<br>
        <input type="checkbox" id="inter7_6" name="inter7_6">Flexes wrist when writing / cutting<br>
        <input type="checkbox" id="inter7_7" name="inter7_7">Excessive hand perspiration<br>
        <input type="checkbox" id="inter7_8" name="inter7_8">Writing not fluid<br>
        <input type="checkbox" id="inter7_9" name="inter7_9">Move tongue or mouth when working with hands<br>
        <input type="checkbox" id="inter7_10" name="inter7_10">Poor three-point pencil grip<br>
    </div>
    <h4>8. VISUAL PERCEPTION</h4>
    <div>
        <input type="checkbox" id="inter8_1" name="inter8_1">Appear sensitive to light, prefer dark or dim lighting<br> 
        <input type="checkbox" id="inter8_2" name="inter8_2">Have difficulty following a moving object with the eyes<br>
        <input type="checkbox" id="inter8_3" name="inter8_3">Often squint, rub eyes or have headaches or watery eyes after sustained eye focus (circle 1)<br>
        <input type="checkbox" id="inter8_4" name="inter8_4">Have difficulty locating objects around the room<br>
        <input type="checkbox" id="inter8_5" name="inter8_5">Make poor eye contact<br>
        <input type="checkbox" id="inter8_6" name="inter8_6">Add less detail to drawing or colouring than peers<br>
        <input type="checkbox" id="inter8_7" name="inter8_7">Eye watering/rubbing/squinting/blinking<br>
        <input type="checkbox" id="inter8_8" name="inter8_8">Tend to look at objects out of the corner of eyes<br>
        <input type="checkbox" id="inter8_9" name="inter8_9">Have difficulty keeping eyes on still objects<br>
        <input type="checkbox" id="inter8_10" name="inter8_10">Becomes excited with a lot of visual stimuli<br>
        <input type="checkbox" id="inter8_11" name="inter8_11">Have difficulty discriminating between objects that are the same or different<br>
        <input type="checkbox" id="inter8_12" name="inter8_12">Hold objects or books closer than appropriate<br>
        <input type="checkbox" id="inter8_13" name="inter8_13">Orient drawings poorly on page<br>
        <input type="checkbox" id="inter8_14" name="inter8_14">Avoids puzzle, cards and board games<br>
        <input type="checkbox" id="inter8_15" name="inter8_15">Moves head back and forth while reading<br>
        <input type="checkbox" id="inter8_16" name="inter8_16">Drop chin when looking at something<br>
    </div>
    <h4>9. PERCEPTION MOTOR</h4>
    <div>
        <input type="checkbox" id="inter9_1" name="inter9_1">Poor drawing skills<br> 
        <input type="checkbox" id="inter9_2" name="inter9_2">Difficulty staying on lines with cutting<br>
        <input type="checkbox" id="inter9_3" name="inter9_3">Slow copying<br>
        <input type="checkbox" id="inter9_4" name="inter9_4">Poor letter/word spacing / alignment<br>
        <input type="checkbox" id="inter9_5" name="inter9_5">Difficulty completing reading/writing<br>
        <input type="checkbox" id="inter9_6" name="inter9_6">Poorly organized writing<br>
        <input type="checkbox" id="inter9_7" name="inter9_7">Confuses right/left (past Gr. R)<br>
        <input type="checkbox" id="inter9_8" name="inter9_8">Poor organisation of desk <br>
        <input type="checkbox" id="inter9_9" name="inter9_9">Poor spelling skills<br>
        <input type="checkbox" id="inter9_10" name="inter9_10">Poor eye-foot coordination in sport activities<br>
        <input type="checkbox" id="inter9_11" name="inter9_11">Unable to accurately draw a person<br>
        <input type="checkbox" id="inter9_12" name="inter9_12">Difficulty colouring within boundaries<br>
        <input type="checkbox" id="inter9_13" name="inter9_13">Poor letter formation<br>
        <input type="checkbox" id="inter9_14" name="inter9_14">Poor letter recognition<br>
        <input type="checkbox" id="inter9_15" name="inter9_15">Inaccurate reading (lose place, omits or add words)<br>
        <input type="checkbox" id="inter9_16" name="inter9_16">Cannot think of what to write about<br>
        <input type="checkbox" id="inter9_17" name="inter9_17">Letter/word reversals (past Gr. 1)<br>
        <input type="checkbox" id="inter9_18" name="inter9_18">Poor alignment of numbers in Maths<br>
        <input type="checkbox" id="inter9_19" name="inter9_19">Does not recognize or fix own errors well<br>
        <input type="checkbox" id="inter9_20" name="inter9_20">Poor eye-hand coordination in sport activities<br>
    </div>
    <h4>10. ATTENTION AND BEHAVIOUR(compared to same aged peers)</h4>
    <div>
        <input type="checkbox" id="inter10_1" name="inter10_1">Difficulty with impulse control (cannot wait)<br> 
        <input type="checkbox" id="inter10_2" name="inter10_2">Have difficulty accepting boundaries / discipline<br>
        <input type="checkbox" id="inter10_3" name="inter10_3">Exhibit marked mood variations, tendency to outburst, or high frustration – seem stubborn or uncooperative<br>
        <input type="checkbox" id="inter10_4" name="inter10_4">Demonstrate aggressiveness or impulsivity when overwhelmed <br>
        <input type="checkbox" id="inter10_5" name="inter10_5">Have difficulty entering into play with peers without disrupting their play<br>
        <input type="checkbox" id="inter10_6" name="inter10_6">Seem to have a short attention span compared to peers <br>
        <input type="checkbox" id="inter10_7" name="inter10_7">Become upset by transitions or unexpected change<br>
        <input type="checkbox" id="inter10_8" name="inter10_8">Appear overly affectionate or unaware of personal space<br>
        <input type="checkbox" id="inter10_9" name="inter10_9">Display poor work behaviour – require more verbal cueing to complete age appropriate tasks than others<br>
        <input type="checkbox" id="inter10_10" name="inter10_10">Appear uninterested with group/social activities and tend to withdraw from others<br>
        <input type="checkbox" id="inter10_11" name="inter10_11">Have difficulty resolving peer conflict at an age-appropriate level without intervention<br> 
        <input type="checkbox" id="inter10_12" name="inter10_12">Seem over-reactive / dramatic compared to peers<br>
    <div class="drawPerson">
        <label for="drawPerson">Draw a person score:</label>
        <input type="number" id="drawPerson" name="drawPerson" value="0">
    </div>
    <div class="romberg">
        <h5>TEST POSITION</h5>
        <p>Stand up straight, feet together, arms and hands to the side, looking straight ahead.</p>
        <select name="romberg_test" id="romberg_test">
            <option value="0" >0: None of the observations noted </option>
            <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
            <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
            <option value="3" >3: Any of the above but more marked</option>
            <option value="4" >4: Any of the above but more marked</option>
         </select>
            <h5>EYES OPEN</h5>
            <p>The learner is instructed to continue looking straight ahead without moving. This position should be maintained for approximately 8 seconds.</p>
            <select name="romberg_open" id="romberg_open">
                <option value="0" >0: None of the observations noted </option>
                <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
                <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
                <option value="3" >3: Any of the above but more marked</option>
                <option value="4" >4: Any of the above but more marked</option>
            </select>
            <h5>EYES CLOSED</h5>
            <p>Ask the learner to maintain the position, but to close the eyes and ‘imagine’ that the learner is looking straight ahead. Hold that position for approximately 8 seconds.</p>
            <select name="romberg_closed" id="romberg_closed">
                <option value="0" >0: None of the observations noted </option>
                <option value="1" >1: Slight sway in any direction: slight movement of the arms away from the body, slight face or tongue involvement</option>
                <option value="2" >2: More marked sway: more marked movement of the arms away from the body, and a more marked facial grimaces were grotesque</option>
                <option value="3" >3: Any of the above but more marked</option>
                <option value="4" >4: Any of the above but more marked</option>
            </select>
    </div>
    <div class="oneLeg">
        <h5>TEST POSITION</h5>
        <p>Ask the learner to stand straight and bend one knee at 90° angle.
            <br>1 year 1 second
            <br>2 years- 2 seconds
            <br>3.5-4 years 8 seconds
            <br>6 years 10 seconds right or left
            <br>8 years 30 seconds.</p>
        <select name="oneLeg_test" id="oneLeg_test">
            <option value="0" >0: No abnormality tested</option>
            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
        </select>
        <h5>EYES OPEN</h5>
        <p>Stand on one leg with EYES OPEN.</p>
        <select name="oneLeg_open" id="oneLeg_open">
            <option value="0" >0: No abnormality tested</option>
            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
        </select>
        <h5>EYES CLOSED</h5>
        <p>Stand on one leg with EYES CLOSED.</p>
        <select name="oneLeg_closed" id="oneLeg_closed">
            <option value="0" >0: No abnormality tested</option>
            <option value="1" >1: 2 seconds less than normal time in seconds for age of learner</option>
            <option value="2" >2: 4 seconds less than normal time in seconds for age of learner</option>
            <option value="3" >3: 6 seconds less than normal time in seconds for age of learner</option>
            <option value="4" >4: 8 seconds or more less than normal time for age of learner</option>
        </select> 
    </div>
    <div class="strokes">
                <h5>PRE_WRITING STROKED</h5>
                <p>strokes_1</p>
                <select name="strokes_1" id="strokes_1">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>    
                </select>
                <p>strokes_2</p>
                <select name="strokes_2" id="strokes_2">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_3</p>
                <select name="strokes_3" id="strokes_3">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_4</p>
                <select name="strokes_4" id="strokes_4">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_5</p>
                <select name="strokes_5" id="strokes_5">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_6</p>
                <select name="strokes_6" id="strokes_6">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_7</p>
                <select name="strokes_7" id="strokes_7">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_8</p>
                <select name="strokes_8" id="strokes_8">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>
                <p>strokes_9</p>
                <select name="strokes_9" id="strokes_9">
                    <option value="0" >0: Not attempt was made to draw the line</option>
                    <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
                    <option value="2" >2: Competent</option>
                </select>                
            </div>`    
}

function asses2(){
    score.drawPerson = document.querySelector("#drawPerson").value;
    score.romberg_test = document.querySelector("#romberg_test").value;
    score.romberg_open = document.querySelector("#romberg_open").value;
    score.romberg_closed = document.querySelector("#romberg_closed").value;
    score.oneLeg_test = document.querySelector("#oneLeg_test").value;
    score.oneLeg_open = document.querySelector("#oneLeg_open").value;
    score.oneLeg_closed = document.querySelector("#oneLeg_closed").value;
    for(let i=0; i < 9; i++){
        score.strokes.push(document.querySelector(`#strokes_${i+1}`).value);        
    }
    logChecklist()

}

function reasses3(){
    return `<h3> reasses the following</h3>
    <div class="strokes">
    <h5>PRE_WRITING STROKED</h5>
    <p>strokes_1</p>
    <select name="strokes_1" id="strokes_1">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>    
    </select>
    <p>strokes_2</p>
    <select name="strokes_2" id="strokes_2">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_3</p>
    <select name="strokes_3" id="strokes_3">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_4</p>
    <select name="strokes_4" id="strokes_4">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_5</p>
    <select name="strokes_5" id="strokes_5">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_6</p>
    <select name="strokes_6" id="strokes_6">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_7</p>
    <select name="strokes_7" id="strokes_7">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_8</p>
    <select name="strokes_8" id="strokes_8">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>
    <p>strokes_9</p>
    <select name="strokes_9" id="strokes_9">
        <option value="0" >0: Not attempt was made to draw the line</option>
        <option value="1" >1: An attempt was made in the correct direction but it is not a straight line</option>
        <option value="2" >2: Competent</option>
    </select>                
</div>
<div class="form-group">
    <label for="engRead">English reading score:</label>
    <input type="number" id="engRead" name="engRead" value="0">
</div>
<div class="form-group">
    <label for="afrRead">Afrikaans reading score:</label>
    <input type="number" id="afrRead" name="afrRead" value="0">
</div>
<div class="form-group">
    <label for="math">Math/Wiskunde score:</label>
    <input type="number" id="math" name="math" value="0">
</div>
<div class="form-group">
    <label for="spelling">spelling chart score:</label>
    <input type="number" id="spelling" name="spelling" value="0">
</div>
<div class="form-group">
    <label for="spelkart">spelkart score:</label>
    <input type="number" id="spelkart" name="spelkart" value="0">
</div>`

}

function asses3(){
    for(let i=0; i < 9; i++){
        score.strokes.push(document.querySelector(`#strokes_${i+1}`).value);        
    }
    score.engRead = document.querySelector("#engRead").value;
    score.afrRead = document.querySelector("#afrRead").value;
    score.math = document.querySelector("#math").value;
    score.spelling = document.querySelector("#spelling").value;
    score.spelkart = document.querySelector("#spelkart").value;
    
}

//sets active ip to next in line and current as false
function nextIP(i){
    ipActive[i] = false;
    ipActive[i+1] = true;
}

//activates mind move activities
function mmActive(a = 0, b = 0, c = 0, d = 0){
    mindMoves[a].active = true;
    if (b > 0)
        mindMoves[b].active = true;
    if (c > 0)
        mindMoves[c].active = true;
    if (d > 0)
        mindMoves[d].active = true;

}

function IpSwitch(i){
    clearMM()
    switch(i){
        case 6:
            mmActive(3, 14, 20, 21)
            break;
        case 7:
            mmActive(1)
            break;
        case 8:
            mmActive(1)
            break;
        case 9:
            mmActive(17, 2)
            break;
        case 10:
            mmActive(16, 23)
            reasses += reasses1()
            alert.log("please date and file the drawing")
            if (reasses.length > 10){
                asses1();
                scores.push(score)//adds anything added into running scores
                resetScores()
                reasses = '';
                nextIP(10);
            }
            break;
        case 11:
            mmActive(3, 14, 19)
            break;
        case 12:
            mmActive(7)
            break;
        case 13:
            mmActive(20, 21)
           break;                         
        case 14:
            mmActive(2, 17)
            break;
        case 15:
            mmActive(3, 22)
            break;
        case 16:
            mmActive(16, 4)
            break;
        case 17:
            mmActive(5, 8)
            break;
        case 18:
            mmActive(15, 1)
            break;
        case 19:
            mmActive(11, 6)
            break;
        case 20:
            mmActive(22, 23)
            reasses += reasses2()
            alert.log("please date and file the drawing")
            if (reasses.length > 10){
                asses2();
                scores.push(score)//adds anything added into running scores
                resetScores()
                reasses = '';
                nextIP(20);
            }
            break;
        case 21:
            mmActive(3, 14, 19)
            reasses += reasses3()
            alert.log("please date and file the drawing")
            if (reasses.length > 10){
                asses3();
                scores.push(score)//adds anything added into running scores
                resetScores()
                reasses = '';
                nextIP(10);
            }
           break;
        case 22:
            mmActive(4, 12)
            break;
        case 23:
            mmActive(20, 23)
            break;
        case 24:
            mmActive(21, 6)
            break;
        case 25:
            mmActive(18, 24)
            break;
        case 26:
            mmActive(11, 6, 9)
            break;
        case 27:
            mmActive(3, 22, 17)
            break;
        case 28:
            mmActive(14, 10, 15)
            break;
        case 29:
            mmActive(24, 9, 15)
           break;
        case 30:
            mmActive(3, 14, 15)
            break;
        case 31:
            mmActive(16, 5)
            break;
        case 32:
            mmActive(3, 11, 19)
            break;
          }
}

//puts result from checklist into 2D array
function logChecklist(){ 
    for(let i=0; i < interQuestions.length; i++){
        interCheck.push([])
        for(let k=0; k < interQuestions[i]; k++){
            //var j = document.getElementById(l);
            interCheck[i].push(document.getElementById(`inter${i+1}_${k+1}`));
    }
    }
    
}

function resetScores(){
    scores.drawPerson = 0,
    scores.romberg_test = 0,
    scores.romberg_open = 0,
    scores.romberg_closed = 0,
    scores.oneLeg_test = 0,
    scores.oneLeg_open = 0,
    scores.oneLeg_closed = 0,
    scores.strokes = [],
    scores.engRead = 0,
    scores.afrRead = 0,
    scores.math = 0,
    scores.spelling = 0,
    scores.spelkart = 0, 
    scores.checklist = interCheck
}
