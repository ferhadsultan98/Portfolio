import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import { FaFacebookF, FaGithub, FaInstagram, FaLocationArrow, FaLinkedinIn } from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import "./About.css";

const AboutSection = () => {
  const [state, handleSubmit] = useForm("xnnqdpjy"); // Formspree form ID'nizi buraya ekleyin
  const [messageSent, setMessageSent] = useState(false); // Form gönderildikten sonra mesaj durumu
  const [recaptchaValue, setRecaptchaValue] = useState(null); // reCAPTCHA değeri
  const [ipAddress, setIpAddress] = useState(''); // Kullanıcının IP adresi

  // IP adresini almak için ipify API'sini kullanacağız
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get('https://api.ipify.org?format=json');
      setIpAddress(response.data.ip); // IP adresini kaydediyoruz
    } catch (error) {
      console.error("IP adresi alınamadı: ", error);
    }
  };

  // useEffect ile bileşen yüklendiğinde IP adresini al
  React.useEffect(() => {
    fetchIpAddress();
  }, []);

  // Form gönderildikten sonra mesaj durumunu güncelle
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      handleSubmit(e);
      setMessageSent(true); // Form başarıyla gönderildiğinde bildirim göster
    } else {
      alert('Lütfen reCAPTCHA doğrulamasını tamamlayın!');
    }
  };

  return (
    <div className="AboutSectionContainer">
      <h1>Hakkımda</h1>
      <hr className="about-separator" />
      <div className="about-container">
        <div className="about-card">
          <div className="about-content">
            <p>
              15 Haziran 1998 doğumlu, Azerbaycan, Ağstafa doğumluyum. Azerbaycan Teknik Üniversitesi'nden lisans ve yüksek lisans diplomasına sahibim. HTML, CSS, JavaScript ve React gibi framework'lerle kullanıcı dostu arayüzler oluşturmayı seviyorum. Projelerde işbirliği yapmayı dört gözle bekliyorum!
            </p>
            <div className="about-tags">
              <span className="tag">#Yenilikçi</span>
              <span className="tag">#Geliştirici</span>
              <span className="tag">#Tasarımcı</span>
              <span className="tag">#Frontend</span>
              <span className="tag">#UI/UX</span>
              <span className="tag">#JavaScript</span>
              <span className="tag">#ReactJS</span>
              <span className="tag">#CSS</span>
              <span className="tag">#ResponsiveDesign</span>
            </div>
            
            {/* Form Bölümü */}
            <form className="ContactInputs" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Ad:</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Adınız"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />

              <label htmlFor="email">E-mail:</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="E-mailiniz"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />

              <label htmlFor="message">Mesaj:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Mesajınızı yazın.."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />

              {/* ReCAPTCHA */}
              <ReCAPTCHA
                sitekey="6Le1t3YqAAAAAOzep0YegC8GwSrmzZANgR5Csi-H"
                onChange={setRecaptchaValue}
              />

              <button type="submit" id="message-send" disabled={state.submitting}>
                Gönder
              </button>
            </form>

            {/* Mesaj Gönderildi Bildirimi */}
            {messageSent && <div className="notification">Mesajınız başarıyla gönderildi!</div>}

            {/* İletişim Bilgileri */}
            <div className="contact-info-container">
              <h2>İletişim</h2>
              <div className="CommonContact">
                <a>
                  <p>
                    <i><FaLocationArrow size="1.2em" /></i>
                    Baku, N.Narimanov
                  </p>
                </a>
                <a href="tel:+994555254193">
                  <p>
                    <i><IoIosCall size="1.6em" /></i>
                    +994 (55) 525 4193
                  </p>
                </a>
                <a href="mailto:sultanoworks@gmail.com?subject=Hi Farhad Sultan">
                  <p>
                    <i><IoIosMail size="1.6em" /></i>
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
