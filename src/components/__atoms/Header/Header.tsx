import desktopheader from "../../../assets/images/desktopi.png";
function Header() {
  return (
    <>
      <div className="w-full h-[156px] flex items-center justify-center object-fill ">
        <img className="!h-[156px]" src={desktopheader} alt="" />
      </div>
    </>
  );
}
export default Header;
