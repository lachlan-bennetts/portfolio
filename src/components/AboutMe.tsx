import { Box } from "@mui/material";
import { SectionHeader } from "../common/SectionHeading";


function AboutMe() {
  return (
    <Box sx={{width: '100%'}}>
      <Box>
      <SectionHeader coloured='Who am I?' />
        <p>
          The road I have taken into software engineering hasn't been conventional at all. I have worked across
          a range of different front-facing, non-technical and technical roles within my career that have gifted me a strong, unique
          perspective whilst working in software.
        </p>
        <p>
          In my current role, I am a Product Engineer at Optus. I work directly on the customer application (MyOptusApp),
          on a mix of sub-applications but primarily Optus Pulse, an application that receives over 300K users daily. My responsibilities
          mainly consist of implementing new features, addressing tech debt as well as liaising with the DevOps team
          to integrate and maintain CICD functionality for the application.
        </p>
        <p>
          I'm seeking a role in an organisation, where I can continue my engineering journey and have the opportunity to work in teams that
          are passionate, collaborative, supportive and consistenly striving to deliver high quality tech outcomes.
        </p>
      </Box>
      <Box>
        <SectionHeader text="My Coding Journey" />
        <p>
          In my life I have worked across many different professions and careers. My experiences ranges from real estate to
          management at an analytical chemistry lab. This variety has provided me with insights into what I'm enthusiastic about -
          creating.
        </p>
        <p>
          Having friends that were enthusiastic about coding got me on the train solving minor problems and computer automations with Python in
          2021. Later on in 2022 I attended the Web Developer Bootcamp at LeWagon where I built a tinder clone for dogs (Zoomies) with Ruby on Rails,
          JavaScript with PSQL as the database.
        </p>
        <p>
          During my first job search I made a strong effort in learning about commercially popular frameworks and languages. I focussed my attention
          to learn all I can about Javascript, Node, Typescript and React.
        </p>
        <p>
          More recently in my engineering role I've been working within my stack. I'm also gaining commercial experience in different CICD platforms; Kubernetes,
          Bamboo, AWS. Being able to work at Optus has been great as I'm able to interact with a wide array of different technologies and networks each day.
        </p>
      </Box>
      <Box>
        <SectionHeader text='Why a Diverse Skillset Helps not Hinders!' />
        <p>
          In today's day and age with new AI and technologies consistently being released into the commercial and retail space, the tech space is
          constantly evolving. In the current tech space(need to change) adaptability is one of if not the most important skill to have, both technically
          and practically, somebody who knows when to buckle down into the code or when to talk a problem out with the team.
        </p>
        <p>
          Thanks to having about a clown cars worth of unique jobs under my belt I have been able to become an extremely adaptable and collaborative
          worker. I'm quick at learning new and unfamiliar content due to my work history and am excited by what's new.
          Thanks to the large number of front-facing jobs in both professional and retail settings I'm gifted at understanding and communicating
          with key consumers and stakeholders as well as my own peers.
        </p>
        <p>
          Due to my non-conventional path to coding I bring a lot of outside perspective to the table over someone who has only known coding as
          a career for most of their lives.
        </p>
      </Box>
    </Box>
  )
}

export default AboutMe
