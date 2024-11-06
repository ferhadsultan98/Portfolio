import React, { useState, useEffect } from "react";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import ReCAPTCHA from "react-google-recaptcha"; // Import ReCAPTCHA
import { useForm, ValidationError } from '@formspree/react'; // Import Formspree
import "./About.css";

const AboutSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [notification, setNotification] = useState('');
  const [notificationClass, setNotificationClass] = useState('');
  const [recaptchaValue, setRecaptchaValue] = useState(null); // ReCAPTCHA'nın değeri
  const [geoInfo, setGeoInfo] = useState({
    country_code: '',
    country_name: '',
    region_code: '',
    region_name: '',
    city: '',
    country_flag: '',
    current_time: '',
    currency_code: ''
  }); // IP adresi bilgisi

  const [state, handleSubmit] = useForm("xnnqdpjy"); // Formspree hook

  useEffect(() => {
    // ipstack API ile coğrafi bilgiyi al
    fetch('http://api.ipstack.com/check?access_key=95a17e2bf0aab492780d2512f6dc5082')
      .then(response => response.json())
      .then(data => {
        setGeoInfo({
          country_code: data.country_code,
          country_name: data.country_name,
          region_code: data.region_code,
          region_name: data.region_name,
          city: data.city,
          country_flag: data.location.country_flag,
          current_time: data.time_zone.current_time,
          currency_code: data.currency.code
        });
      })
      .catch(error => console.error("IP lookup error:", error));
  }, []); // Component mount olduğunda IP bilgisi al

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value); // ReCAPTCHA'yı güncelle
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Eğer ReCAPTCHA doğrulanmamışsa form gönderilmesin
    if (!recaptchaValue) {
      setNotification('Lütfen güvenlik doğrulamasını tamamlayın!');
      setNotificationClass('show');
      setTimeout(() => {
        setNotificationClass('hide');
        setNotification('');
      }, 3000);
      return;
    }

    // Mesaja coğrafi bilgileri ekle
    const messageWithGeoInfo = `
      ${formData.message}
      
      Gönderenin konumu: 
      Ülke: ${data.country_name} (${geoInfo.country_code})
      Bölge: ${geoInfo.region_name} (${geoInfo.region_code})
      Şehir: ${geoInfo.city}
      Bayrak: ${geoInfo.country_flag}
      Zaman: ${geoInfo.current_time}
      Para Birimi: ${geoInfo.currency_code}
    `;

    // Formu göndermek için Formspree'yi kullan
    handleSubmit({
      ...formData,
      message: messageWithGeoInfo,
    });

    // Başarı durumunda bildirim göster
    setNotification('Mesajınız başarıyla gönderildi!');
    setNotificationClass('show');

    setTimeout(() => {
      setNotificationClass('hide');
      setTimeout(() => {
        setNotification('');
        setNotificationClass('');
      }, 500);
    }, 3000);

    // Formu sıfırla
    setFormData({ name: '', email: '', message: '' });
    setRecaptchaValue(null); // ReCAPTCHA'yı sıfırla
  };

  // Formspree success state
  if (state.succeeded) {
    return <p>Teşekkürler, mesajınız başarıyla gönderildi!</p>;
  }

  return (
    <div className="AboutSectionContainer">
      <h1>About</h1>
      <hr className="about-separator" />
      <div className="about-container">
        <div className="about-card">
          <div className="about-content">
            <p>
              I’m an aspiring frontend developer born on June 15, 1998, in
              Agstafa, Azerbaijan. I hold a bachelor's and master's degree in
              from Azerbaijan Technical University. I’m passionate about
              creating user-friendly interfaces using HTML, CSS, JavaScript, and
              frameworks like React. I look forward to connecting and
              collaborating on projects!
            </p>
            <div className="about-tags">
              <span className="tag">#Innovative</span>
              <span className="tag">#Developer</span>
              <span className="tag">#Designer</span>
              <span className="tag">#Frontend</span>
              <span className="tag">#UI/UX</span>
              <span className="tag">#JavaScript</span>
              <span className="tag">#ReactJS</span>
              <span className="tag">#CSS</span>
              <span className="tag">#ResponsiveDesign</span>
            </div>

            {/* Formspree Contact Form */}
            <form className="ContactInputs" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Adınız:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Adınızı girin"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="E-mailiniz"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="message">Mesaj:</label>
              <textarea
                name="message"
                id="message"
                placeholder="Mesajınızı yazın.."
                value={formData.message}
                onChange={handleChange}
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* ReCAPTCHA */}
              <ReCAPTCHA
                sitekey="6Ldo13YqAAAAAKbJUHESc9JUuiiwAJ11p6BNBtZw" // Replace with your site key
                onChange={handleRecaptchaChange}
              />

              <button type="submit" id="message-send" disabled={state.submitting}>
                Göndər
              </button>

              {/* Notification */}
              <div className={`notification ${notificationClass}`}>
                {notification}
              </div>
            </form>

            <div className="contact-info-container">
              <h2>Contact</h2>
              <div className="CommonContact">
                <a>
                  <p>
                    <i>
                      <FaLocationArrow size="1.2em" />
                    </i>
                    Baku, N.Narimanov
                  </p>
                </a>
                <a href="tel:+994555254193">
                  <p>
                    <i>
                      <IoIosCall size="1.6em" />
                    </i>
                    +994 (55) 525 4193
                  </p>
                </a>
                <a href="mailto:sultanoworks@gmail.com?subject=Hi Farhad Sultan">
                  <p>
                    <i>
                      <IoIosMail size="1.6em" />
                    </i>
                    sultanoworks@gmail.com
                  </p>
                </a>
              </div>
              <div className="ContactLinks">
                <ul className="SocialIcons">
                  <a href="https://www.facebook.com/ferhad.sultann" target="blank">
                    <li className="icon facebook">
                      <span className="iconname">Facebook</span>
                      <FaFacebookF size="1.6em" />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/in/farhadsultan98/" target="blank">
                    <li className="icon linkedin">
                      <span className="iconname">Linkedin</span>
                      <FaLinkedinIn size="1.6em" />
                    </li>
                  </a>
                  <a href="https://www.instagram.com/ferhad.sultann" target="blank">
                    <li className="icon instagram">
                      <span className="iconname">Instagram</span>
                      <FaInstagram size="1.6em" />
                    </li>
                  </a>
                  <a href="https://github.com/ferhadsultan98" target="blank">
                    <li className="icon github">
                      <span className="iconname">Github</span>
                      <FaGithub size="1.6em" />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
