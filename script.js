const title = document.getElementById("Aasana");
const pose = document.getElementById("pose");
const check = document.getElementById("check");
const start = document.getElementById("start");
const info = document.getElementById("info");
const grid = document.getElementById("grid");
const message = document.getElementById("message");
const details = document.getElementById("details");
const settings = document.getElementById("settings");
const share =  document.getElementById("share");
const tooltip = document.getElementById("myTooltip");

let aasana, startTime, index, is_playing;

const cdn_path = "https://cdn.glitch.global/34d4b680-898f-4fd7-b277-ec120f30bdfa";

const yogaasana = [
  {
    name: "Adho Mukha Svanasana",
    pose: "Downward Facing Dog",
    level: "Beginner",
    file: "Adho_Mukha_Svanasana_",
    cols: 4,
    empty: [1, 5],
    info: "Stretches and strengthens the feet, calf muscles, hamstring, buttocks and spine. Opens the chest and strengthens the shoulders. Strengthens the core. Calms the mind."
  },
  {
    name: "Adho Mukha Virasana",
    pose: "Downward Facing Hero",
    level: "Beginner",
    file: "Adho_Mukha_Virasana_",
    cols: 6,
    empty: [1, 2],
    info: "Good for lower back, quads, buttocks, spine. Massages the internal organs. Opens the chest. Calms the mind"
  },
  {
    name: "Ashwa Sanchalanasana",
    pose: "Horse walk or Lunge",
    level: "Beginner",
    file: "Ashwa_Sanchalanasana_",
    cols: 4,
    empty: [3, 4, 7, 8],
    info: "Stretches and strengthens the lower back, hip and calf muscles. Relaxes back muscles. Eases sciatic pain. Engages the deep core muscles.	Improves balance and creates stability."
  },
  {
    name: "Badha Konasana",
    pose: "Cobbler or Butterfly",
    level: "Beginner",
    file: "Badha_Konasana_",
    cols: 4,
    empty: [1, 4, 5],
    info: "Opens the hip.	Strengthens the core and spine.	Improves digestion and blood circulation in the lower part of the body. Improves concentration, mental health, relieves stress. Helpful during pregnancy and child birth."
  },
  {
    name: "Bakasana or Kakasana",
    pose: "Crane / Crow",
    level: "Intermediate",
    file: "Bakasana_",
    cols: 3,
    empty: [7],
    info: "Strengthens the core muscles, hips and glutes.	Strengthens the arms, shoulder and wrist. Improves concentration, balance, stability and focus. Good for constipation."
  },
  {
    name: "Bhujangasana",
    pose: "Cobra",
    level: "Intermediate",
    file: "Bhujangasana_",
    cols: 4,
    empty: [3, 4, 7, 8],
    info: "Strengthens the spine and core, good for relieving backpain.	Opens the chest and hence good for Asthma patients. Tones the buttocks. Stimulates abdominal organs."
  },
  {
    name: "Chathuranga Dhandasana",
    pose: "Four Limbed Staff",
    level: "Beginner",
    file: "Chathuranga_Dhandasana_",
    cols: 6,
    empty: [],
    info: "Stretches the muscles of our entire body. Strengthens the arms, back and core muscles. Tones the buttocks."
  },
  {
    name: "Dhanurasana",
    pose: "Bow",
    level: "Intermediate",
    file: "Dhanurasana_",
    cols: 4,
    empty: [2],
    info: "Strengthen the back. Corrects the body posture, helps in building stamina and strength. Stimulates digestion. Good for diabetics and constipation. Good for managing depression."
  },
  {
    name: "Halasana",
    pose: "Plow",
    level: "Intermediate",
    file:"Halasana_",
    cols: 4,
    empty: [1,4,5],
    info: "Stretches hamstrings and calf muscles. Engages the core muscles and relives back pain. Helps to manage diabetes. Stimulates thyroid gland and hence good for hypothyroidism."
  },
  {
    name: "Mayurasana",
    pose: "Peacock",
    level: "Advanced",
    file: "Mayurasana_",
    cols: 6,
    empty: [],
    info: "Tones up the abdominal muscles. Improves blood circulation to abdominal organs. Improves digestion and cures ailments of the stomach and spleen. Good for management of diabetes. Strengthens the forearms, wrists and elbows."
  },
  {
    name: "Navasana",
    pose: "Full Boat",
    level: "Intermediate",
    file: "Navasana_",
    cols: 4,
    empty: [2],
    info: "Strengthens the core muscles. Stimulates the digestive system. Strengthens the quads. Improves balance."
  },
  {
    name: "Parsvottanasana",
    pose: "Intense Side Stretch Pose / Pyramid",
    level: "Intermediate",
    file: "Parsvottanasana_",
    cols: 4,
    empty: [4],
    info: "Stretches calf, hamstring muscles and spine. Strengthens the ankle and feet. Massages the abdominal organs and helps in digestion. Good for constipation. Improves balance and spine mobility. Calms the mind."
  },
  {
    name: "Paschimothanasana",
    pose: "Seated Forward Bend",
    level: "Beginner",
    file: "Paschimothanasana_",
    cols: 4,
    empty: [1],
    info: "The entire back of the body from head to heels, including spinal column is deeply stretched. Improves spine mobility and overall flexibility. Reduces anxiety and calms the mind. Massages the abdominal organs.	Good for Diabetics and constipation."
  },
  {
    name: "Purvottanasana",
    pose: "Upward Plank",
    level: "Intermediate",
    file: "Purvottanasana_",
    cols: 4,
    empty: [3,4,8],
    info: "Strengthens the triceps, wrists, back, buttocks, legs and ankle. Opens the chest and good for respiratory diseases and heart diseases. Strengthens the core. Good for backpain."
  },
  {
    name: "Viparita Shalabasana",
    pose: "Superman / Inverted Locust",
    level: "Beginner",
    file: "Shalabhasana_",
    cols: 6,
    empty: [4],
    info: "Strengthens the shoulders, arms, back, buttocks and hamstring. Massages the entire abdominal organs.	Opens the chest and improves breathing. Good for constipation and depression."
  },
  {
    name: "Supta Virasana",
    pose: "Reclined Hero",
    level: "Intermediate",
    file: "Supta_Virasana_",
    cols: 6,
    empty: [6],
    info: "Stretches the abdomen, thigh, and strengthens the deep hip flexors, knees, and ankles, hence relieves tension in tired leg. Improves digestion. Helps relieve the symptoms of menstrual pain. Good for infertility, headaches, flat feet, acid reflux."
  },
  {
    name: "Urdhva Dhanurasana",
    pose: "Downward Bow",
    level: "Advanced",
    file: "Urdhva_Dhanurasana_",
    cols: 3,
    empty: [8],
    info: "Strengthen the back, abdominal organs, shoulders, and buttocks. It enhances blood circulation. Helps in correcting the hunch back body posture."
  },
  {
    name: "Ustrasana",
    pose: "Camel",
    level: "Intermediate",
    file: "Ustrasana_",
    cols: 3,
    empty: [],
    info: "Stretches the entire front of the body, the ankles, thigh and groins. Opens up the chest, helps in breathing and hence good for management of Asthma. Tightens the buttocks and hamstring. Good for management of heart issues. Stimulates the organs of the neck and hence good for management of thyroid diseases."
  },
  {
    name: "Utthita Parsvokonasana",
    pose: "Extended Side Angle",
    level: "Beginner",
    file: "Utthita_Parsvakonasana_",
    cols: 4,
    empty: [4,5,8],
    info: "Opens the hips and tones the ankles, knees and thighs. Opens the chest and improves breathing. Reduces the side fat, around the waist and the hips. Improves the posture, stability, balance and concentration. It relieves sciatic and arthritic pains."
  },
  {
    name: "Uttitha Trikonasana",
    pose: "Triangle",
    level: "Intermediate",
    file: "Uttitha_Trikonasana_",
    cols: 3,
    empty: [3,6],
    info: "Strengthens the side muscles, spine, legs, hamstring, and calf muscles. Opens the chest and hip joint. Increases stability, concentration, and balance. Stretches and lengthens the spine.	Reduces the waist size."
  },
  {
    name: "Virabhadrasana I",
    pose: "Warrior I",
    level: "Beginner",
    file: "Virabhadrasana1_",
    cols: 3,
    empty: [1,3,4,6,9],
    info: "Improves hip mobility. Strengthens the calf muscles, quads, relieves the stiffness in shoulders, back. Opens the chest and improves breathing. Tones up the ankles and knees."
  },
  {
    name: "Virabhadrasana II",
    pose: "Warrior II",
    level: "Beginner",
    file: "Virabhadrasana2_",
    cols: 4,
    empty: [8],
    info: "Opens the hip joints, tones the ankles, knees, and thighs. Opens the chest and improves breathing. Strengthens the shoulder (Deltoid).	Brings in elasticity to the leg and back muscles. Improves balance, concentration, and stability."
  },
  {
    name: "Virabhadrasana III",
    pose: "Warrior III",
    level: "Intermediate",
    file: "Virabhadrasana3_",
    cols: 4,
    empty: [7,8],
    info: "Improves the hip mobility. Improves proprioception and posture. Strengthens the back, hips, thighs, knees, shoulders, ankles, and leg. Improves a sense of balance, coordination, and concentration. Tones core muscles, hips, and abdomen."
  },
  {
    name: "Ardha Kati Chakrasana",
    pose: "Half wheel",
    level: "Beginner",
    file: "Ardha_Kati_Chakrasana_",
    cols: 2,
    empty: [2,9],
    info: "Provides good lateral bending and stretches the spine. Improves flexibility of the spine and hips. Reduces fat around the abdominal region and tones the waist. Tones the muscles around the waist, hips and abdomen."
  },
  {
    name: "Hasta Uttanasana",
    pose: "Raised Arms Bend Back",
    level: "Beginner",
    file: "Hasta_Uttanasana_",
    cols: 2,
    empty: [1,8,10],
    info: "Stretches the muscles of the abdomen and tones the abdominal muscles. Strengthens the shoulders and spinal extension, tones the arms. Opens the chest and improves breathing. Strengthens the legs. Stretches the spine and strengthens it."
  },
  {
    name: "Niralamba Sarvangasana",
    pose: "Unsupported Shoulder Stand",
    level: "Advanced",
    file: "Sarvangasana_",
    cols: 2,
    empty: [],
    info: "Strengthens and tones the entire body especially the core, arm and shoulders. Good for hypothyroidism and balances all endocrine organs. Calms the mind, reduces fatigue, stress. Good for varicose veins."
  },
  {
    name: "Sirsasana",
    pose: "Headstand",
    level: "Advanced",
    file: "Sirasana_",
    cols: 2,
    empty: [],
    info: "Improves blood flow to the brain. Good for headache. Strengthens the core, arms, and shoulders. Helps in correction of hormonal imbalances. Good for varicose veins. Improves breathing."
  },
  {
    name: "Vrikshasana",
    pose: "Tree",
    level: "Beginner",
    file: "Vrikshasana_",
    cols: 2,
    empty: [2],
    info: "Improves the balance of the body. Tones the muscles of the legs and improves the posture. Strengthens the core. Opens the chest.	Improves focus and concentration."
  },
  {
    name: "Padmasana",
    pose: "Lotus",
    level: "Beginner",
    file: "Padmasana_",
    cols: 4,
    empty: [1,4],
    info: "Opens the hip joints and improves the hip mobility. It is the asana for Meditation and Pranayama. Stabilizes the spine. Reduces menstrual complications.	It eases childbirth."
  },
  {
    name: "Adho Mukha Vrikshasana",
    pose: "Handstand",
    level: "Advanced",
    file: "Adho_Mukha_Vrksasana_",
    cols: 2,
    empty: [],
    info: "It increases upper body strength. Improves balance and stability."
  },
  {
    name: "Akarna Dhanurasana",
    pose: "Archer",
    level: "Advanced",
    file: "Akarna_Dhanurasana_",
    cols: 4,
    empty: [3,4,8],
    info: "This pose increases the flexibility of the leg muscles. Helps to move the bowels."
  },
  {
    name: "Ardha Baddha Padmotanasana",
    pose: "Half Bound Standing Lotus",
    level: "Advanced",
    file: "Ardha_Baddha_Padmotanasana_",
    cols: 2,
    empty: [],
    info: "Strengthens and stretches legs, hips and shoulder."
  },
  {
    name: "Ardha Chandrasana",
    pose: "Half Moon",
    level: "Beginner",
    file: "Ardha_Chandrasan_",
    cols: 3,
    empty: [2,3,9],
    info: "It tones lower part of the spine and nerves connected with the leg muscles. Strengthen the core muscles."
  },
  {
    name: "Ardha Matsyendrasana",
    pose: "Half Lord of Fish",
    level: "Intermediate",
    file: "Ardha_Matsyendrasana_",
    cols: 4,
    empty: [1,4],
    info: "It restores natural alignment of the spine. It releases the lower back muscles and thus gets relief from lower back pain."
  },
  {
    name: "Ashtanga Namaskara",
    pose: "Eight Limbed",
    level: "Intermediate",
    file: "Ashtanga_Namaskara_",
    cols: 6,
    empty: [],
    info: "Increases strength of arms and shoulders. Strengthens biceps and triceps and chest. Improves stability, flexibility and mobility of the back and spine. It relieves back pain."
  },
  {
    name: "Bhekasana",
    pose: "Frog",
    level: "Intermediate",
    file: "Bekasana_",
    cols: 6,
    empty: [1,2,3],
    info: "Relieves pain in the knee joints. Cures flat feet. Relieves pain in the heels."
  },
  {
    name: "Bharadvajasana",
    pose: "Bharadvaja's Twist",
    level: "Intermediate",
    file: "Bharadvajasana_",
    cols: 3,
    empty: [3],
    info: "Aids in better digestion and boosts metabolism. Relieves stress. Reduces love handles and belly fat. Improves Blood and lymphatic circulation. Good for sciatica."
  },
  {
    name: "Bhuja Pidasana",
    pose: "Shoulder Press",
    level: "Advanced",
    file: "Bhuja_pidasana_",
    cols: 3,
    empty: [],
    info: "Strengthens hands, wrists, and abdominal muscles. Improves balance. Aids in digestion. Improves Blood circulation."
  },
  {
    name: "Eka Pada Galavasana",
    pose: "Flying Pigeon",
    level: "Advanced",
    file: "Eka_Pada_Galavasana_",
    cols: 6,
    empty: [],
    info: "Strengthens the core, wrists, arms and shoulders. Massages abdominal organs. Opens up the hips, inner thighs and stretches the glutes. Improves balance."
  },
  {
    name: "Gomukhasana",
    pose: "Cow's face",
    level: "Intermediate",
    file: "Gomukhasana_",
    cols: 3,
    empty: [1],
    info: "Chest expands. Improves body postures. It stretches shoulder, upper arm hips and thighs."
  },
  {
    name: "Hastapadasana",
    pose: "Standing Forward Bend",
    level: "Beginner",
    file: "Hastapadasana_",
    cols: 3,
    empty: [3,9],
    info: "Tones abdominal muscles and spinal nerves. Improves digestion. Reduces bloating sensation. Increases blood flow to the brain."
  },
  {
    name: "Janu Sirsasana",
    pose: "Head to Knee",
    level: "Intermediate",
    file: "Janu_Sirsasana_",
    cols: 6,
    empty: [],
    info: "Stretches the spine, hamstrings, groin and shoulders. Helps to get rid of the belly fat."
  },
  {
    name: "Kati Chakrasana",
    pose: "Standing Spinal Twist",
    level: "Beginner",
    file: "Kati_Chakrasana_",
    cols: 2,
    empty: [],
    info: "Improves the flexibility of the spine and waist. Good for relieving constipation. Opens up neck and shoulder. Helps to relieve back pain."
  },
  {
    name: "Kukkutasana",
    pose: "Rooster",
    level: "Beginner",
    file: "Kukkutasana_",
    cols: 4,
    empty: [9,12],
    info: "Strengthens wrists, arms and shoulders. Improves digestion. Tone biceps and triceps muscles."
  },
  {
    name: "Lolasana",
    pose: "Pendant",
    level: "Beginner",
    file: "Lolasana_",
    cols: 3,
    empty: [1,3],
    info: "Strengthens the arms wrists and shoulders. Builds upper body strengths and core strength. Improves control coordination and agility."
  },
  {
    name: "Marichyasana I",
    pose: "Marichi's pose 1",
    level: "Intermediate",
    file: "Marichyasana_1_",
    cols: 4,
    empty: [1],
    info: "Calms and relaxes the mind. Stretches spine and shoulder. Stimulates abdominal organs. Enhances digestion."
  },
  {
    name: "Marichyasana III",
    pose: "Marichi's pose 3",
    level: "Intermediate",
    file: "Marichyasana_3_",
    cols: 4,
    empty: [3,4,8],
    info: "Improves mobility of shoulder joints. Massages the abdominal organs. Stimulates digestion."
  },
  {
    name: "Matsyasana",
    pose: "Fish",
    level: "Beginner",
    file: "Matsyasana_",
    cols: 6,
    empty: [6],
    info: "Promotes respiration. Benefits women’s reproductive systems. Improves posture. Strengthens neck and spine."
  },
  {
    name: "Padma Mayurasana",
    pose: "Peahen",
    level: "Intermediate",
    file: "Padma_Mayurasana_",
    cols: 6,
    empty: [],
    info: "Improves blood circulation to the abdominal organs. Strengthens the fore arms, wrists and elbows."
  },
  {
    name: "Parighasana",
    pose: "Gate",
    level: "Intermediate",
    file: "Parighasana_",
    cols: 3,
    empty: [1,4,7],
    info: "Stretches the calves, hamstring, pelvic region and spine. Opens up the side body, chest and shoulders. Stimulates the lungs and abdominal organs."
  },
  {
    name: "Parivrtta Parsvakonasana",
    pose: "Revolved side angle",
    level: "Intermediate",
    file: "Parivrtta_Parsvakonasana_",
    cols: 4,
    empty: [1,2,5],
    info: "Tones legs, thighs, calves and ankles. Rejuvenates the spine and relives back pain. Strengthens the back. Improves body balance."
  },
  {
    name: "Parivrtta Trikonasana",
    pose: "Revolved Triangle",
    level: "Intermediate",
    file: "Parivrtta_Trikonasana_",
    cols: 3,
    empty: [1,2,4],
    info: "Tones the thigh, calf and hamstring muscles. Increases the blood supply to lower spine. Invigorates the abdominal organs and strengthens the hip muscles."
  },
  {
    name: "Pavanamuktasana",
    pose: "Break the wind",
    level: "Beginner",
    file: "Pavanamuktasana_",
    cols: 4,
    empty: [],
    info: "Helps in relieving gas. Relieves constipation."
  },
  {
    name: "Phalakasana",
    pose: "Plank",
    level: "Beginner",
    file: "Phalakasana_",
    cols: 4,
    empty: [3,4],
    info: "Strengthens the lower back muscles. Builds the upper body and the core. Strengthen arms shoulders and wrists."
  },
  {
    name: "Pincha Mayurasana",
    pose: "Feathered Peacock",
    level: "Advanced",
    file: "Pincha_Mayurasana_",
    cols: 2,
    empty: [],
    info: "Strengthens the shoulder, arms and back. Stretches the shoulder and chest. Decompresses the spine. Improves sense of balance."
  },
  {
    name: "Prasarita Padottanasana",
    pose: "Wide legged Forward Bend",
    level: "Beginner",
    file: "Prasarita_Padottanasana_",
    cols: 4,
    empty: [1,4],
    info: "Stretches the back of the legs, hamstrings, calves, glutes and lower back. Improves hip joint flexibility. Strengthens the feet."
  },
  {
    name: "Setu Bandha Sarvangasana",
    pose: "Bridge",
    level: "Intermediate",
    file: "Setu_Bandha_Sarvangasana_",
    cols: 4,
    empty: [4],
    info: "Relieves backache. Good for thyroid as it improves the blood circulation around the neck. Keeps the spine healthy."
  },
  {
    name: "Tolasana",
    pose: "Scale",
    level: "Intermediate",
    file: "Tolasana_",
    cols: 3,
    empty: [1,3],
    info: "Strengthens wrists, arms and shoulders, chest, hips and legs. Stretches the hip flexors. Improves balance."
  },
  {
    name: "Triang Mukhaikapada Paschimottanasana",
    pose: "One Leg Folded Forward Bend",
    level: "Beginner",
    file: "Triang_Mukhaikapada_Paschimottanasana_",
    cols: 4,
    empty: [1],
    info: "Loosens up the hips and hamstrings while relaxing the tension in the back muscles."
  },
  {
    name: "Vasisthasana",
    pose: "Side Plank",
    level: "Intermediate",
    file: "Vasisthasana_",
    cols: 4,
    empty: [1,4,8],
    info: "Strengthens the wrists, shoulders, exercises the legs. Tones the lumbar and coccyx region of the spine. Builds body balance."
  }
];



