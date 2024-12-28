function Badge({ text }) {
  return (
    <>
      <button className="flex justify-center p-1 items-center mr-[0.5rem] text-[#1d252c] text-[0.7rem] bg-[#1261a0] rounded-[1em] filter hover:brightness-[110%]">
        <div className="text-[#fffff9]">{text}</div>
      </button>
    </>
  );
}

export default Badge;
