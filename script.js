const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
const info_div = document.getElementById('info');
const ai_text = document.getElementById('ai-text');
const takeover_p = document.getElementById('takeover-p');
const takeover= document.getElementById('takeover');

let title_h = document.getElementById('title');
let household_p = document.getElementById('household-p');
let transportation_p = document.getElementById('transportation-p');
let workplace_p = document.getElementById('workplace-p');
let education_p = document.getElementById('education-p');
let entertainment_p = document.getElementById('entertainment-p');
let privacy_p = document.getElementById('privacy-p');
let security_p = document.getElementById('security-p');
let jobDisplacement_p = document.getElementById('jobDisplacement-p');
let bias_p = document.getElementById('bias-p');
let research_p = document.getElementById('research-p');
let collaboration_p = document.getElementById('collaboration-p');
let norms_p = document.getElementById('norms-p');

let ai_text_dis = 'disabled';
let ai_text_en = 'enabled';

let orig_title = 'Life Without AI';
let title = 'Life With AI';

let orig_household = "Right now, most of our chores and daily tasks are done by us. Some of them are quite tedious and boring. They ruin our productivity, because they simply must be done, and do not leave time for us to do the important things.";
let household = "AI-driven robots taking care of chores and personal needs can offer convenience and assistance, especially for individuals with limited mobility or busy lifestyles. These robots might handle cleaning, meal preparation, reminders for medication, and more."

let orig_transportation = "Traffic is not always managed efficiently, causing us to be late to places we need to be. Cars are currently driven by humans, which is not always safe. Driving requires attention and focus, and even then, that is not enough to prevent accidents from happening. As a result, people die and get injured.";
let transportation = "Self-driving cars and AI-powered traffic management systems aim to reduce accidents, traffic congestion, and travel time. They have the potential to enhance safety, accessibility, and efficiency in transportation."

let orig_workplace = "Daily tasks at work are repetitive and boring. They waste our time. Tasks that we need to finish every day need time and are not always scheduled according to the time needed, leaving us with either too little or too much time to finish work. Some decisions regarding the company cannot be made without considering all possibilities, which takes a lot of time as well. All of this disrupts workflow and damages productivity.";
let workplace = "Automation of routine tasks, such as data entry or analysis, streamlines workflows, allowing humans to focus on higher-level tasks requiring creativity and critical thinking. Decision-making can benefit from AI-generated insights and predictions."

let orig_education = "Not all students learn in the same way, and teachers cannot accomodate each student's needs. Current learning methods are inefficient.";
let education = "Using data from student performance, personalized learning platforms adjust course materials to each student's needs, pace, and preferred method of learning. Better academic results and increased involvement are fostered by this method."

let orig_entertainment = "Finding something that suits your personal tastes is hard. Almost like finding a single needle in a hay stack. Services are not always efficient, and customers become impatient quickly, especially in modern-day society, where everything is expected to be fast.";
let entertainment = "AI-powered suggestions using algorithms to forecast and recommend goods or content based on user preferences, historical usage, and trends. This improves the shopping, entertainment, and service suggestion experiences for users.";

let orig_privacy = "Data privacy is a sensitive topic, and we all doubt the safety of our data on the internet. That is because humans are in charge of managing said data, and they may exploit it for their own gain.";
let privacy = "Concerns may arise regarding data privacy and the need for robust regulations, however AI is more secure, and is quite fair. Strong laws and moral guidelines are essential for protecting private data and preventing data misuse.";

let orig_security = "Humans are prone to making mistakes, reducing the quality of secuirty worldwide. Whether it is police services or cyber security. There is not enough manpower to prevent disasters in time.";
let security = "AI has the ability to reach all corners of the world within seconds, and is less prone errors."

let orig_jobDisplacement = "Right now, finding a job is not easy. The workplace is also potentially a toxic environment, with prejudice and discrimination always a problem.";
let jobDisplacement = "AI's automation might lead to job displacement in certain sectors, necessitating workforce adaptation through retraining and education programs to ensure employability in evolving industries.";

let orig_bias= "Humans have a habit of throwing away morals and ethics when faced with competition or a difficult problem. We also tend to be very impulsive and impatient when making decisions. For us, it is always the question: 'What are we willing to do in order to get what we want?' Some of us do not see the problem in putting others down in order to feel superior, or lying and cheating to get that promotion.";
let bias = "AI can be fairer than humans because it uses logic to make decisions. Unchecked bias in AI algorithms can perpetuate injustice or discrimination. Monitoring, identifying and minimizing bias is essential to ensure equitable outcomes in decision-making";

let orig_research = "Research has progressed a lot throughout recent years, especially in science and IT. However, there are still numerous things that we have yet to discover.";
let research = "AI's ability to process vast amounts of data and identify patterns expedites scientific discoveries and research across various fields. It aids in exploring new possibilities and understanding complex phenomena."

let orig_collaboration = "Right now, humans are only starting to integrate AI into their daily life. We still have doubts about its accuracy and its abilities. Some of us even believe that AI will takeover the world, and are terrified to use it.";
let collaboration = "Collaboration between humans and AI can enhance problem-solving, innovation, and productivity. Humans leverage AI capabilities while providing context, empathy, and ethical judgment."

let orig_norms = "Society has come a long way in these past few decades. Our lives have changed darastically compared to the 1980s, before the internet was introduced. Now, we can connect with anyone in the world, get to know them, and understand their culture. Some trends that someone came up with in the UK could take the world by storm, resulting in people all the way on the other side of the world participating in them.";
let norms = "Increased integration of AI might lead to shifts in societal norms, altering how people interact, communicate, and form relationships. Understanding and adapting to these changes become integral to societal evolution."

function replaceText(pTag, newText, origText){
    pTag.classList.toggle('active')
    if(pTag.classList.contains('active')){
        pTag.innerHTML = newText;
    } else {
        pTag.innerHTML = origText;
    }
}

toggle.onclick = function(){
    toggle.classList.toggle('active');
    body.classList.toggle('active');
    info_div.classList.toggle('active');
    takeover_p.classList.toggle('active');
    takeover.classList.toggle('active');
    replaceText(ai_text, ai_text_en, ai_text_dis, );
    replaceText(title_h, title, orig_title);
    replaceText(household_p, household, orig_household);
    replaceText(transportation_p, transportation, orig_transportation);
    replaceText(workplace_p, workplace, orig_workplace);
    replaceText(education_p, education, orig_education);
    replaceText(entertainment_p, entertainment, orig_entertainment);
    replaceText(privacy_p, privacy, orig_privacy);
    replaceText(security_p, security, orig_security);
    replaceText(jobDisplacement_p, jobDisplacement, orig_jobDisplacement);
    replaceText(bias_p, bias, orig_bias);
    replaceText(research_p, research, orig_research);
    replaceText(collaboration_p, collaboration, orig_collaboration);
    replaceText(norms_p, norms, orig_norms);
}