function DragNSort (config) {
  this.$activeItem = null;
  this.$container = config.container;
	this.$items = this.$container.querySelectorAll('.' + config.itemClass);
  this.dragStartClass = config.dragStartClass;
  this.dragEnterClass = config.dragEnterClass;
}

DragNSort.prototype.removeClasses = function () {
	[].forEach.call(this.$items, function ($item) {
		$item.classList.remove(this.dragStartClass, this.dragEnterClass);
  }.bind(this));
};

DragNSort.prototype.on = function (elements, eventType, handler) {
	[].forEach.call(elements, function (element) {
    element.addEventListener(eventType, handler.bind(element, this), false);
  }.bind(this));
};

DragNSort.prototype.onDragStart = function (_this, event) {
  _this.$activeItem = this;

  this.classList.add(_this.dragStartClass);
  event.dataTransfer.effectAllowed = 'move';
  event.dataTransfer.setData('text/html', this.innerHTML);
};

DragNSort.prototype.onDragEnd = function (_this) {
	this.classList.remove(_this.dragStartClass);
};

DragNSort.prototype.onDragEnter = function (_this) {
  if (!this.classList.contains("solved")) {
	  this.classList.add(_this.dragEnterClass);
  }
};

DragNSort.prototype.onDragLeave = function (_this) {
	this.classList.remove(_this.dragEnterClass);
};

