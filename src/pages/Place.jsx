import PlaceBg from "/assets/imgs/catbg_place.png";
import PlaceHome from "/assets/imgs/pet_house_place.png";
import shelter from "/assets/imgs/shelter_place.png";
import sample from "/assets/imgs/sample_place.png";
import callIcon from "/assets/icons/call_icon.svg";
import PlaceIcon from "/assets/icons/place_icon.svg";

function Place() {
  return (
    <>
      <article className="max-w-4xl mx-auto my-0 relative">
        <img className="w-full object-cover object-center" src={PlaceBg} alt="" />
        <section className="relative top-[-3.5rem] mb-[-3.5rem] w-[92%] mx-auto my-0">
          <h2 className="sr-only">내 주변 보호소 찾기</h2>
          <a className="bg-primary text-2xl md:text-4xl lg:text-5xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] flex justify-between items-center pl-[6%] pr-[3%] pt-[4%] pb-[3%] rounded-[20px]" href="">
            <p className="font-extrabold leading-[1.8rem] md:leading-[2.8rem] w-[55%] transition-[0.3s]">
              <span className="text-xs md:text-lg lg:text-2xl block font-bold leading-[normal] transition-[0.3s] mb-[0.3rem]">가까운 곳부터 천천히</span>
              내 주변<br/> 보호소 찾기
            </p>
            <img className="w-[34%]" src={PlaceHome} alt="" />
            </a>
        </section>
        <section className="w-[92%] mx-auto my-0">
          <h2 className="font-bold mt-[14%] mb-[3%] mx-0">추천 보호소</h2>
          <div className="shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-[15px] p-[4%]">
            <img className="" src={shelter} alt="" />
            <dl>
              <dt className="text-base font-bold mt-[5%] mb-[2%] mx-0">고양시 동물보호센터</dt>
              <dd className="text-xs ">주소: 경기도 고양시 덕양구 고양대로 1695</dd>
            </dl>
            <div className="flex justify-between text-sm mt-[5%]">
              <button className="bg-primary rounded-[10px] w-[48%] flex justify-center items-center px-0 py-[3%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <img className="inline-block w-[13%] mr-[5%]" src={callIcon} alt="" />
                전화하기
              </button>
              <button className="bg-pet-green rounded-[10px] text-white w-[48%] flex justify-center items-center px-0 py-[3%] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
                <img className="inline-block w-[11%] mr-[5%]" src={PlaceIcon} alt="" />
                위치보기
              </button>
            </div>
          </div>
        </section>
        <section className="w-[92%] mx-auto my-0 mb-[25%]">
          <h2 className="font-bold mt-[14%] mb-[3%] mx-0 text-sm">더보기</h2>
          <ul>
            <li className="flex overflow-hidden items-center mb-[5%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <img className="w-[35%] h-auto" src={sample} alt="" />
              <dl className="pl-[2.5%]">
                <dt className="text-sm font-bold mb-[3%]">고양시 동물보호센터</dt>
                <dd className="text-xs">주소: 경기도 고양시 덕양구 고양대로 1695</dd>
                <dd className="text-xs">Tel : 042-825-1118</dd>
              </dl>
            </li>
            <li className="flex overflow-hidden items-center mb-[5%] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
              <img className="w-[35%] h-auto" src={sample} alt="" />
              <dl className="pl-[2.5%]">
                <dt className="text-sm font-bold mb-[3%]">고양시 동물보호센터</dt>
                <dd className="text-xs">주소: 경기도 고양시 덕양구 고양대로 1695</dd>
                <dd className="text-xs">Tel : 042-825-1118</dd>
              </dl>
            </li>
          </ul>
        </section>
      </article>
    </>
  )
}

export default Place