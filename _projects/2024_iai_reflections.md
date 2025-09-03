---
layout: page
title: 2024 Interactive AI CDT Reflections
description: Reflections on my research and experiences during the Interactive AI CDT Foundation Year
img: assets/img/projects/reflections.jpeg
importance: 3
category: archive
related_publications: false
toc:
  sidebar: left
---

## Summer Project Reflections

**Author's Note**: The following report was initially submitted to the Interactive AI CDT as a supplementary project report. The report has been anonymised for privacy reasons. \
PDF Version: [Anonymised Summer Project Reflective Report.pdf]({{ site.url }}/assets/pdf/Anonymised_Summer_Project_Reflective_Report.pdf){:target="\_blank"}

### Introduction

When discussing the summer project with my initial supervisor, _Supervisor-2_, the only objective I had for the project was to ensure that it prepared me for a career in academia, allowing me to make as many crucial mistakes as possible early in my career.
I felt that the summer project was the final milestone before I could begin my academic career, so I felt it was necessary to ensure that I was well-equipped for academia, primarily due to the imposter syndrome that seemingly all academics have suffered from [1, 2,5].
Throughout the summer project, I had many successes and failures that do not have their place within a technical dissertation; however, I believe that summarising and highlighting these learning experiences will provide better insight into how the summer project has prepared me for PhD life, which is the true goal of the project.

Before discussing the motivations, successes, and mistakes of the summer project, I would like to discuss two key points.
Firstly, a thank you to all the lecturers who took the time to listen to me ramble about potential project ideas at the start of the year;
I had formally met with more than fourteen lecturers across computer science, modern languages, and psychology when finding a supervisory team and proposing project ideas, not including the lecturers and academics who also had informal discussions with me during this time.
With the help of all those discussions, I found an area within which I am passionate about working, and I hope that when I become an academic I can repay the favour to future students.
Secondly, when discussing my project and my role within the wider research community, I am still unsure if I am an HCI researcher, an AI researcher, or an amalgamation of the two;
however, through the summer project, I have come to peace with the fact that I am currently perceived as being between the two, with lecturers of each area not being able to agree where I fit, as I am still beginning my academic journey and will find my 'belonging' soon enough [3].

### Motivations for Summer Project

The technical report will identify the academic motivations for undertaking the specified research project, such as the literature gaps and user needs;
however, the academic motivations do not identify my reasoning for choosing the specific problem area in regard to enhancing my academic capabilities and creating the foundation of my PhD studies.

#### Personal

When deciding on a topic that was suitable for my summer project, the three personal factors that I took into account were my research methods, personal motivators, and interests;
I also wanted to find a niche within Interactive AI that was closer to HCI than AI, while also identifying the conferences and journals that would best suit the intersection of these research areas.

Throughout my studies, I have always been a sporadic researcher, which was made clear when I naively proposed a PhD consisting of 12 papers to _Supervisor-2_;
due to this, I wanted to ensure that my research project consisted of smaller subprojects that I could hop between.
Although having multiple smaller projects and systems agreed with my work style and ensured that I did not experience burnout from focusing on one project for too long, it meant that I kept finding smaller projects within each sub-project due to research gaps;
through this project, I came to find that no HCI research project will allow researchers to focus on a single area due to the nature of working with human participants and the number of systems required to ensure successful user studies.

