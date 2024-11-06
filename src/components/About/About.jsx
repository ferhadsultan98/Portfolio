import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLocationArrow,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosCall, IoIosMail } from "react-icons/io";
import "./About.css";

const AboutSection = () => {
  const [state, handleSubmit] = useForm("xnnqdpjy"); // Formspree form ID'nizi buraya ekleyin
  const [messageSent, setMessageSent] = useState(false); // Form gönderildikten sonra mesaj durumu
  const [recaptchaValue, setRecaptchaValue] = useState(null); // reCAPTCHA değeri
  const [ipAddress, setIpAddress] = useState(""); // Kullanıcının IP adresi
  const [locationData, setLocationData] = useState(null); // Coğrafi bilgileri tutan state
  const [loading, setLoading] = useState(true); // Yükleniyor durumu

  // IP adresini almak için ipify API'sini kullanacağız
  const fetchIpAddress = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      setIpAddress(response.data.ip);
      fetchLocationData(response.data.ip); // IP alındıktan sonra coğrafi bilgileri çek
    } catch (error) {
      console.error("IP adresi alınamadı: ", error);
    }
  };

  // IP adresiyle coğrafi bilgileri almak için ipify geo API'sini çağırıyoruz
  const fetchLocationData = async (ip) => {
    try {
      const response = await axios.get(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_psO7rp32LxxqSHjuhPgDsxr0ArzO0&ipAddress=${ip}`
      );
      setLocationData(response.data); // Coğrafi veriyi state'e kaydediyoruz
      setLoading(false); // Yükleniyor durumunu kaldırıyoruz
    } catch (error) {
      console.error("Coğrafi bilgi alınırken bir hata oluştu: ", error);
      setLoading(false);
    }
  };

  // useEffect ile bileşen yüklendiğinde IP adresini al
  useEffect(() => {
    fetchIpAddress();
  }, []);

  // Form gönderildikten sonra mesaj durumunu güncelle
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (recaptchaValue) {
      // Form verilerine IP adresini de ekliyoruz
      const formDataWithIp = {
        ...state.values,
        ipAddress: ipAddress, // IP adresini burada form verilerine ekliyoruz
      };

      // Formspree'yi veri ile gönder
      handleSubmit(e, formDataWithIp);
      
      setMessageSent(true); // Form başarıyla gönderildiğinde bildirim göster
      setTimeout(() => {
        setMessageSent(false); // 3 saniye sonra bildirim kaybolur
      }, 3000);
    } else {
      alert("Zəhmət olmasa reCAPTCHA yoxlamasını tamamlayın!");
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

            {/* Form Bölümü */}
            <form className="ContactInputs" onSubmit={handleFormSubmit}>
              <label htmlFor="name">Ad:</label>
              <input id="name" type="text" name="name" placeholder="Adınız" />
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

              <button
                type="submit"
                id="message-send"
                disabled={state.submitting}
              >
                Gönder
              </button>
            </form>

            {/* Mesaj Gönderildi Bildirimi */}
            {messageSent && (
              <div className="notification fade-in-out">
                Mesajınız başarıyla gönderildi!
              </div>
            )}

            {/* İletişim Bilgileri */}
            <div className="contact-info-container">
              <h2>İletişim</h2>
              <div className="CommonContact">
                <a>
                  <p>
                    <i>
                      <FaLocationArrow size="1.2em" />
                    </i>
                    {loading ? "Yükleniyor..." : locationData ? locationData.city : "Bilinmiyor"} , {locationData ? locationData.country : "Bilinmiyor"}
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
                  <a
                    href="https://www.facebook.com/ferhad.sultann"
                    target="blank"
                  >
                    <li className="icon facebook">
                      <span className="iconname">Facebook</span>
                      <FaFacebookF size="1.6em" />
                    </li>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/farhadsultan98/"
                    target="blank"
                  >
                    <li className="icon linkedin">
                      <span className="iconname">Linkedin</span>
                      <FaLinkedinIn size="1.6em" />
                    </li>
                  </a>
                  <a
                    href="https://www.instagram.com/ferhad.sultann"
                    target="blank"
                  >
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
