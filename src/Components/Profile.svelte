<script>
  import Progress from "./Progress.svelte";
  import Section from "./Section.svelte";
  import resume from "../Store/global-store.js";
  let cv = {};
  let unsubscribe = resume.subscribe(res => {
    cv = { ...cv, ...res };
  });

  unsubscribe();
</script>

<style>
  .intro {
    font-size: 3rem;
    font-weight: 300;
    line-height: 1.4em;
    margin-bottom: 2rem;
    text-transform: none;
  }

  .about {
    font: 400 14px "Poppins", sans-serif;
    -webkit-font-smoothing: antialiased;
    line-height: 30px;
    color: #727272;
    font-size: 16px;
    font-weight: 300;
    line-height: 2.2;
  }

  .personal {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(40px, auto);
    max-height: 200px;
  }
  .personal > p span {
    color: #333;
    font-weight: 400;
    margin-right: 5px;
  }

  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    margin-bottom: 2rem;
  }
</style>

<Section>
  <div slot="header">
    <h1>Resume</h1>
  </div>
  <div class="intro">
    <p>{cv.intro}</p>
  </div>
  <hr />
  <div class="about">
    <p>{cv.about}</p>
  </div>
  <div class="personal">
    <h3>Personal information</h3>
    <p>
      <span>Name</span>
      : {cv.personal_data.name}
    </p>
    <p>Address : {cv.personal_data.address}</p>
    <p>Phone : {cv.personal_data.phone}</p>
    <p>Date of birth: {cv.personal_data.date_of_birt}</p>
    <p>Email : {cv.personal_data.email}</p>
    <p>Skype: {cv.personal_data.skype}</p>
  </div>

  <div class="skills">
    <h3>Skills</h3>
    {#each cv.skills as skill}
      <p>
        <span>{skill.name}</span>
      </p>
      <Progress value={skill.knowledge} />
    {/each}
  </div>
  <div class="education">
    <h3>Education</h3>
    <h5>{cv.education.university}</h5>
    <p>{cv.education.description}</p>
  </div>
  <div class="services">
    {#each cv.services as service (service.name)}
      <div class="service-item">
        <h1>{service.name}</h1>
        <p>{service.description}</p>
      </div>
    {/each}
  </div>
</Section>
