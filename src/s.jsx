<section class="contact-sec sec-pad">
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="contact-detail">
          <h1 class="section-title">Contact us</h1>

          <ul class="contact-ul">
            <li><i class="fa fa-location-dot"></i> 91, Ram Nagar, Ram Mandir, Delhi</li>

            <li>
              <i class="fa fa-phone"></i>
              <a href="tel:08510004495"><b>0255000XXXX</b></a>,
              <a href="tel:08510005495"><b>0251600XXXX</b></a>
            </li>

            <li>
              <i class="fa-solid fa-envelope"></i>
              <a href="mailto:pardeepkumar4bjp@gmail.com"><b> demounknown@gmail.com</b></a>
            </li>
          </ul>

          <span>
            <a href="#" class="fb"><i class="fa-brands fa-facebook"></i></a>
            <a href="#" class="insta"><i class="fa-brands fa-instagram"></i></a>
            <a href="#" class="twitter"><i class="fa-brands fa-twitter"></i></a>
          </span>
        </div>
      </div>

      <div class="col-md-6">
        <form action="#" class="contFrm" onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-sm-6">
              <input type="text" name="name" placeholder="Your Name" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="email" name="email" placeholder="Email Address" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="tel" name="message" placeholder="Phone Number" class="inptFld" required />
            </div>

            <div class="col-sm-6">
              <input type="text" name="sub" placeholder="Subject" class="inptFld" required />
            </div>

            <div class="col-12">
              <textarea class="inptFld" rows="" cols="" placeholder="Your Message..." required></textarea>
            </div>

            <div class="col-12">
              <input type="submit" name="submit" value="SUBMIT"  class="inptBtn">{status}</input> 
            </div>
          </div>
        </form>
      </div>
    </div>

    <div style="text-align: center; margin-top: 20px;">
      <p> Copyright &copy;
        <script>
          document.write(new Date().getFullYear());
        </script>
        All rights reserved | Ajeet
      </p>
    </div>

  </div>
</section>