DragNSort.prototype.onDragOver = function (_this, event) {
  if (event.preventDefault) {
  event.preventDefault();
  }

  event.dataTransfer.dropEffect = 'move';

  return false;
};

DragNSort.prototype.onDrop = function (_this, event) {
	if (event.stopPropagation) {
    event.stopPropagation();
  }

  if ( (!this.classList.contains("solved")) && (_this.$activeItem !== this) ) {
    _this.$activeItem.innerHTML = this.innerHTML;
    this.innerHTML = event.dataTransfer.getData('text/html');
  }

  _this.removeClasses();

  return false;
};

DragNSort.prototype.bind = function () {
	this.on(this.$items, 'dragstart', this.onDragStart);
	this.on(this.$items, 'dragend', this.onDragEnd);
	this.on(this.$items, 'dragover', this.onDragOver);
	this.on(this.$items, 'dragenter', this.onDragEnter);
	this.on(this.$items, 'dragleave', this.onDragLeave);
	this.on(this.$items, 'drop', this.onDrop);
};

DragNSort.prototype.init = function () {
	this.bind();
};

// Instantiate
var draggable = new DragNSort({
	container: document.querySelector('.drag-list'),
  itemClass: 'drag-item',
  dragStartClass: 'drag-start',
  dragEnterClass: 'drag-enter'
});
draggable.init();


