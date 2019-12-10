<script>
  import Section from "./Section.svelte";
  import Button from "../Ui/Button.svelte";
</script>

<style>
  .contacts-content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 1rem;
    margin-top: 2rem;
  }
  form > .form-control > input,
  form > .form-control > textarea {
    border: none;
    border-bottom: 1px solid #ccc;
    width: 100%;
    resize: none;
    outline: none;
  }
  .contact-details {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    justify-items: center;
  }
  .contact-details .address,
  .contact-details .phone,
  .contact-details .email {
    display: grid;
    justify-items: center;
  }
  .contact-details img {
    width: 30px;
    height: auto;
  }
  .map {
    margin-top: 5rem;
  }
</style>

<Section>
  <div slot="header">
    <h1>Get in touch</h1>
  </div>
  <div class="contacts-content">
    <form action="">
      <div class="form-control">
        <input type="text" name="name" placeholder="Name" id="" />
      </div>
      <div class="form-control">
        <input type="email" name="email" placeholder="Email" id="" />
      </div>
      <div class="form-control">
        <textarea
          type="text"
          name="text"
          id=""
          placeholder="Message"
          rows="10" />
      </div>
      <div class="form-control">
        <Button mode="dark padding">Send</Button>
      </div>
    </form>
    <div class="contact-details">
      <div class="address">
        <span>
          <img src="./media/icons/icons8-marker-64.png" alt="location" />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          corporis.
        </p>
      </div>
      <div class="phone">
        <span>
          <img src="./media/icons/icons8-shake-phone-64.png" alt="phone_icon" />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam,
          corporis.
        </p>
      </div>
      <div class="email">
        <span>
          <img src="./media/icons/icons8-envelope-64.png" alt="envelope" />
        </span>
        <p>info@email.com</p>
      </div>
    </div>
  </div>
  <div class="map" />
</Section>
