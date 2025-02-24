<template>
  <footer>
    <div class="footer-links">
      <div class="footer-contact">
        <img src="../assets/logo1.png" alt="" />
        <span><i class="fa-solid fa-envelope"></i> hello@skillbridge.com</span>
        <span><i class="fa-solid fa-phone"></i> +234 9855744752</span>
        <span
          ><i class="fa-solid fa-location-dot"></i> Somewhere in the World</span
        >
      </div>

      <ul class="footer-home">
        <h4>Home</h4>
        <a href="">Benefits</a>
        <a href="">Our Courses</a>
        <a href="">Our Testimonials</a>
        <a href="">Our FAQ</a>
      </ul>

      <ul class="footer-about">
        <h4>About Us</h4>
        <a href="">Company</a>
        <a href="">Our Achievements</a>
        <a href="">Our Goals</a>
      </ul>

      <div class="footer-social">
        <h4>Social Profiles</h4>
        <div class="social-icons">
          <a href=""><i class="fa-brands fa-facebook"></i></a>
          <a href=""><i class="fa-brands fa-twitter"></i></a>
          <a href=""><i class="fa-brands fa-linkedin"></i></a>
        </div>
      </div>
    </div>

    <div class="footer-reserved">© 2023 Skillbridge. All rights reserved.</div>
  </footer>
</template>

<script>
export default {
  name: "AppFooterVue",
};
</script>



<style scoped>
footer {
  padding: 35px 0;
  width: 90%;
  margin: 0 auto;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 2rem;
  margin-bottom: 2rem;
}

.footer-nav-wrapper {
  display: none;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  row-gap: 1rem;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-right: 0.8rem;
}

.footer-contact img {
  width: 2.5rem;
  margin-bottom: 1rem;
}

.footer-contact span {
  font-size: 17px;
}

/* footer navs */
.footer-home h4 {
  margin-bottom: 0.7rem;
  font-size: 17px;
}

.footer-home a {
  display: block;
  text-decoration: none;
  color: hsl(0, 0%, 50%);
  line-height: 1.7;
}

.footer-about h4 {
  margin-bottom: 0.7rem;
  font-size: 17px;
}

.footer-about a {
  display: block;
  text-decoration: none;
  color: hsl(0, 0%, 50%);
  line-height: 1.7;
}

/* footer socials */

.footer-social {
  margin-bottom: 1.5rem;
}
.footer-social h4 {
  font-size: 17px;
  margin-bottom: 0.5rem;
}

.footer-social a {
  padding: 0.5rem 0.6rem;
  background-color: hsl(0, 0%, 95%);
  text-decoration: none;
  color: #000;
  font-size: 22px;
  border-radius: 5px;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

/* footer reserved */
.footer-reserved {
  text-align: center;
  color: hsl(0, 0%, 50%);
}

@media (min-width: 1000px) {
  footer {
    padding: 35px 0;
    width: 90%;
    margin: 0 auto;
  }

  .footer-links {
    display: grid;
    grid-template-columns: 450px auto auto auto;
    column-gap: 2rem;
    row-gap: 2rem;
    margin-bottom: 5rem;
  }

  .footer-contact {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    margin-right: 4rem;
  }

  .footer-contact img {
    width: 2rem;
    margin-bottom: 1rem;
  }

  .footer-contact span {
    font-size: 13px;
  }

  /* footer navs */
  .footer-home h4 {
    margin-bottom: 0.7rem;
    font-size: 14px;
  }

  .footer-home a {
    display: block;
    text-decoration: none;
    color: hsl(0, 0%, 50%);
    line-height: 1.7;
    font-size: 13px;
  }

  .footer-about h4 {
    margin-bottom: 0.7rem;
    font-size: 14px;
  }

  .footer-about a {
    display: block;
    text-decoration: none;
    color: hsl(0, 0%, 50%);
    line-height: 1.7;
    font-size: 13px;
  }

  /* footer socials */

  .footer-social {
    margin-bottom: 1.5rem;
  }
  .footer-social h4 {
    font-size: 14px;
    margin-bottom: 0.5rem;
  }

  .footer-social a {
    padding: 0.4rem 0.5rem;
    background-color: hsl(0, 0%, 95%);
    text-decoration: none;
    color: #000;
    font-size: 14px;
    border-radius: 5px;
  }

  .social-icons {
    display: flex;
    gap: 1rem;
  }

  /* footer reserved */
  .footer-reserved {
    text-align: center;
    color: hsl(0, 0%, 50%);
    font-size: 13px;
  }
}
</style>