When deciding on a research area, I initially wanted to work within AI for education, as this is an area that I am very passionate about;
however, over time, the study transitioned to AI for games, AI for interfaces, and AI that modelled learning.
None of the proposed ideas felt 'right' to me, and I was not happy with how they would benefit the end users.
My motivators are primarily altruistic, so I knew that the end goal had to have a definitive group of end users that could not be assisted without the research project.
While I was at a [gaming convention in Birmingham](https://x.com/igfestuk), I came across the charity [SpecialEffect](https://www.specialeffect.org.uk/), which focuses on supporting physically disabled children to engage with video games through accessible technology.
The idea of open-source accessible controllers came to fruition after discussing potentially beneficial research with the charity's volunteers;
this was the first time that a research area felt 'right'.

In previous studies, I have not involved personal interests and hobbies as I wanted to maintain a clear separation between my academic work and free time;
however, as the PhD will essentially become my life for the next three years, I decided to experiment with merging the two within my study.
I found that this led to me becoming more heavily invested in my research without any negative repercussions thus far.

#### Technical

The summer project brief highlighted using the technical skills developed over the foundation year of the CDT;
while I aimed to do so, I also found myself wanting to use the summer project to develop further skills, including those outside of interactive AI.
I decided to build upon the developed AI skill set by learning genetic algorithms, but I also wanted to research game development and become familiar with electronic engineering through the summer project;
aiming to learn skills within three distinct areas may have been unwise, but I wanted the summer project to push the limits and test myself on how much I could research and learn within a short period.

### Project Evaluation

From a purely academic viewpoint, the project is a failure.
I did not manage to submit to CHI for the 2025 paper deadline, multiple systems within the study remain incomplete, the user study was not completed within the study's time frame, and the research project was not validated by said user study;
however, my supervisors advised me that the summer project was not graded solely on the academic success of the research.
While voicing my frustrations about the final project, I was asked if I felt that I had created a clear research direction to take forward into my academic career and if I had started to make technical breakthroughs;
to both these questions, I answered 'yes'.

#### Research Direction

Through the summer project, I found that AI-enabled democratised hardware for individuals with accessibility needs was the area I wanted to explore and make my research niche;
the proposed research niche managed to win an award for ['greatest potential for impact'](https://prosquared.org/2024-summer-school/), which validated the summer project's success in identifying a clear research direction.
By narrowing the area to accessible controllers for fighting games, a clear research niche arose;
this has set the foundation for future PhD studies.
While I can ruminate on the failings of the submitted technical report for the summer project, my supervisors have reminded me that the goal of any researcher is to find a clear niche.
To that extent, I can say with confidence that the summer project was successful in this area.

#### Technical Breakthroughs

Over the three months of the summer project, there were many moments where research came to a halt due to the lack of available technical solutions for the systems being developed;
due to this, a multitude of systems had to be developed, such as a [UDP server that enables emulated virtual controller use](https://github.com/jackjburnett/VirtualLeverlessReceiver/), a [Unity program that enables fully customisable virtual controller creation](https://github.com/jackjburnett/VirtualLeverless/), a [method of generating 3D-printable controllers parametrically](https://github.com/jackjburnett/ControllerForge), a simple [method for viewing controller layouts](https://github.com/jackjburnett/ControllerForgeVisualiser/), and a back-end that enables [genetic algorithms for controller layout optimisation](https://github.com/jackjburnett/LeverlessKO).
All of the developed systems within the summer project were novel, with no alternatives currently available, and will enable future researchers to undertake new research within HCI.
Through the development of these systems, I believe that the summer project was successful in creating a foundation for my future research.

### Successes

Aside from the successes highlighted previously, two key areas of success were the technical skills developed and the academic connections made throughout the summer project.

#### Technical Skills

Through the systems developed within the summer project, I developed a wide array of technical skills, such as knowledge of UDP servers in Python, virtual controller emulation, the [VigEm Client](https://github.com/nefarius/ViGEmClient), Unity game development, C## for game development, development for Android, HID devices and control codes, [DEAP Python library](https://deap.readthedocs.io/en/master/) usage, genetic algorithms knowledge, HTML canvases, electron development, react development, flutter development, and flask application development.
Through attending a [summer school focusing on device prototyping and production](https://prosquared.org/event/2024-summer-school/), I also developed knowledge of PCBs, parametric design, surface-mounted components, isotyping, and other key electronic engineering concepts I had no prior experience with.
One of the key motivations for the summer project was testing how much I could learn within a short period, so I see this learning experience as a major success.

#### Academic Connections

The summer project taught me the benefits and importance of making connections within academia.
The supervision team for my research was the result of many discussions with lecturers, who in turn suggested further lecturers to discuss with and so on, which allowed for a team that was the 'best fit' in regard to their research fields and academic approaches.
While the search for a supervision team, which I am greatly thankful for as they have already supported and developed me as a researcher in substantial ways, was lengthy, it provided me with many connections within the university;
this search resulted in me joining the [BIG lab](https://biglab.co.uk/), the [BIG Culture lab](https://big-culture.github.io/), and the [Bristol Digital Game Lab](https://bristoldigitalgamelab.blogs.bristol.ac.uk/), alongside creating key academic links outside of my supervisory team, such as _Academic-1_ and _Academic-2_.
Joining the BIG lab had the largest impact on my research, as researchers within the lab, such as _Researcher-1_, have played a massive role in supporting the development of the summer project.

Through conferences and supervisor suggestions, I also made academic connections with PhD students and lecturers in universities outside of Bristol, which helped to shape the summer project.
_Academic-3_ from the University of Bath provided key insights into getting hand data from users, which shaped the initial research direction.

### Mistakes

When I conceptualised the summer project, I stated that I wanted to allow myself to make many mistakes early to learn from;
I underestimated how many mistakes were possible in three months.
Primarily, the key mistakes made were due to planning and time management issues; however, largely due to the support of my supervisors who mitigated potentially fatal issues the moment they identified them, these did not completely derail the project.
Before discussing some of the key mistakes that I made, I would like to acknowledge that all three of my supervisors had highlighted that they would occur in different ways.
_Supervisor-3_ clearly identified that the goals of the summer project were unlikely to be achieved before the CHI deadline, suggesting focusing on identifying and recording the link between controller preferences and hand data.
_Supervisor-1_ did not want to limit my exploration during the summer project but emphasised that I should ensure that at least one area of the project was finished before submission.
_Supervisor-2_ also took _Supervisor-1_'s approach, and most of our meetings focused on narrowing the research scope after my sudden expansions to it.
Failing to fully acknowledge the suggestions of my supervisors with respect to time frames was my biggest mistake.

#### Fixating on CHI

As a first-year PhD student with copious amounts of imposter syndrome, I decided that I needed to submit to CHI 2025 to prove myself as a researcher;
this fixation, alongside the ambitious goals of the project, led to academic burnout midway through the project and unnecessary stress.
On the week of the CHI deadline, I voiced my concerns about not submitting to _Supervisor-1_;
_Supervisor-1_ quickly put all my concerns to rest by making me realise that the fixation on CHI, alongside not telling my supervisors of this fixation, was a crucial mistake as it led to me setting unobtainable goals and caused an ever-expanding project scope increase.

#### Ambitious Deadlines

At a glance, the timescale for my project seemed reasonable and justified;
however, on deeper inspection, glaring issues arose, such as developing the novel Unity virtual controller in 20 days, completing all initial user studies in a week, developing the 3D-printable controller generator in a month, and creating a conflict resolution method for 3D interactive spaces via simulations.
I wonder if the deadlines I proposed were due to naive assumptions of solution complexity for the problems outlined, sleep deprivation during the synopsis submission, or genuine delusions;
however, I now know that even in a world where I could dedicate all three months to the summer project unhindered by life, these deadlines are still ambitious at best.

#### Not Accounting for Life

Building on the previous point, my deadlines should have accounted for the fact that life has a habit of happening and that humans are not academic machines.
Although I acknowledged that I am a sporadic researcher, my deadlines did not;
this led to many hours of unproductive procrastination, which halted research progress.
The deadlines I set took into account the need for downtime on weekends but not the potential for illness or injury.
_Supervisor-2_ reiterated the need to allow for downtime and potential mishaps;
I did not fully understand the importance of this until I broke my elbow and realised the mistake of not accounting for life.
During the break from my studies due to injury, I realised that I needed to set aside suitable time for hobbies during research projects and that my prior approach to academia was not viable in the long run.

### Lessons Learnt

The mistakes made throughout the summer project will be for nought if I do not learn from them and evolve as a researcher.
The summer project served as a great introduction to academic life as a PhD student and has provided me with insight that will guide my future studies.
The key takeaways from this experience are the need for better planning, listening to my supervisors' advice, and reading literature outside of computer science.

#### Planning and Time Management

When planning future projects, I will start giving ample time for procrastination, illness, hobbies, burnout, writer's block, bug-fixing, and user studies.
I will no longer plan with the expectation that work will always be completed with 100% efficiency.
While it is beneficial to be ambitious with project scope and deliverables, I have found this is not true for deadlines.
I have adopted a new mindset, in which I will no longer expect projects to be completed within narrow time frames, nor will I fixate on arbitrary deadlines as there is always another conference or venue that I can submit to.
Still, I will continue to be ambitious with projects.
It was unwise not to account for potential delays that are likely to occur during any research project, and as Tolkien stated, 'It does not do to leave a live dragon out of your calculations if you live near one' [4].

#### Communicating with Supervisors

I chose a supervisory team which was the best match in terms of research area, approach to research, and personality;
however, I only communicated with my supervisors in regard to advice on the research itself.
In the final weeks of the project, I found the benefit of listening to the prior experiences of my supervisors and seeking assistance in my approach to research as a whole;
this led to the final two weeks of the project being the most productive and enjoyable of the project.
Rather than trying to impress my supervisors in each meeting, I will now try to be open about issues that arise within my approach to research and seek their guidance on how to resolve them;
since starting to take this approach, my imposter syndrome and research worries have been drastically reduced by conversations with _Supervisor-1_ and _Supervisor-2_, so I'd like to thank them both for this.

#### Reading Outside Computer Science

While I had previously tried to use my experience as a teacher within my research, it was only during my injury that I learnt the benefit of reading philosophy and literature outside of computer science.
Through reading the works of writers such as Kafka, Kant, and Sartre, my outlook on research has shifted dramatically, and I now approach research with a deeper sense of critical thought.
I'm hoping that reading outside of computer science will enable me to better reflect on my research and continue to help alleviate the stresses of academia.
When discussing their early research career, _Supervisor-3_ told me that they threw themselves into Plato in the first few months, with another lecturer stating they did similar to Aristotle, so it seems that this is a common finding among those within academia.

### Closing Words

This reflective report offers insights into my learning experience during the summer project and how it has influenced my perspective on research as I move forward into my PhD.
I decided to write this report due to the negative feelings I harboured towards the work I produced for the summer project submission, as I saw the submission as a failure;
however, through discussions with my supervisors and thoughtful reflection on the submission, I now view the project as a valuable learning experience that includes numerous successes.

I hope to take the learning experiences forward into my PhD and later academic career.
The first major change will be separating the current project into suitable smaller projects, each with a goal venue and clear outcomes;
secondly, I am not setting concrete deadlines for the smaller projects yet, and I will decide with my supervisors which to focus on first.
I plan to take a short break after the summer project submission to rediscover my hobbies and socialise;
then, I will explore ways to incorporate downtime into my research schedule to prevent academic burnout.
I am confident that my supervisors will support me throughout my PhD studies, and I'm grateful for the early mistakes I've learned from in my academic career.

Finally, I want to express my gratitude to my supervisors, the BIG lab, and the Interactive AI CDT for their support during my summer project and throughout my foundation year.

### Bibliography

[1] Maddie Breeze. “Imposter syndrome as a public feeling”. In: Feeling academic in the neoliberal university: Feminist flights, fights and failures (2018), pp. 191–219. \
[2] Hanna Nori, Marja H Peura, and Arto Jauhiainen. “From imposter syndrome to heroic tales: Doctoral students’ backgrounds, study aims, and experiences”. In: International Journal of Doctoral Studies 15 (2020), p. 517. \
[3] Johnny Salda˜na. “Researcher, Analyze Thyself”. In: International Journal of Qualitative Methods 17.1 (2018), p. 1609406918801717. doi: 10.1177/1609406918801717. eprint: [https://doi.org/10.1177/1609406918801717](https://doi.org/10.1177/1609406918801717). url: [https://doi.org/10.1177/1609406918801717](https://doi.org/10.1177/1609406918801717). \
[4] John Ronald Reuel Tolkien. The Hobbit, or There and Back Again. London: George Allen & Unwin, 1937. \
[5] Catherine Wilkinson. “Imposter syndrome and the accidental academic: An autoethnographic account”. In: International Journal for Academic Development 25.4 (2020), pp. 363–374.
