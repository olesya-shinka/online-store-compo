import React from "react";
import "./styles.css";

function Footer() {
  return (
    <footer>
      <div className="footer-header">
        <div className="footer-header-contacts">
          <img src="Brand.svg" alt="logo" />
          <div className="footer-header-item">
            <p className="footer-info-serv-text">8 800 841-95-95</p>
            <p className="footer-contacts-text">Служба поддержки</p>
          </div>
          <div className="footer-header-item">
            <p className="footer-info-serv-text">support@sport.ru</p>
            <p className="footer-contacts-text">Служба поддержки</p>
          </div>
        </div>
        <div className="footer-info-serv">
          <p className="footer-info-serv-text">Вакансии</p>
          <p className="footer-info-serv-text">Блог</p>
          <p className="footer-info-serv-text">Акции</p>
          <div className="footer-info-serv-btn">
            <p className="footer-info-serv-btn-text">Предложить идею</p>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-item">
          <h5 className="footer-body-item-title">Женщинам</h5>
          <p className="footer-body-item-text">Одежда</p>
          <p className="footer-body-item-text">Обувь</p>
          <p className="footer-body-item-text">Аксессуары</p>
          <p className="footer-body-item-text">Белье</p>
          <p className="footer-body-item-text">Bra fitting</p>
        </div>
        <div className="footer-body-item">
          <h5 className="footer-body-item-title">Мужчинам</h5>
          <p className="footer-body-item-text">Одежда</p>
          <p className="footer-body-item-text">Обувь</p>
          <p className="footer-body-item-text">Аксессуары</p>
          <p className="footer-body-item-text">Белье</p>
        </div>
        <div className="footer-body-item">
          <h5 className="footer-body-item-title">Детям</h5>
          <p className="footer-body-item-text">Одежда</p>
          <p className="footer-body-item-text">Обувь</p>
          <p className="footer-body-item-text">Аксессуары</p>
          <p className="footer-body-item-text">Белье</p>
          <p className="footer-body-item-text">Игрушки</p>
          <p className="footer-body-item-text">Малыши</p>
        </div>
        <div className="footer-body-item">
          <h5 className="footer-body-item-title">Виды спорта</h5>
          <p className="footer-body-item-text">Велоспорт</p>
          <p className="footer-body-item-text">Туризм</p>
          <p className="footer-body-item-text">Тренажеры и фитнес</p>
          <p className="footer-body-item-text">Командные виды спорта</p>
          <p className="footer-body-item-text">Самокаты</p>
        </div>
      </div>
      <div className="footer-info">
        <div className="footer-info-box">
          <div className="footer-info-div">
            <img src="Icon-list.svg" alt="pdf" />
            <p className="footer-info-subtitle">PDF презентация</p>
          </div>
          <div className="footer-info-div">
            <img src="Icon-cam.svg" alt="video" />
            <p className="footer-info-subtitle">Видео инструкция</p>
          </div>
          <div className="footer-info-div">
            <img src="Icon-q.svg" alt="?" />
            <p className="footer-info-subtitle">FAQ</p>
          </div>
          <div className="footer-info-div">
            <img src="Icon-youtube.svg" alt="youtube" />
            <p className="footer-info-subtitleY">Мы на youtube</p>
          </div>
          <div className="footer-info-div">
            <p className="footer-info-subtitle">Политика конфиденциальности</p>
          </div>
          <div className="footer-info-div">
            <p className="footer-info-subtitle">Лицензионное соглашение</p>
          </div>
        </div>
        <div className="footer-info-box2">
          <p className="footer-info-subtitleT">
            Настоящая Политика обработки персональных данных разработана в
            соответствии с Конституцией Российской Федерации, Трудовым кодексом
            Российской Федерации, Гражданским кодексом Российской Федерации,
            Федеральным законом от 27 июля 2006 года 149-ФЗ "Об информации,
            информационных технологиях и о защите информации",
          </p>
          <div className="footer-info-dev">
            <img src="Brand-footer.svg" alt="logo" />
            <p className="footer-info-subtitle2">Разработка платформы</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
