import logo from "../assets/img/LogoHotel.svg";

export const Logo = ({ text }) => {
  return (
    <div className="auth-form-logo-container">
      <img src={logo} alt="Escudo" />
      <span>&nbsp;&nbsp;{text}</span>
    </div>
  );
};