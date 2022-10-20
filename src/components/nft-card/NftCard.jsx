import Image from 'next/image';
const NftCard = ({ mapitem }) => {
  console.log(mapitem, 'mapitem');
  return (
    <>
      {mapitem.metadata ? (
        <div className="max-w-[321px] border-2  border-[#4D5A74] bg-[#21252D] text-white p-4 rounded-xl ">
          {mapitem.metadata.image ? (
            <Image height={300} width={300} src={mapitem.thumbnailImage} />
          ) : (
            <Image height={300} width={300} src={'/assets/profilePic.png'} />
          )}
          <div className="flex flex-col xl:gap-3 lg:gap-0 py-3 ">
            <div className="flex justify-between ">
              <div className="xl:h-5 lg:h-11 font-poppinsmedium">
                {mapitem.name}
              </div>
            </div>
            <div className="flex flex-col justify-between h-8 gap-2 ">
              <div>
                <p className="text-[#647AA7] font-poppinsmedium ">
                  Designation
                </p>
              </div>
              <div className="text-[#0088FF] font-poppinsmedium flex gap-4">
                {mapitem?.metadata.description ? (
                  <>
                    <p>{mapitem?.metadata.description}</p>
                  </>
                ) : (
                  <p className="text-gray-500 font-poppinsmedium">not listed</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-[321px] border-2  border-[#4D5A74] bg-[#21252D] text-white p-4 rounded-xl  ">
          {mapitem.thumbnailImage ? (
            <Image height={300} width={300} src={mapitem.thumbnailImage} />
          ) : (
            <Image height={300} width={300} src={'/assets/profilePic.png'} />
          )}
          <div className="p-4 flex flex-col gap-2 ">
            <div className="flex justify-between ">
              <div className="xl:h-5 lg:h-11 font-poppinsmedium">
                {mapitem.name}
              </div>
              <div>
                <Image src={'/assets/more.png'} height={5} width={20} />
              </div>
            </div>
            <div className="flex justify-between h-4 ">
              <div className="text-[#0088FF]">
                {mapitem?.metadata.description
                  ? mapitem?.metadata.description
                  : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default NftCard;
{
  /* <div className="xl:h-2 lg:h-3 md:h-0 text-sm text-[#A8A29E] ">
            {mapitem.description}
          </div> */
}
