function SocialButton({ icon, link }) {
  return (
    <>
      <button
        onClick={() => window.open(link, "_blank")}
        className="p-1 hover:bg-[#2e2218]"
      >
        <i className={`fa ${icon} text-2xl p-1 rounded-md`}></i>
      </button>
    </>
  );
}

export default SocialButton;
