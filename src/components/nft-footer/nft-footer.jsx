import NftFooterStyles from './nft-footer.module.scss';
import NftButton from '../nft-button/nft-button';

export default function NftFooter() {
  return (
    <>
      <div className={'pt-14 pb-8 ' + NftFooterStyles.borderTop}>
        <div className="flex flex-col gap-10 justify-evenly">
          <div className="flex justify-center text-center">
            <h1 className="text-[#C6C6C6] lg:w-2/3 font-ralewayregular lg:text-[17px] 2xs:w-[80%] 2xs:text-[14px]">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eiu
            </h1>
          </div>
          <div className="flex gap-4 justify-center lg:flex-row 2xs:flex-col 2xs:items-center">
            <div>
              <input
                className="w-80 2xs:w-64 h-10 rounded-lg bg-black text-[#D4D4D4] border-[#D4D4D4] border-[1px] pl-2"
                placeholder="Email Address"
              ></input>
            </div>
            <div className="lg:w-[10%] 2xs:w-[50%]">
              <NftButton text="Subscribe" bgcolor="violet" />
            </div>
          </div>
          <div className="flex w-full justify-center">
            <span
              className={
                'text-[24px] font-ethnocentric font-extrabold text-white '
              }
            >
              Moon
            </span>
            <span className="text-[24px] font-ethnocentric font-extrabold text-headerorange">
              Hive
            </span>
          </div>
          <div className="lg:w-1/2 mx-auto 2xs:w-[80%] ">
            <p className="text-[#C6C6C6] text-center font-ralewayregular lg:text-[17px] 2xs:text-[14px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum d
            </p>
          </div>
          <div className="flex justify-center gap-4"></div>
        </div>
      </div>
    </>
  );
}
