import abc from '../../../assets/abc.jpg';

const Bann = () => {
  return (
     <div className="flex justify-center pt-5">
      <div className="h-[150px] w-[430px]">
        <img
          src={abc}
          className="h-full w-full rounded-2xl"
        />
      </div>
    </div>
  )
}

export default Bann