var arr = [];
const Place_ID_list = ['A','B','C','D','E','F','G','H','I','J','K','L'];

let num_errors, is_random;

function startGame() {
  console.log("new game started!");
  is_playing = true;
  
  is_random = document.getElementById('rand').checked;
  // console.log("Is random: ",is_random);
  
  message.innerHTML = ``;
  details.innerHTML = ``;
  info.innerHTML = ``;
  start.innerHTML = `New Game`;
  share.style.display = "none";
  check.style.display = "block";
  tooltip.innerHTML = "Copy to clipboard";
  
  if (is_random == true) {
    index = Math.floor(Math.random() * yogaasana.length);
  } else {
    index++;
    if (index == yogaasana.length) {
      index = 0;
    }
  }

  aasana = yogaasana[index];
  
  title.innerText = `${aasana.name}`;
  pose.innerText = `Pose: ${aasana.pose}`;
  
  // const template = document.getElementById('tile');
  
  arr = Array.from({length: 12}, (x, i) => i+1);
  shuffle(arr);
  
  for(var i=0; i<12; i++) {
    
    // const newTile = template.content.cloneNode(true);
    const Tile = document.getElementById(`${Place_ID_list[i]}`);
    // const img = newTile.querySelector('.drag-item');
    
    Tile.style.width = `${100/aasana.cols}%`;
    Tile.innerHTML = `<img id="${arr[i]}" src="${cdn_path}/${aasana.file}${arr[i]}.jpg">`;
    Tile.setAttribute("draggable",true);
    Tile.classList.remove("solved");
    // grid.appendChild(newTile);
  }

  startTime = new Date().getTime();
  
//  document.body.className = "";
  grid.style.display = "revert";
  
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let Guess = [], cur_guess, answer="1 2 3 4 5 6 7 8 9 10 11 12";
const ans = Array.from({length: 12}, (x, i) => i+1);

function checkMatrix() {

  if (is_playing == false) {
    return;
  }
  
  Guess = [];

  let w, noDataFound = "0";
  // let new_Guess = [...draggable.getElementsByClassName("word")].map(w => w.textContent).join(" ");
  // console.log(new_Guess);
  for (var i=0; i<draggable.$items.length; i++) {
    try {
      w = draggable.$items[i].childNodes[1].id;
    } catch {
      w = draggable.$items[i].childNodes[0].id;
    }
    Guess.push(w);
  }
  cur_guess = Guess.join(" ");
  
  const empty_tiles = aasana.empty;
  
  var num_misplaced_tiles = 0;
  
   for (var i = 0; i < ans.length; i++) {
     if (empty_tiles.includes(ans[i])) {
       if ((empty_tiles.includes(parseInt(Guess[i])) == false)) {
        num_misplaced_tiles += 1; 
       }
     } else {
      if (ans[i] != Guess[i]) {
        num_misplaced_tiles += 1;
      }
     }
    }  
  
  console.log(cur_guess);
  
  if(num_misplaced_tiles == 0){
    console.log("Successfully finished game");
    gameOver();
    return;
  }
  
  console.log("Wrong guess.. Try again..");
  message.innerHTML = `
    ${num_misplaced_tiles} tiles in wrong position.
    Try again.`;

}

let elapsedTime;

function gameOver() {
  if (is_playing == false) {
    return;
  } else {
    is_playing = false;
  }
  elapsedTime = new Date().getTime() - startTime;
  
  for(var i=0; i<12; i++) {
    // const newTile = template.content.cloneNode(true);
    const Tile = document.getElementById(`${Place_ID_list[i]}`);
    // const img = newTile.querySelector('.drag-item');
    Tile.setAttribute("draggable",false);
    Tile.classList.add("solved");
    // grid.appendChild(newTile);
  }
  
  message.innerHTML = `
    <span class="congrats">Congrats!</span>
    <br> You finished in ${elapsedTime/1000} seconds
    `;
  
  details.innerHTML = `Level: ${aasana.level} <br>
  ${aasana.info}
  `;
  
  if (is_random == false) {
    save_history();
  }
  
  share.style.display = "revert";
  check.style.display = "none";
  share.focus();
  ShareIt();

//  document.body.className = "winner";
}

document.addEventListener("keypress", function onPress(event) {
    if (event.key === "@") {
      console.log("cheat code for testing game");
      // words.innerHTML = ``;
      for(var i=0; i<12; i++) {
        // const newTile = template.content.cloneNode(true);
        const Tile = document.getElementById(`${Place_ID_list[i]}`);
        // const img = newTile.querySelector('.drag-item');
        Tile.innerHTML = `<img id="${i+1}" src="${cdn_path}/${aasana.file}${i+1}.jpg">`;
        // grid.appendChild(newTile);
      }
      gameOver();
      return;
    }
});

var copyText;

function ShareIt() {
  
  let linkURL = window.location.href;
  
  copyText = `#Yoga-game I learnt about ${aasana.name} in ${Math.round(elapsedTime/1000)} sec at ${linkURL}`;
  
  navigator.clipboard.writeText(copyText);
  
   if (navigator.canShare) {
    navigator.share({
      title: 'Share results',
      text: `#Yoga-game I learnt about ${aasana.name} in ${Math.round(elapsedTime/1000)} sec at ${linkURL}`,
      // url: linkURL,
    })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
  }
  
//  alert("Copied the results to clipboard");
  tooltip.innerHTML = "Results copied";
}

function outFunc() {
  tooltip.innerHTML = "Copy to clipboard";
}


function get_history() {
  const noItemsFound = -1;
  const ind = localStorage.getItem('index') || noItemsFound;
  index = JSON.parse(ind);
}

function save_history() {
  const ind = JSON.stringify(index);
  localStorage.setItem('index', ind);
}

get_history();
grid.style.display = "none";
settings.style.display = "revert";
share.style.display = "none";
check.style.display = "none";

start.addEventListener("click", startGame);
check.addEventListener("click", checkMatrix);
